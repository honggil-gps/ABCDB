let mysql =require('mysql')

let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

async function infor(table,connection) {            //a라는 이름의 변수로 table name을 받아옴
  let sql = `SELECT * FROM ${table}`;       //backqoute를 사용, 받아온 table name 사용해서 table show함
    connection.query(sql, [true], (error, results, fields) => {
      if (error) return console.error(error.message);
        console.table(results);
    });
}

async function select_infor(table,value,primaryKey,connection){
    let sql = `SELECT * FROM ${table} WHERE ${primaryKey} = ${value}`;
    connection.query(sql, [true], (error, results, fields) => {
      if (error) return console.error(error.message);
        console.table(results);
    });
}

module.exports = {select_infor,infor};
