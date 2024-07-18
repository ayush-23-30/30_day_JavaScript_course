console.log("hello this is day 5 of js course");

// activity 1

function evenOdd(a) {
  if (a % 2 === 0) {
    console.log("this is a even  number ");
  } else {
    console.log("this is a odd number ");
  }
}

function sqOfNumber(a) {
  return a * a;
}

// activity 2

function maximumOfTwo(a, b) {
  if (a > b) {
    console.log("a is bigger");
  } else {
    console.log("b is bigger ");
  }
}

function stringConcat(a = "hello", b = "coder") {
  console.log(a + " " + b);
}

function stringConcat2(a = "hello", b = "coder") {
  let res = a.concat(" ", b);
  console.log(res);
}

// stringConcat();
// stringConcat2()

// activity 3

let sum = (a, b) => {
  return a + b;
};

let strContains = (str) => {
  const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if (format.test(str)) {
    return true;
  } else {
    return false;
  }
};

function TwoParamters(a, b = 10) {
  return a * b;
}

// task 8 , task 9 , task 10 remaining .
// todo complete it on saturday

function greerting(person, age = 20) {
  let greet = `welcome ${person} and age ${age}`;
  return greet;
}
let ayu = "ayush";

// console.log(greerting (ayu , 22));

function higher(fn, times) {
  for (i = 0; i < times; i++) {
    fn();
  }
}

function greti() {
  // console.log("hello coder !");
}

higher(greti, 3);

function hig(fn, fn2, val) {
  // Apply fn to the square of val
  fn(val * val); 
  
  // Apply fn2 to the result of fn2 (this needs to be defined properly)
  const result = fn2(fn2(val)); 
  
  // Return the result
  return result;
}

// Example functions
function square(x) {
  console.log("Square: " + x);
}

function double(x) {
  return x * 2;
}

// Example usage
let val = 3;
let result = hig(square, double, val);
console.log("Result: " + result);
