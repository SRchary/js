// 1) QUESTION ----1
var str = "  I Love My India ";
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


console.log();
















