// "this is day 9 of js course"; 

let changeTextContent = document.getElementById('id')
changeTextContent.innerText = "i am changed by selecting"

let changeBg = document.querySelector('h3')
console.log(changeBg);
changeBg.style.backgroundColor = "blue"

// --> removing the class
changeBg.classList.remove('two');


// --> creating a new element by JS 
let createDiv = document.createElement('div')
createDiv.innerHTML = "i am created by js"
document.body.appendChild(createDiv)



let selectingList = document.body.querySelector('.list')

// -> creating a li inside a ul 
let createdLi = document.createElement('li')
createdLi.classList.add("dusra")
createdLi.innerHTML = "two"; 
selectingList.appendChild(createdLi)


// -> removing a element from html body 
document.body.removeChild(createDiv)


// --> removing a child from parent 

let lastRemove = document.querySelector('ul')
let dusra = document.body.querySelector(".dusra")
lastRemove.removeChild(dusra)

//  --> changing attribute of a html tag

let changingAttributes = document.body.querySelector('#aa')
console.log(changingAttributes);

changingAttributes.setAttribute('href' , "https://www.youtube.com/watch?v=oCxpMR7y8gc&list=RDhGvR-m_tZCY&index=22")


//  --> using addEvent listener 

let paragrahp = document.body.querySelector('.pp')
let btn = document.body.querySelector('#btn')


let count = 0; 
btn.addEventListener("click",()=>{
  if(count === 0){
    paragrahp.innerHTML = "i am changed by you"
    count = 1;
    console.log(count);
  }else{
    paragrahp.innerHTML = "i am not changed."
    count = 0;
    console.log(count);
  }
})

let brd = document.body.querySelector(".brd")

brd.addEventListener("mouseover",()=>{
  brd.style.borderColor = "red"
 
})

