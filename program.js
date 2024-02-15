const Input = require('./userInput')
let mysql = require('mysql2');

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
    console.log(`1. 데이터입력 2.데이터수정 3.데이터삭제 4.목록  5.종료`);
    let menu = await Input.getUserInput();
    if(menu==='1') {
      console.log('아이템삽입>');
      let title = await Input.getUserInput();
      console.log('');
      let sql = `INSERT INTO Product(product_num,product_name,unit,size,price) 
      VALUES(?,?,?,?,?)`;
      connection.query(sql,[2,'NIKE',100,265,9000]);
    }else if(menu==='2'){
      console.log('수정');
    }else if(menu==='3'){    
      console.log('삭제');
    }else if(menu==='4'){ 
      console.log('목록');
    }else if(menu==='5'){ 
      console.log('프로그램 종료~');
      connection.end();
      process.exit();
    }else{ 
        console.log('메뉴를 잘못 선택하셨습니다.');
    };
    await wait(1000);
    console.clear();
  };
  
};

main();

const wait = (timeToDelay) => new Promise((resolve) => setTimeout(resolve, timeToDelay));
