console.log("This is day 2.");
//activity 1 - 

// program to add two numbers 
function addTwo (a,b){
  let aa = a + b; 
  return aa; 
}
// console.log(addTwo(10, 20));

// subtract two numbers 
const SubTwo = function(a,b){
  let aa = a - b;
  return aa;  
}
// console.log(SubTwo(100, 20));
 
// program to multiple two numbers 
const multiTwo = (a,b)=>{
  let aa = a * b;
  return aa; 
}
// console.log(multiTwo (20, 2));

// program to divide two numbers 

const divideTwo = (a = 10, b=5)=>{
let aa = a/b; 
return aa; 
}
// console.log(divideTwo());

// program to module two numbers 

(function tow (a = 10,b = 6){
  let aa = a % b 
  // console.log(aa);
})()

// activity two 

// using  += ; 
// let ak = 5 
// let bb = ak + 4; instead of this you can use this  
// console.log(bb);
// ak += 4; // use this 
// console.log(ak);


let arr = [12, 23, 3, 423, 21, 3];
let sum = 0;

function addArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// console.log(addArr(arr));

let arrSub = [2,32,12,435,35,21,214,23]; 
let sum1 = 0; 

function subArr (arr){
for(i = 0 ; i<arr.length ; i++){
  sum -= arr[i]; 
}
return sum; 
}
// console.log(subArr(arrSub));/

// activity 3 - program to compare to numbers 

// let num1 = 10; 
// let num2 = 20; 

// if(num1 >  num2) console.log("num1 is bigger than num2" , num1);
// else if(num1 < num2){
//   console.log("num2 is bigger than num1 " , num2);
// }

// let num3 = 15; 
// let num4 = "15"; 

// if(num3 <= num4){
//   console.log("num3 is shoter or equal than num 4" , num3);
// }else {
//   console.log("i don't know");
// }

// if(num3 == num4){
//   console.log("both are equal");
// }
// if(num3 === num4){
//   console.log("there are equal");
// }else{
//   console.log("there are not equal");
// }

// activity 4 ; 

// console.log(name1.length);
// console.log(name2.length);

let name1 = "ayush"; 
let name2  = "kumar"; 


if (name1 === name2) {
  console.log("they both are equal in length and data types");
} else if (name1.length === name2.length) {
  console.log("they both are equal in length but not in data");
} else {
  console.log("not equal");
}

if(name1.length <=  name2.length || name1 ===  name2){
  console.log("they both are eqaul in length and but not in vaule");
}else {
  console.log("not equal");
}

let nu = null; 

if(!nu){
  console.log("not true");
}else {
  console.log("this is true");
}

// ternary operator 
let ve = 29; 
ve > 0 ? console.log("this is a +ve number") : console.log("this is a -ve number");

// ternary operator  -- condition ? if true_ : if false ; 






