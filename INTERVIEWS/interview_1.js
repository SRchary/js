// 1) QUESTION ----1
var str = "  I Love My Contary ";
/**
 * How to Reverse string
 */
//Answer in Multi Lines
var arry = str.split("");
console.log(arry);
var reverse_array = arry.reverse();
console.log(reverse_array);
var reverse_str = reverse_array.join('');
console.log(reverse_str);
// Answer in Single Line

console.log(str.split("").reverse().join(''));


/****************************************************************************************/

// ------------------ Question ----2 --------------------------//

/*
 one Array contains 1 to 100 values with  un order  like a = [1 ,3,2 ,5, 6,7,4,......100]
 How to Find Missing Value in array
 */

// Answer
var  arry = [1,2,5,6,3,7,9,8,10];
/* total of  all array values  n(n+1)/2
if n =10
array_total =  10(10+1)/2  hear array_total  = 55


 */
var present_arry_total =  arry.reduce((a,b) =>a+b ,0);
var array_length = 10;
var need_total = (array_length*(array_length+1))/2;
var missing_val = need_total - present_arry_total;
console.log("Missing Value");
console.log(missing_val);

/**************************** QUESTION ---3 *******************************/

var arr  =  [1 ,2 ,3 ];
var arr2 = [4,5,6];

// arr+arr2 = ?

/* What Is the output of arr+arr2  */
// Answer is 1,2,34,5,6

/*
Explation : here + operend is concatinate
here arr and arr2 is  array   + oprend is converting arry and arr2 string
so that  answer 1,2,34,5,6
*/

console.log(arr+arr2);
console.log([...arr+arr2]);

/******************************** QUESTION --- 4 ************************************* */

//   refer to  method Chaining
var a= {

    x:function(){
        console.log("x");
        return a
    },
    y:function(){
        console.log("y");
        return a
    },
    z:function(){
        console.log("z");
        return a
    }

}

a.x().y().z();

/***************************QUESTION --- 5 ********************************/

function y(){
    console.log(this.length);
}
var x = {
    length :10,
    method:function(y){
        arguments[0]();
    }
};

x.method(y ,1 ,2 ,4);


/***************************QUESTION --- 6 ********************************/
// Question -6 : What Is Output
var arr = [10 , 5,15 , 20 , 25]
for (let i = 0;i < arr.length ;  i++ ){
    setTimeout(function(){
        console.log(i+"  ---> "+arr[i] )
    } ,arr[i])

}
/* Answer :
1 ---> 5
0 ---> 10
2 ---> 15
3 ---> 20
4 ---> 25

*/

/*************************** Question ---> 7  *******************************/

var arry = [1 ,2,2,10 ,1,10,10 ,5];
// find max value in array and how many present in max value count

var maxVal = Math.max(...arry);
// Here ... is  Spred operater
console.log(maxVal);

var count =0;

for( var i =0 ; i< arry.length;i++){

    if(maxVal == arry[i]){
        count++;

    }
}
console.log(count);

/********************************Question --- 8 ********************************/

const profile = {
    name :"RAVI",
    myname : ()=>{

        console.log(this.name);
    }


};
profile.myname();

const profile_1 = {
    name :"RAVI",
    myname : function(){
        console.log(this.name);
    }
};
profile_1.myname();
/***********************************Question --9*************************************************/

var a =[1 , 2];
// Question  when i call a.ravi() it should print 1, 2
// Answer :
Array.prototype.ravi = ()=>{
    console.log(a.join(','))

};
a.ravi();

/*******************************Question --10 **************************************/

// oncat two arrays and sort by order
const a = [1,2,5,7,9];
const b = [ 6 , 10, 5 ,3,6  ];
// Answer :

const c = a.concat(b).sort((x,y) => x>y);
console.log(c);
/********************************Question -- 11 *************************************************/

// What is the out put bellow

const obj = {
    x:10,
    getX(){
        const inner = function(){
            console.log(this.x)
        }
        inner()
    }

};
obj.getX() // will give undefind

// Solution --1 use Arrow function
const obj = {
    x:10,
    getX(){
        const inner = ()=>{
            console.log(this.x)
        }
        inner()
    }

};
obj.getX(); // will give 10

// Solution --2 use scoping
const obj = {
    x:10,
    getX(){
        var that =this;
        const inner = function(){
            console.log(that.x)
        }
        inner()
    }

};
obj.getX(); // will give 10


// Solution --2 use scoping
const obj = {
    x:10,
    getX(){
        const inner = function(){
            console.log(this.x)
        }
        inner.bind(this)();
    }

};
obj.getX(); // will give 10

/*******************************  Question -- 12 **************************************/
var a =[1 ,2 ,3];
a[99] =100;
console.log(a); //[1, 2, 3, empty × 96, 100]
console.log(a.length); //100

/**********************  Question -- 13  ************************/
var f = function(){

    var ba =100;
    return
    ba;

};

console.log(f()); //undefined

/*********************** Question -- 14 ***********************************/
var obj = { key:'ravi' , key2: "RAMESH"};
obj.key3 = "AMMU";

console.log(obj) //{key: "ravi", key2: "RAMESH", key3: "AMMU"}

obj.key = "AMMU";
console.log(obj) //{key: "AMMU", key2: "RAMESH", key3: "AMMU"}


























