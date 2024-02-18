let mysql =require('mysql')

// javaScript나 Mysql은 비동기 특성때문에 콜백 함수에서 직접 값을 반환할 수 없다. 때문에 promise나 async/await을 사용해 비동기 작업을 처리했다. 중복일시 1을 반환하고 사용가능할시 2를 반환

async function userid_exam(table, attr ,id, connection){
  await new Promise((resolve, reject)=> {
    connection.connect((err)=> {
      if (err) {
        return console.err(err.message);
      }
      else
      resolve();  
    });
  });
  //삽입 부분
  // let sql = `SELECT IF(EXISTS (SELECT * FROM user WHERE userid = ?), 'same', 'notsame') AS ex`;
  let sql = `SELECT IF(EXISTS (SELECT * FROM ${table} WHERE ${attr} = ?), 'same', 'notsame') AS ex`;
  
  
  const result =await new Promise((resolve,reject)=>{
    connection.query(sql, [id], (err, result, fields)=>{
      if (err) {
        return console.error(err.message);
      }else{
        resolve(result)
      }  
    });
  });
  const ex_value= result[0]['ex'];
    if( ex_value === 'same'){
      console.log('아이디 중복입니다 다시 입력해주세요');
      return 1;
    }
    else{
      console.log('사용가능합니다')
      return 2; 
    }
};

module.exports = {userid_exam};