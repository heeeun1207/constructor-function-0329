// * factoring 공장화
//! 4번째 단계 모듈화 
module.exports = function (array,name) {
  for(let i =0 ; i < studentList.length ; i++){
  if(studentList[1] === name) {
    console.log(i);
  } else { 
    console.log(`해당 순서는 ${name}씨가 아닙니다.`)
    }
  }
} 
// ! 4번째 
export default function (array,name) {
  for(let i =0 ; i < studentList.length ; i++){
  if(studentList[1] === name) {
    console.log(i);
  } else { 
    console.log(`해당 순서는 ${name}씨가 아닙니다.`)
    }
  }
} 
