// 'this is day 7'

let book = [
  {
    title : "thala for a reason",
    author : "thala", 
    year : 2005, 
  },
  {
    title : "china thala for a reason",
    author : "china", 
    year : 2007, 
  },
  {
    title : "ayush for a reason",
    author : "ayush", 
    year : 2013, 
  },
]
let obj = {
  title : "ayush for a reason",
    author : "ayush", 
    year : 2013, 
}
// console.log(book[0].title);


// for(let i = 0 ; i<book.length ; i++){
//   console.log(book[i].title);
//   console.log(book[i].author);
//   console.log(book[i].year);
// }

// console.log(obj.title);
// console.log(obj.year);
// console.log(obj.author);
// console.log(book[0].title);

for (const key in obj) {
 console.log(key + ":" + obj[key]);
}
