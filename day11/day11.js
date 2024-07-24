
// let proResolve = new Promise((resolve, reject) => {
//   setTimeout(() => {
//       console.log("this promise is resolved");

//       if (true) {
//           resolve("data is fetched");
//       } else {
//           reject("data is not fetched");
//       }
//   }, 2000);
// });

// proResolve
//   .then((data) => {
//       console.log(data);
//   })
//   .catch((error) => {
//       console.log(error);
//   }); 

//   let promise2 = new Promise((resolve , reject)=>{
// setTimeout(() => {
// if(false){
//   resolve ("this is worling ")
// }else{
//   reject("this is not true")
// }
// }, 2000);
//   })

//   promise2.then(()=>{
//     console.log("everything is fine ");
//   })
//   .catch(()=>{
//     console.log("not working ");
//   })

  
//   const fetchData = (message , delay) =>{
//     return new Promise((resolve, reject) =>{
//       setTimeout(() => {
//         console.log(message);
//         resolve(message)
//       }, delay);
//     })
//   }
// fetchData("data from server is 1, ", 2000)
// .then(()=>{
//   fetchData("data is there ", 2000)
// })
// .then (()=>{
//   fetchData("data is in 3 then " , 2000)
// })

const asyncWithFunctions = async ()=>{
  const res = await new Promise ((resolve  , reject)=>{
    let som = "this is resolved"
    resolve(som)
  })
  console.log(res);
}
// asyncWithFunctions()

const asyncWithReject = async()=>{
  try {
    const res = await new Promise((resolve , rejected)=>{
      rejected("this is rejected like you are rejected by the world")
    })
    console.log(res);
    
  } catch (error) {
    console.log("this is rejected" ,);
  }
}

// asyncWithReject()


const fetchWithPromise = fetch("https://api.github.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Network response was not ok (status ${response.status})`);
    }
    return response.json(); // Parse the response body as JSON
  })
  .then((data) => {
    // console.log(data);
  })
  .catch((err) => {
    console.error("Error fetching data:", err.message);
  });


  const fetchData = async () =>{
    try{
      const response = await fetch("https://api.github.com/users")
      const data = await response.json()
      console.log(data);
    }catch{
      console.log("error in async fetch");
    }
  }

  // fetchData()

  const one = new Promise((res,rej)=>{
    setTimeout(() => {
      let show = "promise one "
      res(show)
    }, 1000)
  }) 
  const two = new Promise((res,rej)=>{
    setTimeout(() => {
      let show = "promise two "
      res(show)
    }, 1000)
  }) 
  const three = new Promise((res,rej)=>{
    setTimeout(() => {
      let show = "promise three "
      res(show)
    }, 1000)
  }) 
  const four = new Promise((res,rej)=>{
    setTimeout(() => {
      let show = "promise four "
      res(show)
    }, 1000)
  }) 

  Promise.all([one,two,three,four])
  .then((result) =>{
    console.log(result);
  })
  .catch((err) =>{
    console.log("this is error ");
  })