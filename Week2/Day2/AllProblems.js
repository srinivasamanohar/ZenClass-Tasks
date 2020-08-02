//Problem 1 and 2
function printAllValues(obj) {
    console.log("Values", Object.values(obj));
}

function printAllKeys(obj) {
    console.log("Keys", Object.keys(obj));
}

var object = {name: 'RajiniKanth', age: 33, hasPets : false};
printAllValues(object);     
printAllKeys(object);



//Problem 3
function convertListToObject(obj) {
    console.log(Object.entries(obj));
}

var obj = {name: 'ISRO', age: 35, role: 'Scientist'};
convertListToObject(obj);    


//Problem 4
function transformFirstAndLast(arr) {
    let obj = {}
    obj[arr[0]] = arr[arr.length-1]
    return obj;
}

var arr = ['GUVI', 'I', 'am', 'a geek'];
console.log(transformFirstAndLast(arr));        


//Problem 5
function fromListToObject(arr) {
 var newObject = {};
 arr.forEach(data => newObject[data[0]] = data[1]);
 return newObject
}

var array1 = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
console.log(fromListToObject(array1));          


//Problem 6
function transformEmployeeData(arr) {
    var tranformEmployeeList = [];
    arr.forEach(innerArr =>{
        let obj = {}
        innerArr.forEach(data =>{
            obj[data[0]] = data[1];
        });
        tranformEmployeeList.push(obj);
    });
    return tranformEmployeeList;
}

var list= [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]];
console.log(transformEmployeeData(list));       //Problem 6


//Problem 7
function assertObjectsEqual(actual, expected, testName){
    let obj1 = JSON.stringify(actual);
    let obj2 = JSON.stringify(expected);
    return (obj1 == obj2)? 'PASSED': 'FAILED';
}

var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}
console.log(assertObjectsEqual(actual, expected, 'detects that two objects are equal'));        

//Problem 8
function chksecurityQuestions(securityQuestions,question, ans) {
   let res = false;
   securityQuestions.forEach(data =>{
       if(data['question'] == question && ans == data['expectedAnswer']) res = true;
   });
   return res; 
}

var securityQuestions = [
    {
    question: 'What was your first pet’s name?',
    expectedAnswer: 'FlufferNutter'
    },
    {
    question: 'What was the model year of your first car?',
    expectedAnswer: '1985'
    },
    {
    question: 'What city were you born in?',
    expectedAnswer: 'NYC'
    }
];
var ques = 'What was your first pet’s name?';
var ans  =  'FlufferNutter';
var status = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status);

var students = [
    {name: 'Siddharth Abhimanyu', age: 21}, { name: 'Malar', age: 25},
    {name: 'Maari',age: 18},{name: 'Bhallala Deva',age: 17},
    {name: 'Baahubali',age: 16},{name: 'AAK chandran',age: 23},   {name:'Gabbar Singh',age: 33},{name: 'Mogambo',age: 53},
    {name: 'Munnabhai',age: 40},{name: 'Sher Khan',age: 20},
    {name: 'Chulbul Pandey',age: 19},{name: 'Anthony',age: 28},
    {name: 'Devdas',age: 56} 
];
console.log(returnMinors(students));
