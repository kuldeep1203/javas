// let firstName="kuldeep";
// v=3
// let isMarried =false;
// if(isMarried==false){
//   console.log(firstName + " is not married");
// }
// else{
//   console.log(firstName +" is married");
// }

// for(let i=0;i<10;i++){

//   console.log(i);
// }
// let a=[1,2,3];
// console.log(a[0]);

// const person = ["John", "Doe"];
// const age = ["male", "female"];

//objects

// const user ={
//   firstName:"kuldeep",
//   gender:"male"
  
// }
// const users=[
//   {
//     firstName:"kuldeep",
//     gender:"male"

//   },
//   {
//     firstName:"loki",
//     gender:"male"

//   },
//   {
//     firstName:"priya",
//     gender:"female"
  
//   }
  
  
// ]
// for(let i=0;i<users.length;i++){
//   if(users[i].gender=="male"){
//         console.log(users[i].firstName);
   
    
//   }
// }
//u can also nest the object the sameway more like an object in an object

//fucntions

// function findSum(a,b){
//   return a+b;
// }
// const value = findSum(1,2);
// console.log(value);


//function calling function (callback)


// function sum(num1 ,num2, fnToCall){
//   let result = num1+num2;
//   fnToCall(result);
// }
// function displayResult(data){
//   console.log("result of the sum is :" + data);
// }
// function displayResultPassive(data){
//   console.log("sum's reuslt is:"+data);
// }
// const ans = sum(1,2,displayResult);

// function calculate(a,b,operation){
//   const ans= operation(a,b);
//   return ans;
// }
// function sum(a,b){
//   return a+b;
  
// }
// const value =calculate(1,2,sum);
// console.log(value)
// function a(){
//   console.log("a");
// }
// setTimeout(a,5000)

// console.log("Start");
// setTimeout( f=>console.log("hi")
   
// , 1000); // Set a timeout of 1000 milliseconds (1 second)

// console.log("End");
