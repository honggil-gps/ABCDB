const Input = require('./enroll/enrol.js');
let mysql = require('mysql2');
const Info = require('./information/info.js');

let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});


async function main(){
    console.clear();                          //콘솔창정리
    connection.connect();                     //DB에 연결
    while(true){                              //true 값을 반환하는 동안 프로그램 실행
      console.log(`1. 관리자용 2. 회원용 3. 종료`);
      let menu = await Input.getUserInput();   //menu 값에 입력된 값 저장
      if(menu==='1') {                         //menu 값이 1(관리자용) 이라면

        console.log('1.물품 2. 회원 3. 주문');     //1. 물품, 2. 회원, 3.주문 메뉴를 보여줌
        let manager = await Input.getUserInput(); // manager 값에 입력된 값 저장

        if(manager === '1'){                      // 1. 물품을 고른다면
          let table = 'Product';
          console.log(`${manager}번 메뉴 (물품) 선택하셨습니다.`) //1번 메뉴 선택했습니다.
          console.log(`다음에 할 작업을 고르세요`)                //다음에 할 작업을 고르세요
          console.log(`1.입력/추가 2.수정 3.삭제 4.데이터 보기 5.종료`)// 5개의 메뉴 보여줌
          let select = await Input.getUserInput();             //select에 입력된 값 저장
              if(select === '1'){                                //1번이 입력되면
              console.log(`${manager}번 메뉴 (입력/추가) 선택하셨습니다.`) //1번 메뉴 선택했습니다.
              console.log(`어떤 브랜드의 제품이신가요?`)                //다음에 할 작업을 고르세요
              console.log(`1.나이키 2.아디다스 3.반스 4.퓨마 5.컨버스`)// 5개의 메뉴 보여줌
              let select = await Input.getUserInput();             //select에 입력된 값 저장
                if(select === `1`){
                  let nike = 100;
                  // console.log(`${nike}xx${size}`)
                  // let sql= 
              }// 추가 or 수정필요 1.
              }else if(select ==='2'){                            //2번이 입력되면
                console.log(`${manager}번 (데이터 수정) 선택하셨습니다.`)   //2번 메뉴 선택했습니다.
                console.log(`기존 내용은 다음과 같습니다.`)                 //기존내용 ,다음에 할 작업을 고르세요
                Info.infor(`${table}`);
                console.log(`어떤 줄을 수정하시겠습니까?`)                  //어떤 줄 수정?
              }else if(select ==='3'){                              //3번이 입력되면
                console.log(`${manager}번 (데이터 삭제) 선택하셨습니다.`)    //3번 데이터 삭제를 선택하셨습니다.
                console.log(`기존 내용은 다음과 같습니다.`)               //기존내용 ,다음에 할 작업을 고르세요
                Info.infor(`${table}`);
                console.log(`어떤 줄을 삭제하시겠습니까?`)                //어떤 줄 삭제?
              }else if(select ==='4'){                             //4번이 입력되면
                console.log(`${manager}번 (데이터 보기) 선택하셨습니다.`)    //4번 데이터 삭제를 선택하셨습니다.
                Info.infor(`${table}`);
              }else if(select ==='5'){                              //5번이 입력되면
                console.log('프로그램 종료');
                connection.end();
                process.exit();
              }else{                                                //예외처리
                console.log('잘못된 입력입니다.');
              };
          }
          else if(manager === '2'){                                    // 2. 회원을 고른다면
            let table = 'user';
            console.log(`${manager}번 메뉴 (회원) 선택하셨습니다.`)          //1번 메뉴 선택했습니다.
            console.log(`다음에 할 작업을 고르세요`)                          //다음에 할 작업을 고르세요
            console.log(`1.입력/추가 2.수정 3.삭제 4.데이터 보기 5.종료`)       // 5개의 메뉴 보여줌
            let select = await Input.getUserInput();                   //select에 입력된 값 저장
                if(select === '1'){                                    //1번이 입력되면
                  console.log(`${manager}번 메뉴 (입력/추가) 선택하셨습니다.`) //1번 메뉴 선택했습니다.
                }else if(select ==='2'){                              //2번이 입력되면
                  console.log(`${manager}번 (데이터 수정) 선택하셨습니다.`)   //2번 메뉴 선택했습니다.
                  console.log(`기존 내용은 다음과 같습니다.`)                 //기존내용 ,다음에 할 작업을 고르세요
                  Info.infor(`${table}`);
                  console.log(`어떤 줄을 수정하시겠습니까?`)                  //어떤 줄 수정?
                }else if(select ==='3'){                              //3번이 입력되면
                  console.log(`${manager}번 (데이터 삭제) 선택하셨습니다.`)    //3번 데이터 삭제를 선택하셨습니다.
                  console.log(`기존 내용은 다음과 같습니다.`)               //기존내용 ,다음에 할 작업을 고르세요
                  Info.infor(`${table}`);
                  console.log(`어떤 줄을 삭제하시겠습니까?`)                //어떤 줄 삭제?
                }else if(select ==='4'){                             //4번이 입력되면
                  console.log(`${manager}번 (데이터 보기) 선택하셨습니다.`)    //4번 데이터 삭제를 선택하셨습니다.
                  Info.infor(`${table}`);
                }else if(select ==='5'){                              //5번이 입력되면
                  console.log('프로그램 종료');
                  connection.end();
                  process.exit();
                }else{                                                //예외처리
                  console.log('잘못된 입력입니다.');
                };
            }
    }else if(menu==='2'){
      console.log('1. 회원가입 2. 로그인');
      Info.infor('payment');
      let customer = await Input.getUserInput();
      if(customer === '1'){
        console.log(`${customer}번 메뉴 (회원가입) 선택하셨습니다.`)
        console.log(`회원가입 >`);
        console.log('이름을 입력해주세요')
        let user_name = await Input.getUserInput();
        console.log('사용하실 아이디를 입력해주세요');
        let user_id = await Input.getUserInput();
        console.log('사용하실 비밀번호를 입력해주세요');
        let user_pwd = await Input.getUserInput();
        console.log('비밀번호 확인');
        let user_repwd = await Input.getUserInput();
        console.log('이메일을 입력해주세요');
        let user_email = await Input.getUserInput();
        console.log('카드번호를 입력해주세요');
        let user_card = await Input.getUserInput();
      }
      else if(customer === '2'){
        
      }
      else{
        console.log(`올바른 번호를 입력해주세요`)
      }
    }else if(menu==='3'){ 
      console.log('프로그램 종료');
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