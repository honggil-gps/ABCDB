let mysql =require('mysql')

let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err)=> {
  if (err) return console.err(err.message);


//삽입 부분

  let sql = `INSERT INTO Product(product_num,product_name,unit,size,price) 
            VALUES(12414,'NIKE',100,265,9000)`;

  let pro_value=[12414,'NIKE',100,265,9000];
  connection.query(sql, pro_value, (err, result, fields)=>{
    if (err) return console.error(err.message);

    console.log('삽입되었습니다');
  });
  // connection.query(sql);

  connection.end();
});

let sql = `INSERT INTO Product(product_num,product_name,unit,size,price) 
      VALUES(?,?,?,?,?)`;
      connection.query(sql,[2,'NIKE',100,265,9000]);