// this is day 8 of JS courses
let Name = "Ayush"; 
let age = 22;

// console.log(`i am ${Name} and my age is ${age}`);


const name1 = 'John';
const age1 = 30;
const userInfo = `Name: ${name1}, Age: ${age1}`;
// console.log(userInfo); 

const arr = [20,30,40]; 
const [one , two] = arr; 
// console.log(one);
// console.log(two)


const obj = {
  title : name1 , 
  age : age1
}

const {newName  = 12 , newAge = "pawar"} = obj
// console.log(newName ,  newAge);

let Arr  = [12,3,312,2]; 

let newArr = [...Arr ,20,30,100 ]
// console.log(newArr);


// spread copying the arr and objects values into new variable 
// rest --  taking numbers as an [array]  , ab isme kitni bhi numbers input kar sakte ho 
function restUsing (...num){
  return num.reduce((total, num) => total + num, 0)
}

// console.log(restUsing(102,32,21,32,23,3));

function defaultValue (a, b =2){
  return a*b;
}

// console.log(defaultValue(10));

function objectEnhanced (makeBy , model , year){
  return {
    makeBy , 
    model, 
    year
  }
}

// console.log(objectEnhanced ("apple" , "macBook" ,"2022"));

let name2 = "make"; 

let i =0; 

const laptop = {
  [name2 + ++i] : "apple",
  [name2 + ++i] : "dell", 
  [name2 + ++i] : "hp"
}

// console.log(laptop.make1);
// console.log(laptop.make2);
// console.log(laptop.make3);

let propName1 = "name"; 
let propName2 = "age"; 
let propName3 = "city";

let propValue1 = "ayush";
let propValue2 = "22";
let propValue3 = "delhi";

let obje = {
  [propName1] : propValue1, 
  [propName2] : propValue2, 
  [propName3] : propValue3, 
}

console.log(obje);


