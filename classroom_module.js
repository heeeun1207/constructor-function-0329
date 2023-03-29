//! 본 예제 설명 
//* 회원가입 서비스 중 이메일 작성 입력값에 대한 유효여부를 판단해주는 로직이다 .
//'정규표현식'이라는 작성법으로 간단하게 해결하는 방식이 퍼져있는데, 
// 주요 논리 (logic) 을 알아내지 못하고 사용만 하는 경우가 많아, 어떤 논리로 어떻게 검사를 처리하는지 
// 알고리즘에 가까운 예제를 파악해보자 
// 1 . 이메일 형식에 @ 표시가 있는검사 2. 이메일 주소가 등록되어있는 것인지 검사  두개의 기능이 담겨있다.
// 리터럴(직접작성한 값) 이 없는 것을 확인하고, 특히 자주 사용하는 배열 메서드를 로직안에 넣어둔 것 확인하기 ! 

// 가정
let emailAddress = ["gmldms272@gmail.com", "gmldms272@naver.com" , "gmldms272@daum.net"]; 

//!  시작 
function a (email, agreeEmailAddress ){
  //* 이메일이 문자열로 작성되어있는지 검사 
  if(typeof (email) === "string" && Array.isArray (agreeEmailAddress) === true ){
    // 문자열이라면 참
    // Array.from => 배열로 처리할 수 있게끔 처리. 
    Array.from(email).forEach((element)=>{
      if(element === "@" ){
        //문자열에 "@" 골뱅이(atsign)가 포함되어있는지 검사 
      console.log("이메일 형식이 맞습니다.");

      let emailSplit = [];
      emailSplit =email.split("@"); // 이메일 문자열을 @ 기준으로 나누어 배열을 저장함. 
      console.log(emailSplit);
      agreeEmailAddress.filter((element) => {
        if(element === emailSplit[1]) { // 매개변수로 받은 이메일 주소 목록(가정)과 일치하는지 검사. 
        console.log("이메일 도메인이 일치합니다.");
        return true; //승인(유효성 검사)
        // 모든 것이 맞아떨어진다면 해당 return 부분에서 이메일 체크 함수가 종료된다. 
        }else{
          console.error("이메일 도메인이 일치하지 않습니다.");
        }
        });
        }else {
          new Error("이메일 형식이 아닙니다.");
        }
    });

  } else{
    console.error("이메일은 문자열이어야 합니다.");
  }

}

// export default a;

