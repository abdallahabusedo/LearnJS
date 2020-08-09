/**
 * Here we will learn the basics of Javascript as programming language
*/  

// First how to output something in JS 
// We have 4 ways to output something in JS
// 1- innerHTML (DOM) way
document.getElementById('basics').innerHTML = 7 + 6
// 2- document.write()
document.write("I am document.write()")
// 3- In the console 
console.log("Hello from the console")
// 4- In alert massage
window.alert("I am alert")

/**
 * We can now start to learn the basics operations of JS using our console for now
 */

///////////////////////////////////////////////////////////////////////////////////
//                                  VARIABLES
///////////////////////////////////////////////////////////////////////////////////

// First :: variables (var)
var x = 5      // then x => is 5  (int)
var y = "Hi"   // then y => is Hi (string)
var z = 2.5*4  // then z => is 10 (float) 

// to see them we can use console
console.log("Here is the x, y and z :")
console.log(x)
console.log(y)
console.log(z)

// Second :: Arrays
// they are the same as above but it's queue of variables
var arr = [5,1,2,3,10]
// array is defined by square practise and it's index is start from 0 
console.log("Here the array elements:")
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])

// Third :: Boolen
// They are as question which its answer is always yes or no 
var bool = true
console.log("Boolen variables :")
console.log(bool)

// Forth :: Objects 
// They as a collection of things 
var object = {
    name: "Sedo",
    age: 21 ,
    email: 'example@example.com'
}
console.log("Object example: ")
console.log(object)

///////////////////////////////////////////////////////////////////////////////////
//                                  OPERATIONS
///////////////////////////////////////////////////////////////////////////////////

// First :: Maths operations ( + - * / % )
// Plus
console.log("Math operations :")
console.log( 5 + 6 )
// Minus
console.log( 5- 3 )
// Multiply
console.log( 5 * 20 )
// Divide 
console.log( 20/4 )
// Modulus (it's operation will give u the reminder in fraction division 20%2 = 0  but 21%2 = 1)
console.log( 20%2 )  
console.log( 21%2 ) 


