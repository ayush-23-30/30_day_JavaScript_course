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

let newArr = [...Arr ,20,30,100  ]
// console.log(newArr);


// spread copying the arr and objects values into new variable 
// rest --  taking numbers as an [array]  , ab isme kitni bhi numbers input kar sakte ho 
function restUsing (...num){
  return num.reduce((total, num) => total + num, 0)
}

console.log(restUsing(102,32,21,32,23,3));





