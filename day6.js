// this is day 6 (Arrays[])

let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log("first element of arr", arr[0]);
// console.log("last element of arr" , arr[4]);

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr1.push(10);
// console.log("push " , arr1); // add new element in the last of the array

arr1.pop();
// console.log("pop" , arr1); // remove the last element from the array

arr1.shift();
// console.log("shift" , arr1); // remove the first element

arr1.unshift(1);
// console.log("unshift", arr1);
// add new element in starting

let forArr = [10, 20, 30, 40, 50, 60];
for (let i = 0; i < forArr.length; i++) {
  // console.log("each element " , forArr[i]);
}

forArr.forEach((arr) => {
  // arr += 10;
  if (arr < 20) {
    arr += 20;
  }
  arr += 20;
  // console.log(arr);
});

let arrMap = [2, 4, 6, 8, 10, 11, 13, 15, 17];

const newArr = arrMap.map((arr) => {
  return arr * arr;
});

// console.log("without making a new arr to contains The map " , arrMap);
// console.log("after map " , newArr);

let arrfilter = arrMap.filter((arr) => {
  let even = arr % 2 != 0;
  return even;
});

// console.log("filtering " , arrfilter);

let reduceArr = arrMap.reduce((acc, current) => {
  return acc + current;
}, 0);

// console.log("after reduce" , reduceArr);

const people = [
  { name: "Alice", age: 21 },
  { name: "Bob", age: 21 },
  { name: "Charlie", age: 23 },
  { name: "David", age: 23 },
];

const groupedByAge = people.reduce((accumulator, currentValue) => {
  const age = currentValue.age;
  if (!accumulator[age]) {
    accumulator[age] = [];
  }
  accumulator[age].push(currentValue);
  return accumulator;
}, {});

// console.log(groupedByAge);

let matrix = []
let rows = 3; let col = 3; 

for( let i = 0; i<rows ; i++){
  let rows = []; 
  for(let j=0; j< col;j++){
    rows.push(i*col+ j+ 1);
  }
  matrix.push(rows)
}

for (let i = 0; i < rows; i++) {
  console.log(matrix[i]); // Log each row
}

// console.log(matrix[rows]);
