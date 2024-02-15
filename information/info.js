let mysql =require('mysql')

let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
function infor(a) {
connection.connect((err)=> {
    if (err) return console.err(err.message);
    
    let sql = `SELECT * FROM ${a}`;
    connection.query(sql, [true], (error, results, fields) => {
      if (error) return console.error(error.message);
        console.table(results);
    });
    connection.end();
  });
}

module.exports = {infor};