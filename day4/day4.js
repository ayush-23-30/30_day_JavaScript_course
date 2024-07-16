console.log("this is day 4");

// // activity 1  a.  print number from 1 to 10 ; and table of 5 

// for(let i = 1 ; i<11 ; i++){
//   // console.log("counting " , i);
// }

for(let i = 5; i < 51; i+=5){
  // console.log("table of 5" , i);
}
 
// let i = 5;
// while  (i <=50){
//   console.log("table of 5" , i);
//   i += 5; 
// }

// activity 2 ; program to sum a to b ; while loop for 10 to 1 count 

function sum(a){
  let num = 0; 
  for(let i =0; i<=a ; i++) {
    num += i; 
  }
  return num;
}

// console.log("sum " , sum(10));

let i = 10; 

while (i>0){ // kab tak chle jab tak i zero se bada ho 
  // console.log(i);
  --i;
}

// activtiy  3 ; do while program for 1 to 5 print ; and factorial of numbers; 

let a = 1; 
do {
  console.log(a);
  a++; 
} while (a<=5)
 



function factorial (n){
  let start = 1; 
  let fact = 1; 
  do{
    fact *= start;
    start++; 
  
  }while(start<=n);
  return fact; 
}
 
console.log(factorial(5));

// activity 4  pattern 

for (let i = 1 ; i <5 ; i++){
  for(let j = 1; j<=i ;  j++){
    console.log("*" );
  }
  console.log(" ");
}


