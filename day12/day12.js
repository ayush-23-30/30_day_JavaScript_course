
function ErrorFirst (){
  try{
    functionThatDontExist (); 

  }catch(err){
    console.log("this is not working ");
  }

}

// ErrorFirst(); 

function divide(a,b){
  if(b === 0 ){
    throw new Error("this is not possible!")
  }
  const le =  a/b; 
  try{
    const res = le
    return res;

  }catch (err){
    console.log("there is an error " , err.message);
  
  }
}
// console.log(divide(10,2));

function divide2(a,b){
  if(b === 0 ){
    throw new Error("this is not possible!")
  }
  const le =  a/b; 
  try{
    const res = le
    return res;

  }catch (err){
    console.log("there is an error " , err.message);
  
  }finally{
console.log("function is running ");
  }
}
// console.log(divide2(10,3));

function user (naam){
  let validation = true; 
  if(naam === "" || naam === " ") {
    console.log("please validate your name");
    validation = false;
  }
  try{
    return validation;
  }catch (err){
    console.log("the validation is not true");
  }
}
// console.log(user("a"));

// let promising = new Promise((res , rej) =>{
//   let random = Math.floor(Math.random()*2)
//   let result = " i am result"
//   if(random === 1){
//     res(result)
//   }else{
//     rej(result)
//   }

// }).then((data)=>{
//   console.log(data);
// }).catch((err)=>{
// console.log("error in messgae ");
// })


let randomAysnc = async ()=>{

  return await new Promise((res, rej )=>{
    let random = Math.floor(Math.random()*10)
    let pos = "i am result"
    if(random%2 === 0){
      res(pos)
    }else{
      rej(pos)
    }
  }).then((data)=>{
    console.log(data);
  }).catch(()=>{
    console.log("error in result");
  })
   
}
// randomAysnc(); 

const pro = new Promise((resolve, reject) => {
  // Fetch data from the specified URL
  fetch("https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197197")

    .then((response) =>{
      if (!response.ok) {
        throw new Error(`Network response was not ok (status ${response.status})`);
      }
      return response.json(); // Parse the response body as JSON
    })
    .then((data) => {
      console.log(data); // Log the parsed data
      resolve(data); // Resolve the promise with the data
    })
    .catch((err) => {
      console.error("Error fetching data:", err.message);
      reject(err); // Reject the promise with the error
    });
});

pro.then((resolvedData) => {
  // Handle the resolved data here
  console.log("Data resolved:", resolvedData);
}).catch((error) => {
  // Handle errors here
  console.error("Promise rejected:", error);
});


const url = async ()=>{
  try{
    // let fetching = await fetch("https://api.github.com/users")

      let fetch = await fetch("https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197197")

      let result = await fetching.json()
      console.log("this is response" , result);
    }catch(err){
      console.log("the url is not exist");
    }

}

// url(); 


