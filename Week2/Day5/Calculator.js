class Calculator{

    constructor(num1, num2){
        [this.num1, this.num2] = [num1, num2];
    }
    
    add()
    { 
        return this.num1 + this.num2; 
    }
    
    subt()
    { 
        return this.num1 - this.num2; 
    }
    
    mullti()
    { 
        return this.num1 * this.num2; 
    }
    
    div()
    { 
        return this.num1 / this.num2; 
    }
    
    mod()
    { 
        return this.num1 % this.num2; 
    }
}

let oper = new Calculator(28, 16);
console.log(oper.add());
console.log(oper.subt());
console.log(oper.multi());
console.log(oper.div());
console.log(oper.mod());
