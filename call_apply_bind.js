
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

// APPLY FUNCTION
arguments =[20]
console.log(fun.apply(obj ,arguments))

arguments =[20 ,40]
console.log(fun1.apply(obj ,arguments))

//bind EXAMPLE

var b = fun.bind(obj);
console.log(b(10))
console.log(b)
console.dir(obj)