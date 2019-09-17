function a(slp =1000){

 return new Promise((reslove ,reject)=>{
 
 setTimeout(()=>{
 

 reslove("Im from A reslove");
 },slp);
 
 });

}

function b(){

 return new Promise((reslove ,reject)=>{
 
 setTimeout(()=>{
 
 console.log("Im from B");
 
 reslove(" FROM B");
 
 },1);
 
 });

}


function c(){

 return new Promise((reslove ,reject)=>{
 
 setTimeout(()=>{
 
 console.log("Im from c");
 reslove();
 
 },15);
 
 });

}

/*
try {
 (async function completetask() {
  var response = await a();
  console.log(response);
  var response = await b();
  console.log(response);
 })();
}catch(err){
  console.log(err);
}
console.log("-------------------------------------");
try {
 (async function completetask() {
  var response = await a();
  console.log(response);
  var response = await b();
  console.log(response);
 })();
}catch(err){
 console.log(err);
}
*/

//Promise.all([ c(),b(),a()]).then(()=>{console.log("SUCCESS")} ).catch((err)=>{console.log(err)} );
/*
a().then((result)=>{

 console.log(result);
 return b();

}).then((result_b)=>{
 console.log("PROCESSED B AND RESULT OF " + result_b);

});
*/

a(1000).then((result)=>{
 console.log(result);
 console.log("first-------------------------------------");
});

console.log("-------------------------------------");

a(2000).then((result)=>{
 console.log(result);
 console.log("----------------  SECOND ---------------------");
});

/*
a().then((result)=>{
 console.log(result);
 alert("second");
});
*/
