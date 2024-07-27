var a = 1;  
console.log("this is value of Var variable " , a);
let b = "ayush"; 
console.log("this is value of let variable " , b);
const c = true; 
console.log("this is value of const variable " , c);
 let arr = [1,2,3];
console.log("this is value of Arr" , arr);
let obj = {
  name : "ayush ", 
  age : 22

}
console.log("this is value of obj" , obj );



console.log(typeof obj.name  , "data Type of object name ");
console.log(typeof obj.age , "data type of object age ");
console.log(typeof a ,  "data type of var A");
console.log(typeof arr , "data type of let arr" );
console.log(typeof c , "data type of const c");
console.log(typeof b , "data type of b");

// assigning a let variable n giving it a new value 

let one = 12; 
console.log("inital value of one" , one);

one = "ayush bhai" ; 
console.log("after reassign value of " , one);

// try to reassgn value of const 

const two = 23; 
console.log("inital value of const two " , two );

 // two = "ayush ";  // this is show a typeError beacuse you can't change the value of const  