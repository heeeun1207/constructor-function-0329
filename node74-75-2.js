class Human {
  constructor(type = "human"){
    this.type = type ; 
  }

static isHuman(human) {
  return human instanceof Human;
  }
breathe(){
  alert('h-a-a-a-m');
  }
}
class Zero extends Human {
  constructor(type, firstName ,lastName) {
    super (type);
    this.firstName =firstName;
    this.lastName = lastName ;
  }
sayName (){
  super.breathe ();
  alert(`${this.firstName} ${this.lastName}`);
  }
}
const newZero =new Zero ('human','Zero','Cho');
Human.isHuman(newZero); // true 
// 전반적으로 class 안에 그룹화함.
// 생성자 함수 constructor 안으로 들어갔다. 
// Human , isHuman 같은 클래스 함수는 static 키워드로 전환
//! 프로토타입 함수들도 모두 class 블록 안에 포함돼서  => 어떤 함수가 어떤 클래스 소속인지 확인하기 쉽다.
// 상속도 간단해져서 extends 키워드로 쉽게 상속할 수 있음. 
// 단 , 이렇게 클래스 문법으로 썼더라도 자스는 프로토타입 기반으로 동작한다는 것을 명심할 것. 
console.log(Human);

console.log(Zero); //* [ class Zero extends Human ] 
console.log(newZero); //* zero { type: 'human', firstName: 'Zero', lastName: 'Cho' }