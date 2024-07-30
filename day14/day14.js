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
      // console.log("new age is incorrect");
    }else{
      this.age = newage; 
      // console.log("age  updated");
    }
  }
}

const person1 = new Person("ayush" , 18); 
// console.log(person1.greet());

// console.log("previous age " , person1.age);
// person1.updateAge(202)

// console.log(person1.age);

class newPerson {
  constructor (name , age) {
    this.name = name; 
    this.age = age; 
  }
  greet(){
    return `hello, my name is ${this.name} and my age is ${this.age}`
  }
}

class Student extends newPerson {
  constructor (name, age , studentId ){
    super(name , age )
    this.studentId = studentId
  }
  greet() {
    return `Hello, my name is ${this.name} and I am a ${this.age} years old and my student id is ${this.studentId}.`
}

}

const s1  = new Student ("Goku " ,1000 , 19)
// console.log("student ID " , s1.studentId);


class Person2 {
  static greeting (){
    return "hello sir, nice to see you"; 

  }
  constructor(name , age) {
    this.name = name; 
    this.age = age ; 
  }
}

// console.log(Person2.greeting());

class Studen extends Person2 {
  static stdCount = 0;
  constructor (name , agge , studID){
    super(name , agge ); 
    this.studID = studID;
      this.studID = studID
      Studen.stdCount +=1; 

  }
  greet() {
    return `Hello, my name is ${this.name} and I am a ${this.agge} years old and my student id is ${this.studID}.`;
  }
}

console.log("Total number of students:", Studen.studentCount);
const s11 = new Studen("Goku", 100, 1);
const s2 = new Studen("Luffy", 19, 2);
const s3 = new Studen("Ichigo  ", 27, 3);
console.log("Total number of students:", Studen.stdCount);


// Activity 4: Getters and Setters



class Person22 {
  constructor(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }

  // Task 7
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  set firstName(newFirstName) {
    if (newFirstName.trim() === "") {
      console.error("Please provide valid new first-name");
      return
    }
    this._firstName = newFirstName
    console.log("First-name updated successfully");
  }
  set lastName(newLastName) {
    if (newLastName.trim() === "") {
      console.error("Please provide valid new last-name");
      return
    }
    this._lastName = newLastName
    console.log("Last-name updated successfully");
  }
}

const p1 = new Person22("Roronoa", "Zoro", 21);
console.log(p1.fullName);
p1.firstName =""
p1.lastName = "Sanji"
console.log(p1.fullName);


// Activity 5: Privates Fields

// Task 9

class Account {
  #balance;
  constructor() {
    this.#balance = 0;
  }

  get balance() {
    return this.#balance;
  }
  deposit(amount) {
    if (amount < 100) {
      console.error("Deposit amount should be at least 100");
      return;
    }
    this.#balance += amount;
    console.log("Amount deposited successfully");
  }
  withdraw(amount) {
    if (amount >= this.#balance) {
      console.error("Insufficient Balance, Please deposit some amount");
      return;
    }
    if (amount <= 0) {
      console.error("Withdrawal amount must be greater than 0.");
      return;
    }
    this.#balance -= amount;
    console.log("Amount withdrawn successfully");
  }
}

// Task 10
const ac1 = new Account();
console.log(ac1.balance);
ac1.deposit(0);
console.log(ac1.balance);
ac1.withdraw(4000);
console.log(ac1.balance);