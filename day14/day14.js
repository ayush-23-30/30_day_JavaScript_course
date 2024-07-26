class Person {
  constructor(name , age ){
    this.name = name, 
    this.age = age
  }
  greet(){
    return `Hello, my name is ${this.name} and my age is ${this.age}`
  }
  
  updateAge(newage) {
    if(newage <= 0 || newage == this.age){
      console.log("new age is incorrect");
    }else{
      this.age = newage; 
      console.log("age  updated");
    }
  }
}

const person1 = new Person("ayush" , 18); 
console.log(person1.greet());

console.log("previous age " , person1.age);
person1.updateAge(202)

console.log(person1.age);


