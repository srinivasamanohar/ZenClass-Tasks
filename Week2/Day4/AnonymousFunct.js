// First Letter lower case to upper case
(function(){
    
    let arr = ['bharani', 'mani', 'cricket', 'hockey'];
    let res = arr.map(data => {
        return data[0].toUpperCase() + data.slice(1);
    });
    console.log("Title Cap", res);
})();


// rotation
let rotate = function(arr, k){
    let splittedArr = arr.splice(0, k);
    return arr.concat(splittedArr);
}
arr= [1,2,3,4,5,6]
console.log("Array Rotation with k:", rotate(arr, 4));
//median
let median = function(ary1, ary2){
    
        let arr = arr1.concat(arr2);
       const arrSort = arr.sort();
 var midn = Math.ceil(arrSort.length / 2);

 var res =arrSort.length % 2 === 0 ? (arrSort[midn] + arrSort[midn - 1]) / 2 : arrSort[mid - 1];
 
 return res
}

let arr1 = [11, 13, 15, 17, 19];
let arr2 = [22, 24, 26,28, 30];
console.log(Math.ceil(median(arr1,arr2)));


//odd
let numArr = [21,4,55,23,6,17,31];
(function(){
    let res = numArr.filter(data => data%2!=0);
    console.log("Only odd", res);
})();


//palindrome
let Palindrome = function(arr){
    return arr.filter(data =>{
        let str = data.split('').reverse();
        return data == str.join('');
    });
}
palindromeArr =["121","13","11","313"]
console.log("Palindrome Check",Palindrome(palindromeArr));


//prime
(function(){
    function Prime(numb){
      for(let i = 2; i < numb; i++){
              if(numb % i === 0) return 0;
          }
          return 1;

    }
   let aryPrime = arr1.filter(val=>Prime(val))
   console.log("Prime numbers in array: ",aryPrime)
})();


//unique array
(function(){
    var arrd =[16,16,5,5,2,2,2,4,2,3,13,17,17];
    let uniqueArray = [...new Set(arrd)]; 
    console.log("Unique array:",uniqueArray);
})();


// sum of elements in array 
(function(){
    let arrSumn = arr1.reduce((acc,item)=>{
        return acc+=item
    },0)
    console.log("Sum of elements in Array:",arrSumn)
})();
