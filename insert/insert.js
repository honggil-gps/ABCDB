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
  let sql = `INSERT INTO ${table}(${table}id, ${table}_pwd , ${table}_email, ${table}_phone, ${table}_address, ${table}_name) VALUES(?,?,?,?,?,?)`;

  let user_value=[id, pwd, email, phone, address, name];
  connection.query(sql, user_value, (err, result, fields)=>{
    console.log('삽입되었습니다');
  });
  });
};
function orders_write(table, num, userid, product_num, count, price, connection){
  connection.connect((err)=> {
  //삽입 부분
    let sql = `INSERT INTO orders(${table}_num,${table}_userid,${table}_product_num,${table}_count, ${table}_price) VALUES(?,?,?,?,?)`;
  
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
    let sql = `INSERT INTO cart(product_num, userid) VALUES(?,?)`;
  
    let cart_value=[product_num,userid];
    connection.query(sql, cart_value, (err, result, fields)=>{
      console.log('삽입되었습니다');
    });
    });
  };
function pay_write(num, name, unit, size, price, connection){
  connection.connect((err)=> {
  //삽입 부분
    let sql = `INSERT INTO payment(Order_num, card_num) VALUES(?,?)`;
  
    let pay_value=[num,name,unit,size,price];
    connection.query(sql, pay_value, (err, result, fields)=>{
      console.log('삽입되었습니다');
    });
    });
  };
module.exports = {write, pro_write, ord_write,cart_write,pay_write};
module.exports = {user_write, orders_write, cart_write, pay_write}