let mysql =require('mysql')

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
