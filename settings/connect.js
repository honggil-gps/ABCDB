let mysql = require('mysql2');

// process.env.를 이용한 .env파일 접근은 Node.js v20.6.0부터 사용가능
let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});


connection.connect((err) => {
  if (err) return console.error(err.message);

  console.log('Connected to the MySQL server.');
});
connection.end((err) => {
  if (err) return console.error(err.message);

  console.log('Close the database connection.');
});

