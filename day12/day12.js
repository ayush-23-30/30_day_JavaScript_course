
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
// console.log(user(""));

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

