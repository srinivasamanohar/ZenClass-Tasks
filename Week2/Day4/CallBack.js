function something(x,y){
    let val1 = 10, val2 = 20;
    return y[x](val1, val2);
}

function add(a,b){
    return a+b;
}

function sub(c,d){
    return c-d;
}

function mul(e,f)
{
    return e*f;
}

oper =[add,sub,mul];

www = something(0,oper);
console.log(www);
www1 =  something(1,oper);
console.log(www1);
www2 = something(2,oper);
console.log(www2);
