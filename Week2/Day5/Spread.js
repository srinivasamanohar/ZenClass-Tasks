const person = {
    firstName: "GUVI",
    lastName: "GEEK",
    age: 21,
    sex: "MALE"
  }
  
let firstNm = person.firstName;
let  age = person.age;
let sex = person.sex;

console.log(firstNm); 
console.log(age); 
console.log(sex);

({ firstNe, age, sex } = {...person}); 
  
console.log(firstNm) 
console.log(age) 
console.log(sex) 
  
function joinFirstLastName({firstName, lastName}) 
{ 
    return firstName + '-' + lastName;
}
  
console.log(joinFirstLastName(person)); 
var list = [ 1, 2, 3 ];
var [ a, b ] = list;
[ b, a ] = [ a, b ]
console.log(a, b)
