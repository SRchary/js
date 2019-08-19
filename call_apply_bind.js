
/*
Every Object has it`s won methods and properties
attaching out side function to object


 */
//Example of call( ) function
var obj ={
    num:2,
    result : 4

}
var fun = function(a){
    return this.result*a

}

console.log(fun.call(obj ,2))


console.log("Moretan one arguments call function START")
var fun1 = function(a ,b){
    return this.result*a*b

}

console.log(fun1.call(obj ,2 ,4))