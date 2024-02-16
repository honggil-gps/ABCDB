const readline = require('readline');

// input과 output을 사용하기 위해서 다음과 같이 정의
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getUserInput() {
    return new Promise((resolve, reject) => {
      // 첫번째 인자 : "close","line" 등
        rl.on('line', (line) => {
            resolve(line);
        })
        // .on('close',()=>{
        //     process.exit();
        // });
    });
}
// module.exports를 이용하여 함수를 외부로 보낸다.
// 다른 파일에서 require()를 이용하여 호출해서 사용
module.exports = {getUserInput};
