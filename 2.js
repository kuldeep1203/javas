// const animals = [
//     { 
//       animal: "Dog",
//       name: "Jude",
//       weight:30
//     },
//     {
//       animal: "Dog",
//       name: "Max",
//       weight:50
//     },
//     {
//       animal: "Dog",
//       name: "Bella",
//       weight:60
//     },
//     {
//         animal:"cat",
//         name: "lisa",
//         weight:10

//     }
//   ];
// let ans = [];
// const animalWeightMap = new Map();
// for(let i=0;i< animals.length;i++){
//     if(animalWeightMap.has(animals[i].name)){
//         animalWeightMap.set(animals[i].name,animals[i].weight);
//     }
//     else{
//         animalWeightMap.set(animals[i].name,animals[i].weight+animalWeightMap.get(animals[i].name));

//     }
    
// }
// const a = Array.from(animalWeightMap.entries().map(([key, value]) => ({ animal: key, weight: value })));
// console.log(a);

// asynfunction
// happens in parts
// multiple things are context switching with each other
//examples settimeput fs.readfile fetch

const fs = require("fs");
// fs.readFile("a.txt", "utf-8", function (err, data) {
//   console.log(data);
// });

// //supposedly the file reading call is expensive hence it is asynce so log hi will take place and then read file data

// console.log("hi");
// let a = 0;
// for (let i = 0; i < 1000000000; i++) {
//   a++;
// }
// console.log("hithere");

//call stack web apis and callback queue

//u need callback queue to handle async calls
//and callback functions for the same

//promises -gets rid of callbacks 
//callbacks can lead to callbackhell

/** *********************** */
// function kiratsReadFile(){
//   console.log("inside")
//   return new Promise(function(resolve){
//     fs.readFile("a.txt", "utf-8", function (err, data) {
//       console.log("before resolves")
//       resolve(data);
//   });
//   })
// }
// function onDone(data){
//   console.log(data);
// }
// var a =kiratsReadFile();
// console.log(a)
// a.then(onDone)

/** ********************** */

///here we did not pass the function as an argument for callback (the on done function ) rather we used promised whic doesnt require this we use on then and resolve which will help with this the moment it is resolved the data will be sent to on done fucntion and it will execute unlike in call back where u pass it as an argument and call the fucntion in the kiratsreadfile functino
//we can also use catch and error 



//arrow is basically used to use annonymus fucntiopn without name nthiing muich 
//promise has three states pending fullfilled/resolved rejected
// var p = new Promise((resolve)=>{
//   setTimeout(()=>{
//     resolve("returned data");
//   },10000)

// });

// function callback(){
//   console.log(p)
// }
// console.log(p)
// p.then(callback)//whenever the async function gets resolved 

//promise needs a function as its first argument and then the function should have a resolve or reject or both as an argument


//async await 

function kiratsAsyncFunction(){
  let p = new Promise((resolve)=>{
    //do some  async logic here
    setTimeout(()=>{
      resolve("resolved data")
    },3000);
  });
  return p;
}

async function main(){
  let value=kiratsAsyncFunction()
  console.log(value)
  value = await kiratsAsyncFunction()
  console.log(value)
  console.log("after await")//
  //this log will only take place after await it is a concious decision if u dont want this u can use then and now use async function
  //value has the promise object
  //without await it will not wait for the promise to be resolved and give output as pending but ..with await it will wait for the promise to be resolved and give output as resolved data
  //the thread will wait there it will still be async  if u have a smthign after main call it will immediately be processed 
//await can only be used inside an async function
}
main();
console.log("sup")