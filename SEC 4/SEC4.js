// |--==========<o8{JS - I}8o>==========--|
console.log("|--==========<o8{JS - I}8o>==========--|");
/*
 * We first learn HTML then CSS and now time to learn JS (JavaScript)
 * Websites are like a building
 * HTML => is the structure to this building
 * CSS  => is the beauty of this building
 * JS   => is life in this building
 */
// |--==========<o8{Where to put the js}8o>==========--|
console.log("|--==========<o8{Where to put the js}8o>==========--|");
//|--==========<o8{Hello world}8o>==========--|
console.log("|--==========<o8{Hello world}8o>==========--|");
console.log("Hello World Abdallah");
document.getElementById("demo").innerHTML = "Hello World Abdallah";
document.querySelector(".Demos").innerHTML = "New Hello";

function doa() {
  document.querySelector(".Demos").style.fontSize = "20px";
  document.querySelector(".Demos").style.color = "red";
}
// |--==========<o8{Google dev tools}8o>==========--|
console.log("|--==========<o8{Google dev tools}8o>==========--|");

// |--==========<o8{Basic syntax}8o>==========--|
console.log("|--==========<o8{Basic syntax}8o>==========--|");
const pi = 3.1415;

// |--==========<o8{Js vars}8o>==========--|
console.log("|--==========<o8{Js vars}8o>==========--|");
var int = 5;
var float = 5.5;
var string = "this is a string ";
console.log("int", int, "float", float, "String", string);
console.log("pi", pi);
// |--==========<o8{Basic math operations}8o>==========--|
console.log("|--==========<o8{Basic math operations}8o>==========--|");
let x = 5;
let y = 9;
console.log("x + y", x + y);
console.log("x - y", x - y);
console.log("x * y", x * y);
console.log("y / x", y / x);
console.log("y % x", y % x);
//|--==========<o8{Math shortcuts}8o>==========--|
console.log("|--==========<o8{Math shortcuts}8o>==========--|");
//(1) i++
//(2) ++i
//(3) i--
//(4) i--
//(5) i+=1
//(6) i-=1
//(7) i*=2
//(8) i/=2
//(9) i**5
console.log("5 ** 2", 5 ** 2);
// |--==========<o8{Booleans}8o>==========--|
console.log("|--==========<o8{Booleans}8o>==========--|");
let isTrue = false;
let isFalse = true;
console.log(isTrue);
console.log(isFalse);
// |--==========<o8{If & if else}8o>==========--|
console.log("|--==========<o8{If & if else}8o>==========--|");
if (isTrue === true) {
  console.log("is true");
} else {
  console.log("is false");
}
x = 50;
if (x < 100) {
  console.log("X is Small");
} else if (x > 100) {
  console.log("X is big");
} else {
  console.log("X is 50");
}
// |--==========<o8{Comparing operation}8o>==========--|
console.log("|--==========<o8{Comparing operation}8o>==========--|");
//https://github.com/tonsky/FiraCode
let Compar = 5;
//(1) ==  equal to{Compar == 8 false} {Compar == 5 true} {Compar == "5" true}
//(2) === equal value and equal type{Compar === 5 true} {Compar === "5" false}
//(3) !=  not equal{Compar != 8 true}
//(4) !== {Compar !== 5 false}{Compar !== "5" true}{Compar !== 8 true}
//(5) >   {Compar > 8 false}
//(6) <   {Compar < 8 true}
//(7) >=  {Compar >= 8 false}
//(8) <=  {Compar <= 8 true}
// |--==========<o8{Logical operation}8o>==========--|
console.log("|--==========<o8{Logical operation}8o>==========--|");
let Logical = 6;
let Logical2 = 3;
//(1) &&
//(2) ||
//(3) !

// |--==========<o8{Conditional (Ternary) Operator}8o>==========--|
console.log("|--==========<o8{Conditional (Ternary) Operator}8o>==========--|");
let condition = true;
condition ? "if it is true" : "if it is false";
// |--==========<o8{While loop}8o>==========--|
console.log("|--==========<o8{While loop}8o>==========--|");
let i = 10;
while (i >= 0) {
  console.log(`this is round num # ${i}`);
  i--;
}
// |--==========<o8{For loop}8o>==========--|
console.log("|--==========<o8{For loop}8o>==========--|");
for (let y = 0; y < 5; y++) {
  console.log(y);
}
// |--==========<o8{Break and continue}8o>==========--|
console.log("|--==========<o8{Break and continue}8o>==========--|");
let B = 0;
// The break statement "jumps out" of a loop.
for (i = 0; i < 10; i++) {
  B++;
  break;
  console.log("i'm here ");
}
console.log("B:", B);
// The continue statement "jumps over" one iteration in the loop.
for (i = 0; i < 10; i++) {
  B++;
  continue;
  console.log("i'm not here ");
}
console.log("B:", B);

// |--==========<o8{Functions}8o>==========--|
console.log("|--==========<o8{Functions}8o>==========--|");
/**
 * A JavaScript function is a block of code designed to perform a particular task.
 * A JavaScript function is a block of code designed to perform a particular task.
 */
function Multiplication(p1, p2) {
  return p1 * p2; // The function returns the product of p1 and p2
}
console.log(Multiplication(5, 6));

function Do() {
  let M = Multiplication(5, 6);
  return M / 2;
}
console.log(Do());
//|--==========<o8{scoops}8o>==========--|
console.log("|--==========<o8{scoops}8o>==========--|");

//Scope determines the accessibility (visibility) of variables.
/**
 * In JavaScript there are two types of scope:
    - Local scope
    - Global scope
 */
// Example Local Scope

function addFive(number) {
  const someVariable = "you can't see me outside this function";
  console.log(someVariable);
  return number + 5;
}

addFive(10);
//console.log(someVariable);

// Example Global scope
let friendsAtYourParty = 0;
for (let k = 0; k <= 10; k++) {
  friendsAtYourParty++;
}
// console.log(k);
console.log(friendsAtYourParty);

// Question
/**
 * const A = "A";
let F;
const G ;

function doStuff(B) {
  console.log(B);
  const C = "C";
  let H = "H";
  if (1 + 1 === 2) {
    const D = "D";
    H = "something else";
  }
  console.log(D);
  console.log(H);
  F = "F";
}

let E = 0;
while (E < 3) {
  E++;
  console.log(A);
  const G = "G";
}
console.log(E);
console.log(G);

doStuff("B");
console.log(B);
console.log(C);
console.log(F);
 */
//JavaScript has function scope: Each function creates a new scope.
// |--==========<o8{Numbers}8o>==========--|
console.log("|--==========<o8{Numbers}8o>==========--|");
let x0 = 3.14; // A number with decimals
console.log("x0", x0);
let y0 = 3; // A number without decimals
console.log("y0", y0);
let x1 = 123e5; // 12300000
console.log("x1", x1);
let y1 = 123e-5; // 0.00123
console.log("y1", y1);
let x2 = 999999999999999; // x will be 999999999999999
console.log("x2", x2);
let y2 = 9999999999999999; // y will be 10000000000000000
console.log("y2", y2);
let x3 = 0.2 + 0.1; // x will be 0.30000000000000004
console.log("x3", x3);
let x4 = (0.2 * 10 + 0.1 * 10) / 10; // x will be 0.3
console.log("x4", x4);
//Adding Numbers and Strings
//JavaScript uses the + operator for both addition and concatenation Numbers are added. Strings are concatenated.
let x5 = 10;
let y5 = 20;
let z5 = x5 + y5; // z will be 30 (a number)
console.log("z5", z5);
let x6 = "10";
let y6 = "20";
let z6 = x6 + y6; // z will be 1020 (a string)
console.log("z6", z6);
let x7 = 10;
let y7 = "20";
let z7 = x7 + y7; // z will be 1020 (a string)
console.log("z7", z7);
let x8 = "10";
let y8 = 20;
let z8 = x8 + y8; // z will be 1020 (a string)
console.log("z8", z8);
let x9 = 10;
let y9 = 20;
let z9 = "The result is: " + x9 + y9;
console.log("z9", z9);
let x10 = 10;
let y10 = 20;
let z10 = "30";
let result = x10 + y10 + z10;
console.log("result", result);
//JavaScript strings can have numeric content:
let x11 = "100";
let y11 = "10";
let z11 = x / y; // z will be 10
console.log("z11", z11);
let x12 = "100";
let y12 = "10";
let z12 = x * y; // z will be 1000
console.log("z12", z12);
let x13 = "100";
let y13 = "10";
let z13 = x - y; // z will be 90
console.log("z13", z13);
// |--==========<o8{NAN}8o>==========--|
console.log("|--==========<o8{NAN}8o>==========--|");
// NaN is a JavaScript reserved word indicating that a number is not a legal number.
let NanEX = 100 / "Apple"; // x will be NaN (Not a Number)
console.log("NAN", NanEX);

isNaN(NanEX);
console.log("isNaN(NanEX)", isNaN(NanEX));

//Infinity
let InfinityNum = 2;
while (InfinityNum != Infinity) {
  // Execute until Infinity
  InfinityNum = InfinityNum * InfinityNum;
  console.log(InfinityNum);
}
let x22 = 2 / 0; // x will be Infinity
console.log(x22);
let y22 = -2 / 0;
console.log(y22); // y will be -Infinity
let Num1 = 32;
console.log(Num1.toString());

//Search task Can the Number be Object
// |--==========<o8{Strings & Slice and Split string}8o>==========--|
console.log(
  " |--==========<o8{Strings & Slice and Split string}8o>==========--|"
);
let Str = "this is a String";
let StrLength = Str.length;
console.log(StrLength);
/**
 *
\b	Backspace
\n	New Line
 */
Str = "this is \b a \n String";
console.log(Str);
//The indexOf() method returns the index of(the position of) the first occurrence of a specified text in a string:
let pos = Str.indexOf("ing");
console.log("pos", pos);
//The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
let pos2 = Str.lastIndexOf("ing");
console.log("pos2");
// Both methods accept a second parameter as the starting position for the search:
/**
 * slice(start, end)
 * substring(start, end)
 * substr(start, length)
 */
//slice() extracts a part of a string and returns the extracted part in a new string.
let Str2 = "Apple, Banana, Kiwi";
let res2 = Str2.slice(7, 13);
console.log("res2", res2);
// he difference is that substring() cannot accept negative indexes
var res3 = Str2.substring(7, 13);
console.log("res3", res3);
//substr() is similar to slice(). The difference is that the second parameter specifies the length of the extracted part.
var res4 = Str2.substr(7, 6);
console.log("res4", res4);
//The replace() method replaces a specified value with another value in a string:
Str = "Please visit Microsoft!";
let n = Str.replace("Microsoft", "W3Schools");
console.log("n", n);

//Converting to Upper and Lower Case
/**
 *A string is converted to upper case with toUpperCase():
 *A string is converted to lower case with toLowerCase():
 */

/**
  * String.trim()
    The trim() method removes whitespace from both sides of a string:
  */
// |--==========<o8{Array}8o>==========--|
console.log("|--==========<o8{Array}8o>==========--|");
let cars = ["Saab", "Volvo", "BMW"];
console.log(cars);
let cars2 = new Array("Saab", "Volvo", "BMW");

//Changing an Array Element
cars[0] = "Mini coper";
console.log(cars);
cars[2] = 5;
console.log(cars);
console.log(cars.length);
let numbersArray = [5, 2, 6, 9, 8, 1, 3, 4, 7];
console.log(numbersArray.sort());

//Looping Array Elements
let fruits, fLen;
fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;

for (let t = 0; t < fLen; t++) {
  fruits[t] += " is  " + fruits[t] + "s";
}
console.log(fruits);
//You can also use the Array.forEach() function:
const array1 = ["a", "b", "c"];

array1.forEach((element) => console.log((element += 5)));
array1.push("d5");
console.log(array1);
array1[10] = "f5";
console.log(array1);
fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
document.getElementById("demo").innerHTML = fruits.join(" * ");
fruits.pop(); // Removes the last element ("Mango") from fruits
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift("Lemon");
console.log(fruits);
delete fruits[0];

//JavaScript Array Iteration Methods
//Array.map()
let numbers1 = [45, 4, 9, 16, 25];
let numbers2 = numbers1.map(function myFunction(value) {
  return value * 2;
});

console.log(numbers2);
//The map() method does not change the original array.

//Array.filter()
//The filter() method creates a new array with array elements that passes a test.
let over18 = numbers1.filter(function myFunction(value) {
  return value > 18;
});
console.log(over18);

//Array.reduce();
//The reduce() method runs a function on each array element to produce (reduce it to) a single value.

let sum = numbers1.reduce(function myFunction(total, value) {
  return total + value;
});
console.log(sum);

/**Note that the function takes 4 arguments:

The total (the initial value / previously returned value)
The item value
The item index
The array itself */
// |--==========<o8{Task 4 Start to make the Calculator}8o>==========--|
