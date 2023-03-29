const studentList = [
  "강지민",
  "곽윤호",
  "권예준",
  "김동주",
  "김은아",
  "김종윤",
  "김지섭",
  "김형진",
  "노수민",
  "류은이",
  "박달재",
  "박수연",
  "박준형",
  "성해경",
  "이경택",
  "이세민",
  "이재권",
  "임지성",
  "장루빈",
  "정성철",
  "정지은",
  "정희은",
  "최대건",
  "한유진",
  "허진",
];

// console.log(studentList[studentList.length-1]);
// //배열[마지막번째] ;
// //규칙 -> length 는 항상 마지막 인덱스보다 +1 많다 .
// // 즉 ->  마지막 원소는 length 보다 항상 -1 많다 . 
// //*개발 
// //! 몇번째 인지 찾기 
// // for(let i =0 ; i < studentList.length ; i++){
// //   if(studentList[1] === "박달재") {
// //     console.log(i);
// //   }else{
// //     console.log("해당 순서는 박달재씨가 아닙니다.")
// //   }
// //   }
// // * factoring 공장화
// function searching(array,name) {
//   for(let i =0 ; i < studentList.length ; i++){
//   if(studentList[1] === name) {
//     console.log(i);
//   } else { 
//     console.log(`해당 순서는 ${name}씨가 아닙니다.`)
//     }
//   }
// } 
// // 이렇게 만드는게 혼자서 가능하다면 ! 잘 하고 있다 . 개념완성 

const examle = {
  order :0,
  name : "강지민"
}
//? 생성자 함수 방식  => 아까처럼 user 같이 이름이 붙음  => 생성자 함수의 장점 : 어떤 방식으로 만들어진건지 규격을 알게된다. 
function makeConstruct (order,name){
    this.order =order;
    this.name = name;
  
  function order(order){
    if(typeof (order)=== "number"){
      return this._order;
      }
    }
  }


  

// //? 객체 리턴 방식 => 틀을 구별하기 어렵다 . 
// //! order 가 숫자여야만 하도록 제어하기   -> 버그 발생 여지를 줄일 수 있다. 
// function makeObjext (order,name) {
//   if(typeof (order) === "number"){
//   return {
//     order :order,
//     name : name
//   }
// } else {
//   console.error("order는 숫자여야만 합니다.");
//   }
// }
// //* 호출하는 방법 
// let a = makeObjext(0, studentList[0]);
