let mysql =require('mysql');

//이 파일 실행시 dummy data를 DB에 추가한다.
let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err)=> {
  if (err) return console.err(err.message);
  // product table 삽입 부분
  let sql = `INSERT INTO product(product_num , product_name , product_unit , product_size , product_price) VALUES ?`;

  let pro_table=[
  [10026001, 'Nike에어포스107', 11, 260, 139000],
  [10026501, 'Nike에어포스107', 14, 265, 139000],
  [10027001, 'Nike에어포스107', 63, 270, 139000],
  [10027501, 'Nike에어포스107', 52, 275, 139000],
  [10028001, 'Nike에어포스107', 20, 280, 139000],
  [10026002, 'Nike덩크로우LX', 23, 260, 169000],
  [10026502, 'Nike덩크로우LX', 3, 265, 169000],
  [10027002, 'Nike덩크로우LX', 12, 270, 169000],
  [10027502, 'Nike덩크로우LX', 64, 275, 169000],
  [10028002, 'Nike덩크로우LX', 13, 280, 169000],
  [20026001, '아디다스포럼클래식', 46, 260, 129000],
  [20026501, '아디다스포럼클래식', 73, 265, 129000],
  [20027001, '아디다스포럼클래식', 51, 270, 129000],
  [20027501, '아디다스포럼클래식', 12, 275, 129000],
  [20028001, '아디다스포럼클래식', 45, 280, 129000],
  [20026002, '아디폼슈퍼스타', 15, 260, 89000],
  [20026502, '아디폼슈퍼스타', 64, 265, 89000],
  [20027002, '아디폼슈퍼스타', 43, 270, 89000],
  [20027502, '아디폼슈퍼스타', 22, 275, 89000],
  [20028502, '아디폼슈퍼스타', 67, 280, 89000],
  [30026001, '반스올드스쿨', 52, 260, 85000],
  [30026501, '반스올드스쿨', 13, 265, 85000],
  [30027001, '반스올드스쿨', 63, 270, 85000],
  [30027501, '반스올드스쿨', 24, 275, 85000],
  [30028001, '반스올드스쿨', 32, 280, 85000],
  [30026002, '반스클래식', 33, 260, 89000],
  [30026502, '반스클래식', 43, 265, 89000],
  [30027002, '반스클래식', 21, 270, 89000],
  [30027502, '반스클래식', 10, 275, 89000],
  [30028002, '반스클래식', 9, 280, 89000]];
  connection.query(sql, [pro_table], (err, result, fields)=>{
    if (err) return console.error(err.message);

    console.log(`Inserted Rows: ${result.affectedRows}`);

  });

  // user_table 삽입
  let sql_user = `INSERT INTO user(user_id, user_pwd, user_email, user_phone, user_address, user_name) VALUES ?`;

  let user_table=
  [['C001', '1111','abc01@naver.com' ,'01011111111' ,'서울특별시 강남구 역삼동 123-4번지', '홍길동'],
  ['C002', '1112','abc02@naver.com' ,'01011112222' ,'인천광역시 남동구 구월동 567-8번지', '김민준'],
  ['C003', '1113','abc03@naver.com' ,'01011113333' ,'대구광역시 수성구 만촌동 910번지', '이서연'],
  ['C004', '1114','abc04@naver.com' ,'01011114444' ,'부산광역시 해운대구 송정동 111번지', '박지훈'],
  ['C005', '1115','abc05@naver.com' ,'01011115555' ,'경기도 성남시 분당구 정자동 222-5번지', '최예진'],
  ['C006', '1116','abc06@naver.com' ,'01011116666' ,'대전광역시 서구 둔산동 333번지', '정현우'],
  ['C007', '1117','abc07@naver.com' ,'01011117777' ,'광주광역시 서구 화정동 444-7번지', '송지우'],
  ['C008', '1118','abc08@naver.com' ,'01011118888' ,'인천광역시 연수구 송도동 555번지', '강동현'],
  ['C009', '1119','abc09@naver.com' ,'01011119999' ,'부산광역시 사상구 괘법동 666-9번지', '임지원'],
  ['C010', '1120','abc10@naver.com' ,'01022220000' ,'경기도 고양시 일산동구 백석동 777-11번지', '황승현'],
  ['C011', '1121','abc11@naver.com' ,'01022221111' ,'서울특별시 송파구 잠실동 888번지', '윤서영'],
  ['C012', '1122','abc12@naver.com' ,'01022222222' ,'경상남도 창원시 의창구 용호동 999-13번지', '김태호'],
  ['C013', '1123','abc13@naver.com' ,'01022223333' ,'대구광역시 중구 삼덕동 1010번지', '이가영'],
  ['C014', '1124','abc14@naver.com' ,'01022224444' ,'충청북도 청주시 상당구 용암동 1111-15번지', '박도현'],
  ['C015', '1125','abc15@naver.com' ,'01022225555' ,'인천광역시 서구 청라동 1212번지', '최수빈'],
  ['C016', '1125','abc16@naver.com' ,'01022226666' ,'경기도 성남시 수정구 신흥동 1313-17번지', '정민재'],
  ['C017', '1125','abc17@naver.com' ,'01022227777' ,'대전광역시 유성구 전민동 1414번지', '신지민'],
  ['C018', '1125','abc18@naver.com' ,'01022228888' ,'경상북도 포항시 남구 장성동 1515-19번지', '오성준'],
  ['C019', '1125','abc19@naver.com' ,'01022229999' ,'강원도 원주시 일산동 1616번지', '김다솜'],
  ['C020', '1125','abc20@naver.com' ,'01033330000' ,'서울특별시 강서구 방화동 1717-21번지', '이승우'],
  ['M001', '2001','master1@naver.com' ,'01010040001' ,'인천광역시 남동구 구월동 1818-23번지', '심선조'],
  ['M002', '2002','master2@naver.com' ,'01010040002' ,'충청남도 천안시 동남구 신부동 1919-25번지', '이홍길'],
  ['M003', '2003','master3@naver.com' ,'01010040003' ,'대구광역시 동구 신천동 2020번지', '민케이만'],
  ['M004', '2004','master4@naver.com' ,'01010040004' ,'부산광역시 부산진구 부전동 2121번지', '박현준'],
  ['M005', '2005','master5@naver.com' ,'01010040005' ,'경기도 용인시 수지구 풍덕천동 2222-27번지', '송동현']];
  connection.query(sql_user, [user_table], (err, result, fields)=>{
    if (err) return console.error(err.message);

    console.log(`Inserted Rows: ${result.affectedRows}`);

  });
  //orders 삽입
  let sql_orders = `INSERT INTO orders(orders_num, orders_user_id, orders_product_num, orders_count, orders_price) VALUES ?`;

  let orders_table=[
    ['order001','C001','10026001', 1, 139000],
    ['order002','C003','10028001', 2, 278000],
    ['order003','C005','10026502', 1, 169000],
    ['order004','C007','10027002', 3, 507000],
    ['order005','C009','20028001', 1, 129000],
    ['order006','C011','20026501', 1, 129000],
    ['order007','C013','20026502', 2, 178000],
    ['order008','C015','20027002', 1, 89000],
    ['order009','C017','30026001', 2, 170000],
    ['order010','C019','30028001', 1, 85000]];
  connection.query(sql_orders, [orders_table], (err, result, fields)=>{
    if (err) return console.error(err.message);

    console.log(`Inserted Rows: ${result.affectedRows}`);

  });
  // cart 삽입
  let sql_cart = `INSERT INTO cart(cart_product_num, cart_user_id) VALUES ?`;

  let cart_table=[
    ['10026001', 'C001'],
    ['10028001', 'C003'],
    ['10026502', 'C005'],
    ['10027002', 'C007'],
    ['20028001', 'C009'],
    ['20026501', 'C011'],
    ['20026502', 'C013'],
    ['20027002', 'C015'],
    ['30026001', 'C017'],
    ['30028001', 'C019']];
  connection.query(sql_cart, [cart_table], (err, result, fields)=>{
    if (err) return console.error(err.message);

    console.log(`Inserted Rows: ${result.affectedRows}`);

  });

  let sql_payment = `INSERT INTO payment(payment_orders_num,payment_card_num) VALUES ?`;

  let payment_table=[
    ['order001', '1234567890123401'],
    ['order002', '1234567890123403'],
    ['order003', '1234567890123405'],
    ['order004', '1234567890123407'],
    ['order005', '1234567890123409'],
    ['order006', '1234567890123411'],
    ['order007', '1234567890123413'],
    ['order008', '1234567890123415'],
    ['order009', '1234567890123417'],
    ['order010', '1234567890123419']];
  connection.query(sql_payment, [payment_table], (err, result, fields)=>{
    if (err) return console.error(err.message);

    console.log(`Inserted Rows: ${result.affectedRows}`);

  });
  connection.end();
  });