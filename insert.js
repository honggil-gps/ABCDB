let mysql =require('mysql')

let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
function insert(id, pwd, email, phone, address, name){
connection.connect((err)=> {
  if (err) return console.err(err.message);
//삽입 부분
  let sql = `INSERT INTO user(userid, user_pwd , user_email, user_phone, user_address, user_name) VALUES(?,?,?,?,?,?)`;

  let pro_value=[id, pwd, email, phone, address, name];
  connection.query(sql, pro_value, (err, result, fields)=>{
    if (err) return console.error(err.message);

    console.log('삽입되었습니다');
  });

  connection.end();
  });
};

// connection.connect((err)=> {
//   if (err) return console.err(err.message);
// //삽입 부분
//   let sql = `INSERT INTO user(userid, user_pwd , user_email, user_phone, user_address, user_name) VALUES(?,?,?,?,?,?)`;

//   let pro_value=[1234, 32141, 'dustks', 1020032718 , 'address' , '송동현'];
//   connection.query(sql, pro_value, (err, result, fields)=>{
//     if (err) return console.error(err.message);

//     console.log('삽입되었습니다');
//   });

//   connection.end();
//   });

module.exports = {insert};