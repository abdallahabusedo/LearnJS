// var and let
function start() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}
console.log(i);

// var => function-scope
// let, const  => block-scope
/**
 * 
 <div class="button-container">
  <button>1</button>
  <button>2</button>
  <button>3</button>
  <button>4</button>
  <button>5</button>
</div>
 */
// document
//     .querySelector(".button-container")
//     .addEventListener("click", function(event) {
//         alert(`You clicked on button ${event.target.innerText}`);
//     });

// difference between var and let

const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const dogs = document.getElementById("dogs");

function addNewDoggo() {
  const promise = fetch(DOG_URL);
  promise
    .then(function (response) {
      const processingPromise = response.json();
      return processingPromise;
    })
    .then(function (processedResponse) {
      const img = document.createElement("img");
      img.src = processedResponse.message;
      console.log(processedResponse.message);
      img.alt = "Cute doggo";

      dogs.appendChild(img);
    });
}

document.getElementById("AddDog").addEventListener("click", addNewDoggo);

// --===o8{Intro to objects}8o===--
//In JavaScript, objects are king. If you understand objects, you understand JavaScript.

let Person = "abdallah abu sedo ";
//Using an Object Literal
let human = {
  firstName: "abdallah",
  lastName: "abu sedo",
  age: 21,
  eyeColor: "brown",
};
console.log(human);
console.log(human.firstName);
console.log(human.age);
//Using the JavaScript Keyword new
let me = new Object();
me.firstName = "abdallah";
me.lastName = "abu sedo";
me.age = 21;
me.eyeColor = "brown";

person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };

let x = person;
x.age = 10;
console.log("x", x.age); // this will change the x.age and person.age
console.log("person", person.age);

//Object Properties
console.log(person.firstName + " is " + person.age + " years old.");
console.log(person["firstName"] + " is " + person["age"] + " years old.");

//for...in Loop
let txt = "x";
let i;
for (i in person) {
  txt += person[i] + " ";
}
console.log(txt);

//Adding New Properties
person.nationality = "Egyptian";
console.log(person);

delete person.age;
console.log(person);

//Object Methods
person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  firstName: "John",
  lastName: "Doe",
  id: 5566,
};
//The this Keyword  this refers to the "owner" of the function.
//this is the person object that "owns" the fullName function.
//In other words, this.firstName means the firstName property of this object.

console.log(person.fullName());

let myArray = Object.values(person);
console.log(person);
console.log(myArray);
//Any JavaScript object can be stringified (converted to a string) with the JavaScript function
person = { name: "John", age: 30, city: "New York" };
let myString = JSON.stringify(person);
console.log(myString);
//JSON.stringify will not stringify functions:
person = {
  name: "John",
  age: function () {
    return 30;
  },
};
person.age = person.age.toString();

myString = JSON.stringify(person);
console.log(myString);
person = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
};

// Display data from the object using a getter:
document.getElementById("demo").innerHTML = person.fullName;

// --===o8{This keyword}8o===--
// what is this ?????
/**
In a method, this refers to the owner object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In an event, this refers to the element that received the event.
Methods like call(), and apply() can refer this to any object.
 */

// method => obj
const video = {
  title: "a",
  play() {
    console.log(this);
  },
};
video.stop = () => {
  console.log(this);
};
video.stop();
// function -> global ( widow , global)
//Object Constructors
// --===o8{ constructor functions}8o===--

function Persons(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

let Me = new Persons("abdallah", "abu sedo", "21", "brown");
document.getElementById("demo").innerHTML = "My Age is " + Me.age + ".";

// --===o8{ The data objects}8o===--
let date = new Date(2018, 11);
console.log(date);
// --===o8{ Arrow functions}8o===--
hellow = () => {
  console.log("hello ");
};
// --===o8{ Classes}8o===--
class Car1 {
  constructor(brand) {
    this.Name = brand;
  }
  present() {
    return "i have a " + this.Name;
  }
  static Hello(x) {
    return "i have a " + x.Name;
  }
}
let myCar = new Car1("Ford");
console.log(myCar.present());
console.log(Car1.Hello(myCar));

//Inheritance
class Car {
  constructor(brand) {
    this.carName = brand;
  }
  present() {
    return "I have a " + this.carName;
  }
}
class Model extends Car {
  constructor(brand, mod) {
    super(brand); //The super() method refers to the parent class.
    //By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.
    this.model = mod;
  }
  show() {
    return this.present() + ", it is a " + this.model;
  }
}
let NewCar = new Model("ford", "Mustang");
console.log(NewCar.show());
//Getters and Setters
class Cars {
  constructor(brand) {
    this.carName = brand;
  }
  get cName() {
    return this.carName;
  }
  set cName(x) {
    this.carName = x;
  }
}
let car2 = new Cars("ford");
car2.cName = "BMW";
console.log(car2.cName);
// --===o8{Promises}8o===--
// let p = new Promise((resolve, reject) => {
//   let a = 1 + 1;
//   if (a == 2) {
//     resolve("success");
//   } else {
//     reject("failed");
//   }
// });

// p.then((massage) => {
//   console.log("this is in the  then " + massage);
// }).catch((massage) => {
//   console.log("this is in the catch");
// });

// ex 2
// const Task1Promise = new Promise((resolve, reject) => {
//   resolve("Task 1 is done");
// });

// const Task2Promise = new Promise((resolve, reject) => {
//   resolve("Task 2 is done");
// });
// const Task3Promise = new Promise((resolve, reject) => {
//   resolve("Task 3 is done");
// });
// Promise.all([Task1Promise, Task2Promise, Task3Promise]).then((massage) => {
//   console.log(massage);
// });
// --===o8{async/await}8o===--

function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making Request to ${location}`);
    if (location === "google") {
      resolve("google says hi");
    } else {
      reject("we can only talk to google");
    }
  });
}
function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("processing response");
    resolve(`Extra information + ${response}`);
  });
}

// makeRequest("google")
//   .then((res) => {
//     console.log("response received");
//     return processRequest(res);
//   })
//   .then((processResponse) => {
//     console.log(processResponse);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function doWork() {
//   const response = await makeRequest("facebook");
//   console.log("response received");
//   const processResponse = await processRequest(response);
//   console.log(processResponse);
// }
// doWork();
// --===o8{Try catch throw}8o===--
async function doWork() {
  try {
    const response = await makeRequest("facebook");
    console.log("response received");
    const processResponse = await processRequest(response);
    console.log(processResponse);
  } catch (err) {
    console.log(err);
  }
}
doWork();
// --===o8{Destructuring}8o===--
const he = {
  name: "abdallah",
  age: 21,
  gender: "Male",
};

function print({ name, age }) {
  console.log(`the name is ${name} and  my age ${age}`);
}

print(he);
