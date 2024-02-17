let mysql =require('mysql');

let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
function user_write (id, pwd, email, phone, address, name, connection){
connection.connect((err)=> {
//삽입 부분
  let sql = `INSERT INTO user(userid, user_pwd , user_email, user_phone, user_address, user_name) VALUES(?,?,?,?,?,?)`;

  let user_value=[id, pwd, email, phone, address, name];
  connection.query(sql, user_value, (err, result, fields)=>{
    console.log('삽입되었습니다');
  });
  });
};



function orders_write(Order_num, userid, product_num,count, price, connection){
connection.connect((err)=> {
//삽입 부분
  let sql = `INSERT INTO orders(Order_num, userid, product_num, count, price) VALUES(?,?,?,?,?)`;

  let pro_value=[Order_num, userid, product_num, count, price];
  connection.query(sql, pro_value, (err, rsult, fields)=>{
    console.log('삽입되었습니다');
  });
  });
};


module.exports = {user_write, orders_write};