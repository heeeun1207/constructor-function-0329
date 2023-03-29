// // function c(year,month,day) {
// //   return {
// //     year : year,
// //     month : month,
// //     day : day
// //   };
// // }
// // const test = c(2023,3,29).year;
// // console.log(test);
// // app.js보다 수정하기가 쉽다. 
// // 일반적으로 그룹으로 묶이는 개념들을 뭔지 생각해보고 => 코드로 표현할 수 있다면 , 매우 간단해진다. 

// // function c(year,month,day){
// //   this.year=year;
// //   this.month=month;
// //   this.day=day;
// // }
// // . <= 점 객체이다 . 
// // function c(a,b,c){
// //   this.year=a;
// //   this.month=b;
// //   this.day=c;
// // }
// const fs = require('fs');
// const { stringify } = require('querystring');
// function user(id,password,email){
//   this.id =id;
//   this.password=password;
//   this.email=email;
// }
// const d = new user("heen","1234","heeeun@gamail.com");
// const e = new user("daljae","1234","daljae@gamail.com");
// const f= new user("jieun","1234","jieun@gamail.com");
// // user { id: 'heen', password: '1234', email: 'heeeun@gamail.com' }  <- user는 콘솔에 왜 뜨는걸까?
// // 생성자 함수 : 객체를 생성한다.  많은 데이터들을 찍어내자 ! 
// // 로그인 : id name password email  
// // 생성자 함수로 비밀번호틀을 만들어놓는것 연습하기 . 
// console.log(d);
// console.log(e);
// console.log(f);
// let names = ["heen","daljae","jieun"];
// let passwords =["1234","1234","1234"];
// let emails = ["heeeun@gamail.com","daljae@gamail.com","jieun@gamail.com"];

// let members = [];
// for(let i =0; i<3; i++){
//   members.push(new user (names[i],passwords[i],emails[i]));
// }

// fs.writeFileSync("members.JSON", JSON,stringify(members,null,2),"utf8");

// // console.dir(members);
const fs=require('fs')
function user(id,password,email){
  this.id=id;
  this.password=password;
  this.email=email;
}

/* const d=new user("yujin","324","yujin32432@gmail.com");
const e=new user("injun","323","injun@gmail.com")
const f=new user("jeno","423","jeno@gamil.com")
 */

let names=["yujin","injun","jeno"];
let password=["324","323","423"]
let email=["yujin32432@gmail.com","injun@gmail.com","jeno@gamil.com"]
let members=[]; //어떤 결과가 나오는지 확인한다.
for(let i=0; i<3; i++){
  members.push(new user(names[i],password[i],email[i]));
}
fs.writeFileSync("members.JSON",JSON.stringify(members,null,2),"utf8"); //왼쪽에 JSON이 생김 //null, 2를 쓰면 JSON이 보기 좋게 나온다. |프론트 엔드랑 백엔드랑 JSON에서 만나는 것|string으로 전송하는 것은 JSON
console.dir(members);

/* console.log(d);  
console.log(e);
console.log(f); */