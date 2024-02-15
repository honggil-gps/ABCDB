const Input = require('./userInput');
let mysql = require('mysql');
const Info = require('../information/info');

let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

async function main(){
  console.clear();
  connection.connect();
  while(true){
    console.log(`1.내정보 2.정보수정 3.상품보기 4.종료`);
    let menu = await Input.getUserInput();
    if(menu==='1') {
      console.log('내정보')
      Info.infor('user');
      let title = await Input.getUserInput();
      console.log('');
      let sql = `INSERT INTO todos(title,completed) VALUES(?,false)`;
      connection.query(sql,[title]);
    }else if(menu==='2'){
      console.log('정보수정');
      console.log(`1.아이디 2.이름 3.비밀번호 4.전화번호 5.이메일 6.종료`);
      let changeinfo = await Input.getUserInput();
      if(changeinfo==='1'){  
        console.log('수정할 아이디를 입력해주세요.')  
        console.log('아이디 >');
        let changeuserid = await Input.getUserInput();
        console.log(`${changeuserid}로 변경 완료되었습니다.`)
        console.log('~~~~~~~~~~');
        console.log('');
      }else if(changeinfo==='2'){ 
        console.log('이름 >');
        let changeusername = await Input.getUserInput();
        console.log(`${changeusername}로 변경 완료되었습니다.`)
        console.log('~~~~~~~~~~');
        console.log('');
      }else if(changeinfo==='3'){ 
        console.log('비밀번호 >');  
        let changeuserpassword = await Input.getUserInput();
        console.log(`${changeuserpassword}로 변경 완료되었습니다.`)
        console.log('~~~~~~~~~~');
        console.log('');
      }else if(changeinfo==='4'){ 
        console.log('전화번호 >');
        let changeuserphone = await Input.getUserInput();
        console.log(`${changeuserphone}로 변경 완료되었습니다.`)
        console.log('~~~~~~~~~~');
        console.log('');
      }else if(changeinfo==='5'){ 
        console.log('이메일 >');
        let changeuseremail = await Input.getUserInput();
        console.log(`${changeuseremail}로 변경 완료되었습니다.`) 
        console.log('~~~~~~~~~~');
        console.log('');
      }else if(changeinfo==='6'){ 
        console.log('종료되었습니다~');
        console.log('~~~~~~~~~~');
        connection.end();
        process.exit();
      }else{ 
          console.log('메뉴를 잘못 선택하셨습니다.');
      };
      
    }else if(menu==='3'){    
      console.log('상품보기');
      Info.infor('product');
    }else if(menu==='4'){ 
      console.log('종료되었습니다~');
      connection.end();
      process.exit();
    }else{ 
        console.log('메뉴를 잘못 선택하셨습니다.');
    };
    await wait(1000);
    // console.clear();
  };
};

main();

const wait = (timeToDelay) => new Promise((resolve) => setTimeout(resolve, timeToDelay));


