const Input = require('../insert/enrol.js');
let mysql = require('mysql2');
const Info = require('../information/info.js');
const Write =require('../insert/insert.js');
const Update=require('../update/update.js');
const Delete = require('../delete/delete.js');

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

//step1_first
async function step1() {
  console.log(`1.관리자용 2.회원용 3.종료`);
  console.log(`메뉴를 선택해주세요 > `)
  let menu = await Input.getUserInput();
    if (menu === '1') {
      manager();
    }else if (menu === '2'){
      membership();
    }else if (menu === '3'){
      finish();
    }
  }
//step1 > 1.관리자용
async function manager() {
  console.log('1.물품 2.회원 3.주문 4.뒤로가기 5.종료');
  console.log(`메뉴를 선택해주세요 > `)
  let menu = await Input.getUserInput();
    if (menu === '1') {
      product();
    }else if (menu === '2'){
      member();
    }else if (menu === '3'){
      order();
    }else if (menu === '4'){
      step1();
    }
    else if (menu === '5'){
      finish();
    }
  } 

//step1 > 1.관리자용 > 1.물품
async function product() {
  console.log(`1.입력/추가 2.수정 3.삭제 4.데이터 보기 5.뒤로가기 6.종료`)// 5개의 메뉴 보여줌
  let menu = await Input.getUserInput();
    if (menu === '1') {
      addinfo();
    }else if (menu === '2'){
      modify();
    }else if (menu === '3'){
      del();
    }else if (menu === '4'){
      data();
    }else if (menu === '5'){
      manager();
    }
    else if (menu === '6'){
      finish();
    }
  }
//step1 > 1.관리자용 > 1.물품 > 1.입력/추가
async function addinfo() {
  cconsole.log(`어떤 브랜드의 제품이신가요?`)                //다음에 할 작업을 고르세요
  console.log(`1.나이키 2.아디다스 3.반스 4.퓨마 5.컨버스 6.뒤로가기 7.종료`)// 5개의 메뉴 보여줌
  let menu = await Input.getUserInput();
    if (menu === '1') {
      nike();
    }else if (menu === '2'){
      adidas();
    }else if (menu === '3'){
      vens();
    }else if (menu === '4'){
      puma();
    }else if (menu === '5'){
      convas();
    }else if (menu === '6'){
      step1();
    }else if (menu === '7'){
      finish();
    }
  }
// //step1 > 1.관리자용 > 1.물품 > 1.입력/추가 > 1.나이키
// async function nike() {
//   console.log(`1.나이키 2.뒤로가기 3.종료 `)
//   //console.log으로 물품 내용적기
//   let menu = await Input.getUserInput();
//     if (menu === '1') {
//       nike();
//     }else if (menu === '2'){
//       step1();
//     }else if (menu === '3'){
//       finish();
//     }
//   }
// //step1 > 1.관리자용 > 1.물품 > 1.입력/추가 > 2.아디다스
// async function adidas() {
//   console.log(`1.아디다스 2.뒤로가기 3.종료`)
//   let menu = await Input.getUserInput();
//     if (menu === '1') {
//       nike();
//     }else if (menu === '2'){
//       step1();
//     }else if (menu === '3'){
//       finish();
//     }
//   }
// //step1 > 1.관리자용 > 1.물품 > 1.입력/추가 > 3.반스
// async function vens() {
//   console.log(`1.반스 2.뒤로가기 3.종료`)
//   let menu = await Input.getUserInput();
//     if (menu === '1') {
//       nike();
//     }else if (menu === '2'){
//       step1();
//     }else if (menu === '3'){
//       finish();
//     }
//   }
// //step1 > 1.관리자용 > 1.물품 > 1.입력/추가 > 4.퓨마
// async function puma() {
//   console.log(`1.퓨마 2.뒤로가기 3.종료`)
//   let menu = await Input.getUserInput();
//     if (menu === '1') {
//       nike();
//     }else if (menu === '2'){
//       step1();
//     }else if (menu === '3'){
//       finish();
//     }
//   }
// //step1 > 1.관리자용 > 1.물품 > 1.입력/추가 > 4.컨버스
// async function convas() {
//   console.log(`1.컨버스 2.뒤로가기 3.종료`)
//   let menu = await Input.getUserInput();
//     if (menu === '1') {
//       nike();
//     }else if (menu === '2'){
//       step1();
//     }else if (menu === '3'){
//       finish();
//     }
//   }
//step1 > 2.회원
async function membership() {
  console.log('1. 회원가입 2. 로그인 3.뒤로가기 4.종료');
  console.log(`메뉴를 선택해주세요 > `)
  let menu = await Input.getUserInput();
    if (menu === '1') {
      console.log(`회원가입 >`);
          console.log('이름을 입력해주세요')                           //이름 받는 구간
          let user_name = await Input.getUserInput();                  
          console.log('사용하실 아이디를 입력해주세요');               //아이디 받는 구간
          let user_id = await Input.getUserInput();                   
          console.log('사용하실 비밀번호를 입력해주세요');             //비밀번호 받는구간
          let user_pwd = await Input.getUserInput();                  
          console.log('비밀번호 확인');                                //비밀번호 확인 받는구간
          let user_repwd = await Input.getUserInput();                
          console.log('휴대폰 번호를 입력해주세요');                   //휴대폰 번호 받는구간 
          let user_phone = await Input.getUserInput();                
          console.log('이메일을 입력해주세요');                        //이메일 받는 구간
          let user_email = await Input.getUserInput();                 
          console.log('주소를 입력해주세요');                          //주소 받는 구간   
          let user_address = await Input.getUserInput();

          Write.write(user_id, user_pwd, user_email, user_phone, user_address, user_name, connection);
        step1_back();
      }else if (menu === '2'){
        login();
      }else if (menu === '3'){
        step1();
      }
      else if (menu === '4'){
        finish();
      }   
    }
// step1 > 2.회원으로 다시 Back하는 ~~
  async function login_back(){
    console.log('뒤로가기 위해 <back>를 입력해주세요~')
    let menu = await Input.getUserInput();
    if (menu.toLowerCase() === 'back') {
      step1_back();
    }
  }
// step1 > 2.회원 > 2.로그인
async function login() {
  console.log('아이디를 입력해주세요');
        let id = await Input.getUserInput();
        console.log(`입력하신 ID는 ${id}입니다.`);
        console.log(`다음에 할 작업을 고르세요`)                          //다음에 할 작업을 고르세요
        console.log(`1.내정보 2.정보수정 3.상품보기 4.뒤로가기 4.종료`) 
        console.log(`메뉴를 선택해주세요 > `)
  let menu = await Input.getUserInput();
    if (menu === '1') {
      console.log('내정보')
      Info.infor('user',connection);
      login_back();
    }else if (menu === '2'){
      changeinfo();
    }else if (menu === '3'){
      console.log('상품보기')
      Info.infor('product',connection);
      membership_back();
    }else if (menu === '4'){
      membership();
    }else if (menu === '5'){
      finish();
    } 
  }
  //step1 > 2.회원으로 다시 Back하는 ~~
  async function login_back(){
    console.log('뒤로가기 위해 <back>를 입력해주세요~')
    let menu = await Input.getUserInput();
    if (menu.toLowerCase() === 'back') {
      membership_back();
    }
  }
//step1 > 2.회원 > 2.로그인 > 2.정보수정
async function changeinfo() {
  let PK = 'userid';
    console.log('정보수정');
    console.log(`1.이름 2.비밀번호 3.전화번호 4.이메일 5.뒤로가기 6.종료`);
    console.log(`메뉴를 선택해주세요 > `)
  let menu = await Input.getUserInput();
    if (menu === '1') {
      let attr = 'name';
        console.log('이름 >');
        let change = await Input.getUserInput();
        console.log(`${change}로 변경 완료되었습니다.`)
        Update.update( id,change,`${table}`,`${table}_${attr}`,`${PK}`,connection);
        console.log('~~~~~~~~~~');
        login_back();
    }else if (menu === '2'){
      let attr = 'pwd';
        console.log('비밀번호 >');  
        let change = await Input.getUserInput();
        console.log(`${change}로 변경 완료되었습니다.`)
        Update.update( id,change,`${table}`,`${table}_${attr}`,`${PK}`,connection);
        console.log('~~~~~~~~~~');
        login_back();
    }else if (menu === '3'){
      let attr = 'phone';
        console.log('전화번호 >');
        let change = await Input.getUserInput();
        console.log(`${change}로 변경 완료되었습니다.`)
        Update.update( id,change,`${table}`,`${table}_${attr}`,`${PK}`,connection);
        console.log('~~~~~~~~~~');
        login_back();
    }else if (menu === '4'){
      let attr = 'email';
        console.log('이메일 >');
        let change = await Input.getUserInput();
        console.log(`${change}로 변경 완료되었습니다.`) 
        Update.update( id,change,`${table}`,`${table}_${attr}`,`${PK}`,connection);
        console.log('~~~~~~~~~~');
        login_back();
    }else if (menu === '5'){
      login();
    }else if (menu === '6'){
      finish();
    }   
  }
//step1 > 2.회원 > 2.로그인으로 다시 Back하는 ~~
  async function login_back(){
    console.log('뒤로가기 위해 <back>를 입력해주세요~')
    let menu = await Input.getUserInput();
    if (menu.toLowerCase() === 'back') {
      login();
    }
  }

function finish() {
  console.log('프로그램을 종료합니다.');
  Input.close();
}

// 시작 단계 호출
step1();
