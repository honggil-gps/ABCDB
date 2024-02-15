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
      