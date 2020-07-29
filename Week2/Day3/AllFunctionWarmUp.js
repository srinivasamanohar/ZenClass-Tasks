//Problem:
//Write a function called “addFive”.
//Given a number, “addFive” returns 5 added to that number.

var num = 10;
function addFive(num) { 
    return num+5;
}
var result = addFive(num);

//-----------------------------------------------------------------------------

// Write a function called “getOpposite”.
//Given a number, return its opposite.

var num = 5;
function getOpposite(num) {
    return (-1*num);
}
var result = getOpposite(num);

//-----------------------------------------------------------------------------

//Problem
//Fill in your code that takes an number minutes and converts it to seconds.

var min = 5;
function toSeconds(min) {
    return min*60;
}
var secs = toSeconds(min);

//Problem
//Create a function that takes a string and returns it as an integer.

var mystr = "5";
function toInteger(mystr) {
    return parseInt(mystr);
}
var myint = toInteger(mystr)


//Problem
//Create a function that takes a number as an argument, 
//increments the number by +1 and returns the result.

var myint = 0;
function nextNumber(myint) {
    return myint+1;
}
var myNextint = nextNumber(myint);


//Problem
//Create a function that takes an array and returns the first element.

var arr = [1, 2, 3];
function getFirstElement(arr) {
    return arr[0];
}
var data = getFirstElement(arr);


//Problem
//Convert Hours into Seconds
//Write a function that converts hours into seconds.


var arr = [1, 2, 3];
function hourToSeconds(arr) {
    secs = [];
    for(i=0; arr.length ; i++)
    {
        secs.push((arr[i]*60*60));
    }

    return secs;
}
var data = hourToSeconds(arr);


//Problem
//Find the Perimeter of a Rectangle
//Create a function that takes height and width and finds the perimeter of a rectangle.

function findPerimeter(num1,num2) {

    return (2*(num1+num2));
}
var peri = findPerimeter(6,7);


//Problem:
//Less Than 100?
//Given two numbers, return true if the sum of both numbers is less than 100. 
//Otherwise return false.


function lessThan100(num1,num2) {

    if((num1+num2)<100)
    {
        return true;
    }

    else
    {
        return false;
    }
}
var res = lessThan100(22,15)



//Problem
//There is a single operator in JavaScript, capable of providing the remainder of a division operation. 
//Two numbers are passed as parameters. 
//The first parameter divided by the second parameter will have a remainder, possibly zero. 
//Return that value.

function remainder(num1,num2) {

    return num1%num2;
}
var res = remainder(1,3);


//Problem
//Old macdonald had a farm:
//turkey = 2 legs
//horse = 4 legs
//pigs = 4 legs

function CountAnimals(tur,horse,pigs) {

    return ((tur*2) + (horse*4) + (pigs*4));
}
var legs = CountAnimals(2,3,5);


//Problem
//Frames Per Second
//Create a function that returns the number of frames shown 
//in a given number of minutes for a certain FPS.

function frames(num1,num2) {
    return (num1*num2*60);
}
var fps = frames(1,2);


//Problem
//Check if an Integer is Divisible By Five
//Create a function that returns true if an integer is evenly divisible by 5, 
//and false otherwise.


function divisibleByFive(num1) {
    return (num1%5===0);
}
var divisible = divisibleByFive(5);


//Problem:
//Write a function called “isEven”.
//Given a number, “isEven” returns whether it is even.

function isEven(num){
        if((num%2)===0)
        {
            return true;
        }

        else{
            return false;
        }
   }
   var even = isEven(5);


//Problem:
//Write a function called “areBothOdd”.
//Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.



function areBothOdd(num1, num2){
    
      if((num1%2!=0) && (num2%2!=0))
      {
          return true;
      }

      else{
          return false;
      }
   }


//Write a function called “getFullName”.
//Given a first and a last name, “getFullName” returns a single string with the given first 
//and last names separated by a single space.
 
function getFullName(firstName, lastName){
    
    return firstName+lastName;
   }

   
//Problem:
//Write a function called “getLengthOfWord”.
//Given a word, “getLengthOfWord” returns the length of the given word.


function getLengthOfWord(word1){
        return (getLengthOfWord.length);
   }


//Problem:
//Write a function called “isSameLength”.
//Given two words, “isSameLength” returns whether the given words have the same length.


function isSameLength(word1, word2){
        return (word1.length === word2.length);
   }


//Problem:
//Create a function to calculate the distance between two points 
//defined by their x, y coordinates

console.log(getDistance(100, 100, 400, 300));

function getDistance(x1, y1, x2, y2)
{
        return Math.sqrt((Math.sqrt(x1-x2,2)+ Math.sqrt(y1-y2,2)),0.5);
}


//Write a function called “getNthElement”.
//Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array. 
//If the array has a length of 0, it should return ‘undefined’.


function getNthElement(array,n){
    if(array.length>0)
    {
        return array[n];
    }
    else
    {
           return "undefined";
    }
   }
   
//Problem:
//Write a function called “getProperty”.
//Given an object and a key, “getProperty” returns the value of the property at the given key. If there is no property at the given key, it should return undefined.

var obj = {
    mykey: "value"
   };
   function getProperty(obj, key) {
        if(obj.hasOwnProperty)
        {
            return obj[key];
        }

        else{
            return "undefined"
        }
   }


//Problem:
//Write a function called “addProperty”.
//Given an object and a key, “addProperty” adds a new property 
//on the given object with a value of true.
   var obj = {
    mykey: "value"
   };

   function addProperty(obj, key){
        obj[key]=true;
   }

//Problem:
//Write a function called “removeProperty”.
//Given an object and a key, “removeProperty” removes the given key from the given object.


function removeProperty(obj, key){
    delete obj[key];
    return "undefined";
   }


//Problem:
//Return an array, where the first element is the count of positives numbers and 
//the second element is sum of negative numbers.

var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = function countPositivesSumNegatives(arr) {
    var post = 0 , negt=0;
    for(let i=0 ; i<arr.length;i++)
    {
        if(arr[i]>0)
        {
            post+=1;
        }
        else if(arr[i]<0)
        {
            negt+=1;
        }
    }

    return (post,negt);
}
console.log(ar2);


   
