let mysql =require('mysql');

let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

function write (id, pwd, email, phone, address, name, connection){
connection.connect((err)=> {
//삽입 부분
  let sql = `INSERT INTO user(${table}id, user_pwd , user_email, user_phone, user_address, user_name) VALUES(?,?,?,?,?,?)`;

  let table = 'user';

  let user_value=[id, pwd, email, phone, address, name];
  connection.query(sql, user_value, (err, result, fields)=>{
    console.log('삽입되었습니다');
  });
  });
};

function pro_write(num, name, unit, size, price, connection){
connection.connect((err)=> {
//삽입 부분
  let sql = `INSERT INTO product(product_num, product_name , unit, size, prize) VALUES(?,?,?,?,?)`;

  let pro_value=[num,name,unit,size,price];
  connection.query(sql, pro_value, (err, rsult, fields)=>{
    console.log('삽입되었습니다');
  });
  });
};

function pro_write2(size, brand, num, name, unit, price, connection) {
  let make_product_num = (size * 100000) + (brand * 10000) + num*1;
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
          make_product_num = (size * 100000) + (brand * 10000) + num*1;
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
      let sql = `INSERT INTO product(product_num, product_name, unit, size, price) VALUES(?,?,?,?,?)`;
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



module.exports = {write, pro_write, pro_write2};