var arr = [30,21,19,11,44];

var sumn = arr.reduce(function(total,numb){
      return total+numb;
},0);

console.log(sumn);
