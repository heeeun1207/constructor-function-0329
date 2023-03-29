//! class 생성자 함수 직접 만들어보기. 
//* 클래스 선언 
class Person{
  constructor (id, name , password , email){
  this.id = id;
  this.name = name ;
  this.password = password;
  this.email =email;
  }
  speck(){
    console.log(`${this.name}님 회원가입 하시겠습니까 ? `);
  }
}

//* object 생성 
const heeny = 
new Person('heeeun1207', 'heen', 1234, 'heen1207@gmail.com')
console.log(heeny.id);
console.log(heeny.name);
console.log(heeny.password);
console.log(heeny.email);
heeny.speck();  // heen님 회원가입 하시겟습니까 ? 

//! getter setter 
class User{
  constructor(id, nickName, password, age){
    this.id =id;
    this.nickName=nickName;
    this.password=password;
    this.age = age ;
  }
  get age(){
    return this._age;
  }
  set age(value){
    // if(value<0){
    //   throw Error('나이를 0 이상으로 설정해 ');
    // }
    this._age = value < 0 ? 0 :value;
  }
}
const user1 = new User('heen','heeny',1234,-1);
console.log(user1.age);  // 0 출력 

//!  Public Field & Private Field 
class Experiment {
  publicField = 2;
  #privateField =0;
}
const experiment = new Experiment();
console.log(experiment.publicField);  // 2 
console.log(experiment.privateField); // undefined


