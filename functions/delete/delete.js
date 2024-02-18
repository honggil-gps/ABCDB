let mysql = require('mysql');

let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

function delete_infor(table, value,connection) {
  // 데이터베이스에 연결
  connection.connect((err) => {

    // 주어진 테이블의 기본 키(primary key) 열 이름을 가져오는 쿼리
    let nameQuery = `SELECT COLUMN_NAME 
                      FROM information_schema.columns 
                      WHERE TABLE_SCHEMA = '${connection.config.database}' 
                      AND TABLE_NAME = '${table}' 
                      AND COLUMN_KEY = 'PRI';`;
    // 쿼리 실행
    connection.query(nameQuery, (error, results, fields) => {
      if (error) return console.error(error.message);
      //result에 기본키가 되는 열들이 있음
      if (results.length > 0) {
        // 결과에서 첫 번째 기본 키 열의 이름을 가져옴
        let pkColumnName = results[0].COLUMN_NAME;

        // 주어진 값에 해당하는 행을 삭제하는 쿼리
        let deleteQuery = `DELETE FROM ${table} WHERE ${pkColumnName} = ?`;

        // 삭제 쿼리 실행
        connection.query(deleteQuery, [value], (deleteError, deleteResults) => {
          if (deleteError) return console.error(deleteError.message);
        });
      } else {
        // 테이블에서 기본 키를 찾을 수 없는 경우 
        console.log(`No primary key found in the table ${table}.`);

      }
    });
  });
}


module.exports = {delete_infor};
