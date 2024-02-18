let mysql =require('mysql');

let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
function user_write (table, id, pwd, email, phone, address, name, connection){
connection.connect((err)=> {
//삽입 부분
  let sql = `INSERT INTO ${table}(${table}_id, ${table}_pwd , ${table}_email, ${table}_phone, ${table}_address, ${table}_name) VALUES(?,?,?,?,?,?)`;

  let user_value=[id, pwd, email, phone, address, name];
  connection.query(sql, user_value, (err, result, fields)=>{
    console.log('삽입되었습니다');
  });
  });
};
function orders_write(table, num, userid, product_num, count, price, connection){
  connection.connect((err)=> {
  //삽입 부분
    let sql = `INSERT INTO orders(${table}_num,${table}_user_id,${table}_product_num,${table}_count, ${table}_price) VALUES(?,?,?,?,?)`;
  
    let ord_value=[num,userid,product_num,count,price];
    connection.query(sql, ord_value, (err, result, fields)=>{
      if(err){
        return console.log(err.message);
      }
      console.log('삽입되었습니다');
    });
    });
  };
function cart_write(product_num, userid , connection){
  connection.connect((err)=> {
  //삽입 부분
    let sql = `INSERT INTO cart(cart_product_num, cart_user_id) VALUES(?,?)`;
  
    let cart_value=[product_num,userid];
    connection.query(sql, cart_value, (err, result, fields)=>{
      console.log('삽입되었습니다');
    });
    });
  };
function pay_write(num, name, unit, size, price, connection){
  connection.connect((err)=> {
  //삽입 부분
    let sql = `INSERT INTO payment(payment_order_num, payment_card_num) VALUES(?,?)`;
  
    let pay_value=[num,name,unit,size,price];
    connection.query(sql, pay_value, (err, result, fields)=>{
      console.log('삽입되었습니다');
    });
    });
  };
function pro_write(table, size, brand, num, name, unit, price, connection) {
  // let make_product_num = (size * 100000) + (brand * 10000) + num*1;
  let make_product_num = (num * 1) + (brand * 10000000) + (size*100);
  console.log(`${make_product_num}`);
  connection.connect((err) => {
    let check =0;
    let columnQuery = `SELECT product_num FROM product`;
    connection.query(columnQuery, (error, results, fields) => {
      if (results.length > 0) {
        for (let i = 0; i < results.length; i++) {
          if (results[i].product_num == make_product_num) {
            console.log('사용 불가능한 번호입니다.');
            num=0;
            check =1;
          }
        }
      }
      if(check==1){
        while(1){
          num = num+1;
          let check2 =0;
          // make_product_num = (size * 100000) + (brand * 10000) + num*1;
          make_product_num = (num * 1) + (brand * 10000000) + (size*100);
          for (let i = 0; i < results.length; i++) {
            if (results[i].product_num == make_product_num) {
              check2 =1;
            }
          }
          if (check2==0){
            break;
          }
        }
      }
      let sql = `INSERT INTO product(${table}_num, ${table}_name, ${table}_unit, ${table}_size, ${table}_price) VALUES(?,?,?,?,?)`;
      let pro_value = [make_product_num, name, unit, size, price];
      connection.query(sql, pro_value, (err, result, fields) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(`${make_product_num}가 삽입되었습니다`);
      }); 
    });
  });
};



module.exports = {user_write, pro_write, orders_write, cart_write, pay_write, };
