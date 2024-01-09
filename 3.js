//map
// given an array give me back a new array in each every value is multiplied by two
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArr = arr.map((value) => {
  return value * 2;
});
console.log(newArr);

//filter
// given an array give me back a new array with only even numbers
const newArr1 = arr.filter((value) => {
  return value % 2 === 0;
});
console.log(newArr1);

//create a map fucntion taht takes a transform fucntinn as an input and returns the transformed array as output
