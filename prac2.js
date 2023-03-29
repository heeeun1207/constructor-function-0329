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
class User {
  constructor(order,name) {
    this.order = order;
    this.name = name ;
  }
  set order(order) {
    if(typeof (order) === "number") {
      this._order  = order ;
    }
  }
}
//* 숫자가 아니면 객체를 생성하지않다 -> 자바 스타일 -> 안전성이 높다 . 

let test = [];
studentList.forEach((student,index) => {
  test.push(new User(index , student));
});
console.log(test); 
//! 생성자 함수를 만들 줄 안다 -> 대규모 작업을 진행할 수 있다 -> 개발자의 능력 
