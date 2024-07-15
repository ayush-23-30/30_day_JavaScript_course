// activity 1  if-else statements 
 let num = 0; 
if(num<0){
  console.log("the num is negative" , num);
}else if(num  > 0 ){
  console.log("the num is  positive", num);
}else{
  console.log("number is zero" , 0 );
}

let age = 12; 

if(age >= 18){
  console.log("you are eligible for vote", age);
}else{
  console.log("you are not eligible for voting " , age);
}


// activity 2 nested loop 

let a = 122; 
let b= 22; 
let c = 323; 

if(a < b && b > c ) {
  console.log( "b is biggest");
}else if (a > b && a > c){
  console.log("a is biggest");
}else {
console.log("c is biggest");
}

// activity 3  switch case 

let day = 7;

switch(day){
  case 1 : console.log("monday!"); 
  break; 
  case 2 : console.log("tuesday!"); 
  break;
  case 3 : console.log("wednesday!");
  break; 
  case 4 : console.log("thusrday!");
  break;
  case 5 : console.log("friday!");
  break;
  case 6 : console.log("saturday");
  break; 
  case 7 : console.log("sunday!");
  break; 
  default : console.log("invalid input please enter a number between 1 to 7");

}

// let grade = 'D';

// switch (grade) {
// case 'A' : if(grade > 90 && grade < 100){
//   console.log("A");
// }
// break;
// case 'B' : if(grade > 75 && grade < 90){
//   console.log("B");
// }
// break; 
// case 'C' : if(grade > 50 && grade < 75){
//   console.log("C");
// }
// break; 
// case 'D' : if(grade > 35 && grade < 50){
//   console.log("D");
  
// }break;
// case 'E' : if(grade > 0 && grade < 35){
//   console.log("F");
// }
// break; 
// default: console.log("please enter a number between A - E");
// }


let numericGrade = 88; // Assume this is the actual numeric grade

switch (true) {
  case numericGrade >= 90 && numericGrade <= 100:
    console.log("A");
    break;
  case numericGrade >= 75 && numericGrade < 90:
    console.log("B");
    break;
  case numericGrade >= 50 && numericGrade < 75:
    console.log("C");
    break;
  case numericGrade >= 35 && numericGrade < 50:
    console.log("D");
    break;
  case numericGrade >= 0 && numericGrade < 35:
    console.log("F");
    break;
  default:
    console.log("Please enter a valid numeric grade.");
}

// activity 4 ternary operator 

num%2 == 0  ? console.log("this is a even number! ") : console.log("this is a odd number! "); 

// activity 5 combinig conditons 

let year = 1900;
  if(year % 4 === 0 && year%400 === 0 &&  year%100 === 0){
    console.log("this is a leap year");
  }
  else {
    console.log("this is not a leap year");
  }

