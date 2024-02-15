// let mysql = require('mysql');

// let connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

// connection.connect((err) => {
//   if (err) return console.error(err.message);

//   let sql = `UPDATE  user
//     SET completed = ?
//     WHERE id = ?`;

//   let data = [false, 1];

//   connection.query(sql, data, (error, results, fields) => {
//     if (error) return console.error(error.message);
//     console.log('Rows affected:', results.affectedRows);
//   });

//   // close the database connection
//   connection.end();
// });

// // // 오류가 발생한 경우
// // connection.connect((err)=>{
// //   if(err) return console.log(err.message);
// //   console.log('연결 성공');
// // })

// // connection.end((err)=>{
// //   if(err) return console.error(err.message);
// //   console.log('연결 해제')
// // })
