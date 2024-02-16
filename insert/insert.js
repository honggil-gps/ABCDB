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
  let sql = `INSERT INTO user(userid, user_pwd , user_email, user_phone, user_address, user_name) VALUES(?,?,?,?,?,?)`;

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
module.exports = {write, pro_write};