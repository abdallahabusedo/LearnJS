//Where to put the js
// https://www.youtube.com/watch?v=upDLs1sn7g4

// Hello world

console.log("Hello world");

// 1- innerHTML (DOM) way
document.getElementById("basics").innerHTML = 7 + 6;
// 2- document.write()
document.write("I am document.write()");
// 3- In the console
console.log("Hello from the console");
// 4- In alert massage
window.alert("I am alert");

// First :: variables (var)
var x = 5; // then x => is 5  (int)
var y = "Hi"; // then y => is Hi (string)
var z = 2.5 * 4; // then z => is 10 (float)

// to see them we can use console
console.log("Here is the x, y and z :");
console.log(x);
console.log(y);
console.log(z);

// Second :: Arrays
// they are the same as above but it's queue of variables
var arr = [5, 1, 2, 3, 10];
// array is defined by square practise and it's index is start from 0
console.log("Here the array elements:");
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

// Third :: Boolen
// They are as question which its answer is always yes or no
var bool = true;
console.log("Boolen variables :");
console.log(bool);

// Forth :: Objects
// They as a collection of things
var object = {
  name: "Sedo",
  age: 21,
  email: "example@example.com",
};
console.log("Object example: ");
console.log(object);

// ASI Automatic semicolon insertion
const monthlyRent = 500;
// no spaces
console.log("monthlyRent", monthlyRent);
// we can't say then  monthlyRent = 600;
const yearlyRent = monthlyRent * 12;
console.log("yearlyRent", yearlyRent);
// camel case

// cant Say const const = 5;
/**
 * go to the console and try to write these lines
 * x=5
 * 5*25
 * console.log(5)
 */

/** Numbers Strings and booleans  */

const myName = "Abdallah abu sedo";
const myName3 = `Abdallah abu sedo`;

console.log("myName", myName);

const firstName = "Abdallah";
const lastName = "Abusedo";

const fullName = "Hello " + firstName + " " + lastName + " ! How are u ";
const fullName2 = `Hello ${firstName} ${lastName} ! How are u `;

console.log("fullName", fullName);
console.log("fullName2", fullName2);

///////////////////////////////////////////////////////////////////////////////////
//                                  OPERATIONS
///////////////////////////////////////////////////////////////////////////////////

// First :: Maths operations ( + - * / % )
// Plus
console.log("Math operations :");
console.log(5 + 6);
// Minus
console.log(5 - 3);
// Multiply
console.log(5 * 20);
// Divide
console.log(20 / 4);
// Modulus (it's operation will give u the reminder in fraction division 20%2 = 0  but 21%2 = 1)
console.log(20 % 2);
console.log(21 % 2);
console.log(20 % 2);
console.log(21 % 2);

// Second :: Logic operationsa ( === !== || && )
// === => compare type and content in both sides
// ==  => compare content only
// === (equality) !==(not equal)  || ( OR ) && ( AND )
// They are like quistions did something .... is to something? (.... => used operation)
console.log(5 === 5); // will return true
console.log(5 == "5"); // will return true also
console.log("Some" === "Thing"); // will return false
x = 0; // will be crosponding to false
y = 1; // will be crosponding to true
//Note :: Any number or variable contain something will be true
console.log(x || y); // will be true cause both conditions are  true
console.log(x && y); // will be false cause one condition is  false

// comments ot /** */
const lightIsOn = true;

// Control Flow

const skyIsBkue = true;
const cubeFaces = 6;
if (skyIsBkue === true) {
  console.log("Sky is blue ");
} else {
  console.log("Sky is yallow");
}

/**oooooooooooooooor  */

skyIsBkue ? console.log("Sky is blue ") : console.log("Sky is yallow");

// this is called coercion
if (cubeFaces == "6") {
  console.log("Yes ");
} else {
  console.log("No");
}

const blue = "yallow";
// ligature
if (blue === "blue") {
  console.log("blue");
} else if (blue === "green") {
  console.log("green");
} else if (blue == " yallow") {
  console.log("yallow");
}

/// loooooooooops

let myFriendsNum = 0;
while (myFriendsNum < 10) {
  myFriendsNum++; // this is equal to myFriendsNum = myFriendsNum +1 or myFriendsNum+=1
}
console.log(myFriendsNum);

let counter = 0;
for (let i = 0; i <= 10; i++) {
  counter++;
}
console.log(counter);

// Note :: we can use both break(to break the loop and get out of it) and continue (go to the next round of the loop)
var breaker = 0;
while (breaker < 10) {
  break;
  console.log("I'm still inside the loop");
  breaker += 1;
}
while (breaker < 10) {
  breaker += 1;
  continue;
  console.log("I'm not going to continue");
}
