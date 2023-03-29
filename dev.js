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
heeny.speck();
