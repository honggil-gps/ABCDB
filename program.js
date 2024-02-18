let mysql = require('mysql2');
const Input = require('./functions/insert/userInput.js');
const Info = require('./functions/information/info.js');
const Write =require('./functions/insert/insert.js');
const Update=require('./functions/change/update.js');
const Delete = require('./functions/delete/delete.js');
const Examine = require('./functions/examine/examine.js');

let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
const EventEmitter = require('events');
const { resolve } = require('path');

// 이벤트를 처리하는 EventEmitter 객체 생성
const myEmitter = new EventEmitter();
myEmitter.setMaxListeners(100); // 원하는 숫자로 변경

async function main(){
    console.clear();                          //콘솔창정리
    connection.connect();                     //DB에 연결
    while(true){                              //true 값을 반환하는 동안 프로그램 실행
      console.log(`1. 관리자용 2. 회원용 3. 종료`);
      let menu = await Input.getUserInput();   //menu 값에 입력된 값 저장
      if(menu==='1') {                         //menu 값이 1(관리자용) 이라면

        console.log('1.물품 2. 회원 3. 주문');     //1. 물품, 2. 회원, 3.주문 메뉴를 보여줌
        let manager = await Input.getUserInput(); // manager 값에 입력된 값 저장

          if(manager === '1'){                        // 1. 물품을 고른다면
          let table = 'Product';
          console.log(`${manager}번 메뉴 (물품) 선택하셨습니다.`) //1번 메뉴 선택했습니다.
          console.log(`다음에 할 작업을 고르세요`)                //다음에 할 작업을 고르세요
          console.log(`1.입력/추가 2.수정 3.삭제 4.데이터 보기 5.종료`)// 5개의 메뉴 보여줌
          let select = await Input.getUserInput();             //select에 입력된 값 저장

              if(select === '1'){                                //1번이 입력되면
                console.log(`${manager}번 메뉴 (입력/추가) 선택하셨습니다.`) //1번 메뉴 선택했습니다.
                console.log(`어떤 브랜드의 제품이신가요?`)                  //brand 선택
                console.log(`1.나이키 2.아디다스 3.반스 4.퓨마 5.컨버스`)     //brand에 저장
                let brand = await Input.getUserInput();             
                console.log('사이즈를 입력해주세요')                        //size 받는 구간 
                let size = await Input.getUserInput();                  
                console.log('모델번호를 입력해주세요');                     //사용하고픈 제품코드 01~99
                let num = await Input.getUserInput();                   
                console.log('모델이름을 입력해주세요');                     //제품의 이름
                let name = await Input.getUserInput();                  
                console.log('unit을 입력해주세요');                       //수량
                let unit = await Input.getUserInput();                
                console.log('가격을 입력해주세요');                        //1unit당 가격 
                let price = await Input.getUserInput();                
        
                Write.pro_write(table, size, brand, num, name, unit, price,connection)            //select에 입력된 값 저장
              }else if(select ==='2'){                            //2번이 입력되면
              console.clear();
              let PK = 'product_num'
              console.log(`${manager}번 (데이터 수정) 선택하셨습니다.`)   //2번 메뉴 선택했습니다.
              console.log(`기존 내용은 다음과 같습니다.`);                 //기존내용 ,다음에 할 작업을 고르세요
              await Info.infor(`${table}`,connection);
              await wait(1000);
              console.log(`1.제품번호 2.제품이름 3.제품수량 4.제품사이즈 5.제품가격 6.종료`);       // 5개의 메뉴 보여줌
              console.log(`수정해야할 목록의 번호를 입력해주세요`);
              let changeinfo = await Input.getUserInput();                   //select에 입력된 값 저장
              console.log(`수정하고싶은 제품번호를 입력해주세요`);
              let id = await Input.getUserInput();
                if(changeinfo==='1'){ 
                  let attr = 'num';
                  console.log('제품번호 >');
                  let change = await Input.getUserInput();
                  console.log(`${change}로 변경 완료되었습니다.`)
                  Update.update( id,change,`${table}`,`${table}_${attr}`,`${PK}`,connection);
                  console.log('~~~~~~~~~~');
                  console.log('');
                }else if(changeinfo==='2'){
                  let attr = 'name';
                  console.log('제품이름 >');  
                  let change = await Input.getUserInput();
                  console.log(`${change}로 변경 완료되었습니다.`)
                  Update.update( id,change,`${table}`,`${table}_${attr}`,`${PK}`,connection);
                  console.log('~~~~~~~~~~');
                  console.log('');
                }else if(changeinfo==='3'){ 
                  let attr = 'unit';
                  console.log('제품수량 >');
                  let change = await Input.getUserInput();
                  console.log(`${change}로 변경 완료되었습니다.`)
                  Update.update( id,change,`${table}`,`${table}_${attr}`,`${PK}`,connection);
                  console.log('~~~~~~~~~~');
                  console.log('');
                }else if(changeinfo==='4'){
                  let attr = 'count';
                  console.log('제품사이즈 >');
                  let change = await Input.getUserInput();
                  console.log(`${change}로 변경 완료되었습니다.`) 
                  Update.update( id,change,`${table}`,`${table}_${attr}`,`${PK}`,connection);
                  console.log('~~~~~~~~~~');
                  console.log('');
                }else if(changeinfo==='5'){
                  let attr = 'price';
                  console.log('제품가격 >');
                  let change = await Input.getUserInput();
                  console.log(`${change}로 변경 완료되었습니다.`) 
                  Update.update( id,change,`${table}`,`${table}_${attr}`,`${PK}`,connection);
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
              }else if(select ==='3'){                              //3번이 입력되면
                console.log(`${manager}번 (데이터 삭제) 선택하셨습니다.`)    //3번 데이터 삭제를 선택하셨습니다.
                console.log(`기존 내용은 다음과 같습니다.`)               //기존내용 ,다음에 할 작업을 고르세요
                await Info.infor(`${table}`,connection);
                await wait(1000);
                console.log(`어떤 줄을 삭제하시겠습니까?`)                //어떤 줄 삭제?
                let value = await Input.getUserInput();
                Delete.delete_infor(`${table}`,`${value}`,connection);
                console.log(`해당 정보가 삭제되었습니다.`)               //기존내용 ,다음에 할 작업을 고르세요
              }else if(select ==='4'){                             //4번이 입력되면
                console.log(`${manager}번 (데이터 보기) 선택하셨습니다.`)    //4번 데이터 삭제를 선택하셨습니다.
                await Info.infor(`${table}`,connection);
              }else if(select ==='5'){                              //5번이 입력되면
                console.log('프로그램 종료');
                connection.end();
                process.exit();
              }else{                                                //예외처리
                console.log('잘못된 입력입니다.');
              };
          }
          else if(manager === '2'){                      // 2. 회원을 고른다면
            let table = 'user';
            let PK = 'user_id';
            console.log(`${manager}번 메뉴 (회원) 선택하셨습니다.`)          //1번 메뉴 선택했습니다.
            console.log(`다음에 할 작업을 고르세요`)                          //다음에 할 작업을 고르세요
            console.log(`1.입력/추가 2.수정 3.삭제 4.데이터 보기 5.종료`)       // 5개의 메뉴 보여줌
            let select = await Input.getUserInput();                   //select에 입력된 값 저장
                if(select === '1'){                                    //1번이 입력되면
                  console.log(`${select}번 메뉴 (입력/추가) 선택하셨습니다.`) //1번 메뉴 선택했습니다.
                  console.log(`회원추가 >`);
                  console.log('이름을 입력해주세요')                           //이름 받는 구간
                  let user_name = await Input.getUserInput();                  
                  console.log('사용하실 아이디를 입력해주세요');//아이디 받는 구간
                  let attr='userid';              
                  let user_id = await Input.getUserInput();
                  let exam_id=await Examine.userid_exam(`${table}`,`${attr}`,user_id,connection );
                    while(exam_id === 1 ){
                    user_id = await Input.getUserInput();
                    exam_id=await Examine.userid_exam(`${table}`,`${attr}`,user_id,connection);
                    }
                  console.log('사용하실 비밀번호를 입력해주세요');             //비밀번호 받는구간
                  let user_pwd = await Input.getUserInput();                  
                  console.log('비밀번호 확인');                                //비밀번호 확인 받는구간
                  let user_repwd = await Input.getUserInput();
                  while(user_pwd != user_repwd){
                    console.log('비밀번호가 다릅니다 다시입력해주세요');
                    user_repwd = await Input.getUserInput();
                  }                        
                  console.log('휴대폰 번호를 입력해주세요');                   //휴대폰 번호 받는구간 
                  let user_phone = await Input.getUserInput();                
                  console.log('이메일을 입력해주세요');                        //이메일 받는 구간
                  let user_email = await Input.getUserInput();                 
                  console.log('주소를 입력해주세요');                          //주소 받는 구간   
                  let user_address = await Input.getUserInput();
        
                  Write.user_write(user_id, user_pwd, user_email, user_phone, user_address, user_name, connection)
                  }
                else if(select ==='2'){                                //2번이 입력되면
                  console.log(`${select}}번 (데이터 수정) 선택하셨습니다.`)   //2번 메뉴 선택했습니다.
                  console.log(`기존 내용은 다음과 같습니다.`)                 //기존내용 ,다음에 할 작업을 고르세요
                  await Info.infor(`${table}`,connection);
                  await wait(1000);
                  console.log(`수정하고자 하는 회원의 ID를 입력해주세요`);
                  let id = await Input.getUserInput();
                  console.log('정보수정');
                  console.log(`1.이름 2.비밀번호 3.전화번호 4.이메일 5.종료`);
                  let changeinfo = await Input.getUserInput();
                  if(changeinfo==='1'){ 
                    let attr = 'name';
                    console.log('이름 >');
                    let change = await Input.getUserInput();
                    console.log(`${change}로 변경 완료되었습니다.`)
                    Update.update( id,change,`${table}`,`${table}_${attr}`,`${PK}`,connection);
                    console.log('~~~~~~~~~~');
                    console.log('');
                  }else if(changeinfo==='2'){
                    let attr = 'pwd';
                    console.log('비밀번호 >');  
                    let change = await Input.getUserInput();
                    console.log(`${change}로 변경 완료되었습니다.`)
                    Update.update( id, change,`${table}`,`${table}_${attr}`,`${PK}`,connection);
                    console.log('~~~~~~~~~~');
                    console.log('');
                  }else if(changeinfo==='3'){ 
                    let attr = 'phone';
                    console.log('전화번호 >');
                    let change = await Input.getUserInput();
                    console.log(`${change}로 변경 완료되었습니다.`)
                    Update.update( id,change,`${table}`,`${table}_${attr}`,`${PK}`,connection);
                    console.log('~~~~~~~~~~');
                    console.log('');
                  }else if(changeinfo==='4'){
                    let attr = 'email';
                    console.log('이메일 >');
                    let change = await Input.getUserInput();
                    console.log(`${change}로 변경 완료되었습니다.`) 
                    Update.update( id,change,`${table}`,`${table}_${attr}`,`${PK}`,connection);
                    console.log('~~~~~~~~~~');
                    console.log('');
                  }else if(changeinfo==='5'){ 
                    console.log('종료되었습니다~');
                    console.log('~~~~~~~~~~');
                    connection.end();
                    process.exit();
                  }else{ 
                      console.log('메뉴를 잘못 선택하셨습니다.');
                  };
                  // PK 값 입력을 통해서 원하는 row 수정
                }else if(select ==='3'){                              //3번이 입력되면
                  console.log(`${manager}번 (데이터 삭제) 선택하셨습니다.`)    //3번 데이터 삭제를 선택하셨습니다.
                  console.log(`기존 내용은 다음과 같습니다.`)               //기존내용 ,다음에 할 작업을 고르세요
                  await Info.infor(`${table}`,connection);
                  await wait(1000);
                  console.log(`삭제하고싶은 회원의 아이디를 입력해주세요`)
                  let value = await Input.getUserInput();
                  Delete.delete_infor(`${table}`,`${value}`,connection);
                  console.log(`해당 정보가 삭제되었습니다.`)                  //데이터 삭제 완료
                }else if(select ==='4'){                             //4번이 입력되면
                  console.log(`${manager}번 (데이터 보기) 선택하셨습니다.`)    //4번 데이터 보기를 선택하셨습니다.
                  await Info.infor(`${table}`,connection);
                }else if(select ==='5'){                              //5번이 입력되면
                  console.log('프로그램 종료');
                  connection.end();
                  process.exit();
                }else{                                                //예외처리
                  console.log('잘못된 입력입니다.');
                };
          }
          else if(manager === '3'){                     // 3. 주문을 고른다면
            let table = 'orders';
            let PK = 'orders_num';
            console.log(`${manager}번 메뉴 (주문) 선택하셨습니다.`)          //3번 메뉴 선택했습니다.
            console.log(`다음에 할 작업을 고르세요`)                          //다음에 할 작업을 고르세요
            console.log(`1.입력/추가 2.수정 3.삭제 4.데이터 보기 5.종료`)       // 5개의 메뉴 보여줌
            let select = await Input.getUserInput();                   //select에 입력된 값 저장
              if(select === '1'){                                    //1번이 입력되면
              console.log(`${select}번 메뉴 (입력/추가) 선택하셨습니다.`) //1번 메뉴 선택했습니다.
              console.log(`주문추가 >`);
              console.log('주문번호를 입력하세요')                       //주문번호 입력
              let num = await Input.getUserInput();                  
              console.log('회원번호를 입력주세요');                      //회원번호 입력
              let userid = await Input.getUserInput();                   
              console.log('제품번호를 입력하세요');                     //제품번호 입력
              let product_num = await Input.getUserInput();                      
              console.log('수량을 입력하세요');                        //수량 입력
              let count = await Input.getUserInput();                
              console.log('가격을 입력하세요');                         //가격 입력
              let price = await Input.getUserInput();
              Write.orders_write(table ,num, userid, product_num, count, price, connection)
              }else if(select ==='2'){                                //2번이 입력되면
              console.clear;
              console.log(`${select}}번 (데이터 수정) 선택하셨습니다.`);   //2번 메뉴 선택했습니다.
              console.log(`기존 내용은 다음과 같습니다.`);                 //기존내용 ,다음에 할 작업을 고르세요
              await Info.infor(`${table}`,connection);
              await wait(1000);
              console.log(`1.주문번호 2.회원번호 3.물품번호 4.수량 5.가격 6.종료`);       // 5개의 메뉴 보여줌
              console.log(`수정해야할 목록의 번호를 입력해주세요`);
              let changeinfo = await Input.getUserInput();   
              if(changeinfo === '6'){
                console.log('종료되었습니다~');
                console.log('~~~~~~~~~~');
                connection.end();
                process.exit();
              }else{
              console.log(`수정하고싶은 row의 주문번호를 입력해주세요`);
              let id = await Input.getUserInput();
                if(changeinfo==='1'){ 
                  let attr = 'num';
                  console.log('주문번호 >');
                  let change = await Input.getUserInput();
                  console.log(`${change}로 변경 완료되었습니다.`)
                  Update.update( id,change,`${table}`,`${table}_${attr}`,`${PK}`,connection);
                  console.log('~~~~~~~~~~');
                  console.log('');
                }else if(changeinfo==='2'){
                  let attr = 'userid';
                  console.log('회원아이디 >');  
                  let change = await Input.getUserInput();
                  console.log(`${change}로 변경 완료되었습니다.`)
                  Update.update( id,change,`${table}`,`${table}_${attr}`,`${PK}`,connection);
                  console.log('~~~~~~~~~~');
                  console.log('');
                }else if(changeinfo==='3'){ 
                  let attr = 'product_num';
                  console.log('물품번호 >');
                  let change = await Input.getUserInput();
                  console.log(`${change}로 변경 완료되었습니다.`)
                  Update.update( id,change,`${table}`,`${table}_${attr}`,`${PK}`,connection);
                  console.log('~~~~~~~~~~');
                  console.log('');
                }else if(changeinfo==='4'){
                  let attr = 'count';
                  console.log('수량 >');
                  let change = await Input.getUserInput();
                  console.log(`${change}로 변경 완료되었습니다.`) 
                  Update.update( id,change,`${table}`,`${table}_${attr}`,`${PK}`,connection);
                  console.log('~~~~~~~~~~');
                  console.log('');
                }else if(changeinfo==='5'){
                  let attr = 'price';
                  console.log('가격 >');
                  let change = await Input.getUserInput();
                  console.log(`${change}로 변경 완료되었습니다.`) 
                  Update.update( id,change,`${table}`,`${table}_${attr}`,`${PK}`,connection);
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
              };
              }else if(select ==='3') {
                console.log(`${manager}번 (데이터 삭제) 선택하셨습니다.`);
                console.log(`기존 내용은 다음과 같습니다.`);
                await Info.infor(`${table}`,connection);
                await wait(1000);
                console.log(`삭제할 주문번호를 입력해주세요`);
                let Ord_num = await Input.getUserInput();
                Delete.delete_infor(`${table}`,`${Ord_num}`,connection)
              }else if(select === '4'){
                console.log(`${select}번 (데이터 보기) 선택하셨습니다.`)
                await Info.infor(`${table}`,connection)
              }else if(select===`5`){
                console.log('프로그램 종료');
                connection.end();
                process.exit();
              }
          }

    }else if(menu==='2'){                                //2번 선택 (고객용)
      let table = 'user';
      console.log('1. 회원가입 2. 로그인');
      let customer = await Input.getUserInput();
      if(customer === '1'){
        console.log(`${customer}번 메뉴 (회원가입) 선택하셨습니다.`)
        console.log(`회원가입 >`);
          console.log('이름을 입력해주세요')                           //이름 받는 구간
          let name = await Input.getUserInput();                  
          console.log('사용하실 아이디를 입력해주세요');               //아이디 받는 구간
          let attr='user_id';              
          let id = await Input.getUserInput();
          let exam_id=await Examine.userid_exam(`${table}`,`${attr}`,id,connection );
          while(exam_id === 1 ){
            id = await Input.getUserInput();
            exam_id=await Examine.userid_exam(`${table}`,`${attr}`,id,connection);
          }
          console.log('사용하실 비밀번호를 입력해주세요');             //비밀번호 받는구간
          let pwd = await Input.getUserInput();                  
          console.log('비밀번호 확인');                                //비밀번호 확인 받는구간
          let repwd = await Input.getUserInput();
          while(pwd != repwd){
            console.log('비밀번호가 다릅니다 다시입력해주세요');
            repwd = await Input.getUserInput();

          }              
          console.log('휴대폰 번호를 입력해주세요');                   //휴대폰 번호 받는구간 
          let phone = await Input.getUserInput();                
          console.log('이메일을 입력해주세요');                        //이메일 받는 구간
          let email = await Input.getUserInput();                 
          console.log('주소를 입력해주세요');                          //주소 받는 구간   
          let address = await Input.getUserInput();

          Write.user_write(table, id, pwd, email, phone, address, name, connection);
          }
      else if(customer === '2'){
        let PK = 'user_id';
        console.log('아이디를 입력해주세요');
        let id = await Input.getUserInput();
        console.log(`입력하신 ID는 ${id}입니다.`);
        console.log(`다음에 할 작업을 고르세요`)                          //다음에 할 작업을 고르세요
        console.log(`1.내정보 2.정보수정 3.상품보기 4. 종료`)       // 5개의 메뉴 보여줌
        let menu = await Input.getUserInput();                   //select에 입력된 값 저장
        // if(select === '1'){
        //   Info.infor(`${table}`);
        // }
        if(menu==='1') {
          console.log('내정보')
          Info.select_infor(`${table}`,`'${id}'`,`${PK}`,connection);
        }else if(menu==='2'){
          console.log('정보수정');
          console.log(`1.이름 2.비밀번호 3.전화번호 4.이메일 5.종료`);
          let changeinfo = await Input.getUserInput();
          if(changeinfo==='1'){ 
            let attr = 'name';
            console.log('이름 >');
            let change = await Input.getUserInput();
            console.log(`${change}로 변경 완료되었습니다.`)
            Update.update( id,change,`${table}`,`${table}_${attr}`,`${PK}`,connection);
            console.log('~~~~~~~~~~');
            console.log('');
          }else if(changeinfo==='2'){
            let attr = 'pwd';
            console.log('비밀번호 >');  
            let change = await Input.getUserInput();
            console.log(`${change}로 변경 완료되었습니다.`)
            Update.update( id, change,`${table}`,`${table}_${attr}`,`${PK}`,connection);
            console.log('~~~~~~~~~~');
            console.log('');
          }else if(changeinfo==='3'){ 
            let attr = 'phone';
            console.log('전화번호 >');
            let change = await Input.getUserInput();
            console.log(`${change}로 변경 완료되었습니다.`)
            Update.update( id,change,`${table}`,`${table}_${attr}`,`${PK}`,connection);
            console.log('~~~~~~~~~~');
            console.log('');
          }else if(changeinfo==='4'){
            let attr = 'email';
            console.log('이메일 >');
            let change = await Input.getUserInput();
            console.log(`${change}로 변경 완료되었습니다.`) 
            Update.update( id,change,`${table}`,`${table}_${attr}`,`${PK}`,connection);
            console.log('~~~~~~~~~~');
            console.log('');
          }else if(changeinfo==='5'){ 
            console.log('종료되었습니다~');
            console.log('~~~~~~~~~~');
            connection.end();
            process.exit();
          }else{ 
              console.log('메뉴를 잘못 선택하셨습니다.');
          };
        }else if(menu==='3'){
          let table = 'cart';
          console.log('상품보기');
          Info.select_infor(`${table}`,`'${id}'`,`${PK}`,connection);
        }else if(menu==='4'){ 
          console.log('종료되었습니다~');
          connection.end();
          process.exit();
        }else{ 
            console.log('메뉴를 잘못 선택하셨습니다.');
        };
        await wait(1000);
      };
    }else if(menu==='3'){                                //3번 선택 (삭제)
      console.log('프로그램 종료');
      connection.end();
      process.exit();
    // }else{ 
    //   console.log('메뉴를 잘못 선택하셨습니다.');
    // };
    await wait(1000);
    // console.clear();
    };
  };
};

main();

const wait = (timeToDelay) => new Promise((resolve) => setTimeout(resolve, timeToDelay));