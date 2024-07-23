let btn = document.body.querySelector('#btn'); 
let para = document.body.querySelector('#para')

let count = 0; 
// ye count bhar hona chliye addeventlistener k varna work nahi karega kyuki ye create hi click hone k bad hota hai toh ye direct if condition p chlra hai or click hote hii 1 ho jata hai or listerner k bhar aa jata hai 

btn.addEventListener("click", ()=>{
  if(count === 0){
    para.innerHTML = "his is changed now "
    count = 1; 
    // console.log(count);
  }else{
    para.innerHTML  = "this is not change till now." 
    count = 0;
    // console.log(count);
  }

})

// let image = document.body.querySelector("#show")
// let btn1 = document.body.querySelector("#btn1")

// let count1 = 0; 
// btn1.addEventListener("dblclick" , ()=>{
// if(count1 === 0 ){
//   image.style.visibility =  "visible"
//   count1 = 1;
// }else{
//   image.style.visibility = "hidden"
//   count1 = 0; 
// }
// })

let box = document.body.querySelector("#box")

function inOut (){
  box.addEventListener("mouseover", ()=>{
    // console.log("ello");
    box.style.borderColor = "pink"
  })
  box.addEventListener("mouseout" , ()=>{
    box.style.borderColor = "black"
    // console.log("out");
  })
}
inOut();

// let inputBox = document.body.querySelector("#in")

// // inputBox.addEventListener("keydown" , (e)=>{
// //   console.log(e, "key event");
// // })

// inputBox.addEventListener("keyup" , (e)=>{
// if(e.key === "Enter"){
// console.log(inputBox.value);
// para.innerHTML = "change by key value "
// }
// })

let form = document.body.querySelector("#form")
let btn2 = document.body.querySelector("#submit")
 
form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  let formData = new FormData(form);
  let isEmpty = true;
  
  formData.forEach((value) => {
    if (value.trim() !== "") {
      isEmpty = false;
    }
  });

  if (isEmpty) {
    alert("Please fill in the form");
  } else {
    console.log("Form data:");
    formData.forEach((value, key) => {
      // console.log(key + ": " + value);
    });
  }
});


let select = document.body.querySelector("#select")
let display = document.body.querySelector("#display")

select.addEventListener("change", ()=>{
const selectedvalue = select.value
display.textContent = `selected value ${selectedvalue}`
})

const itemList = document.getElementById("item-list")

itemList.addEventListener("click" , (e)=>{
  if(e.target && e.target.matches("li.item")){
    console.log(`you clicked on ${e.target.textContent}`);
  }

})

document.addEventListener("DOMContentLoaded", () => {
  const itemList = document.getElementById("item-list");
  const addItemButton = document.getElementById("add-item");

  // Event delegation: Attach event listener to the parent element
  itemList.addEventListener("click", (event) => {
      if (event.target && event.target.matches("li.item")) {
          console.log(`You clicked on ${event.target.textContent}`);
      }
  });

  // Function to add a new item to the list
  const addItem = () => {
      const newItem = document.createElement("li");
      newItem.classList.add("item");
      newItem.textContent = `Item ${itemList.children.length + 1}`;
      itemList.appendChild(newItem);
  };

  // Attach event listener to the button to add new items
  addItemButton.addEventListener("click", addItem);
});










