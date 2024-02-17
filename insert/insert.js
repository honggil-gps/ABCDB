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
function ord_write(Order_num, userid, product_num, count, price, connection){
  connection.connect((err)=> {
  //삽입 부분
    let sql = `INSERT INTO orders(Order_num,userid,product_num, count, price) VALUES(?,?,?,?,?)`;
  
    let ord_value=[Order_num,userid,product_num,count,price];
    connection.query(sql, ord_value, (err, result, fields)=>{
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
