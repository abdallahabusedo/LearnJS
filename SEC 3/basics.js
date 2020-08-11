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

// Second :: Logic operationsa ( === !== || && )
// === => compare type and content in both sides
// ==  => compare content only
// === (equality) !==(not equal)  || ( OR ) && ( AND )
// They are like quistions did something .... is to something? (.... => used operation)
console.log( 5 === 5)   // will return true
console.log( 5 == '5')  // will return true also
console.log( "Some" === "Thing") // will return false
x = 0 // will be crosponding to false
y = 1 // will be crosponding to true 
//Note :: Any number or variable contain something will be true
console.log(x || y) // will be true cause both conditions are  true
console.log(x && y) // will be false cause one condition is  false

///////////////////////////////////////////////////////////////////////////////////
//                                  Loops & If statements
////////////////////////////////////////////////////////////////////////////////////

// First :: IF statements 
// It's a container asking for something if it's true will do that code if not it will do nothing
if (y === 1){
    console.log("Yes,Y is equal to one")
} else {
    console.log("No,Y is something else")
}
// if u checking more than question in sequance like x = 0 ? if not check then x = 1 ? and so on u can use else if
if ( x == 1) {
    console.log("X is equal to one")
} else if (x == 0) {
    console.log("X is equal to zero")
} else {
    console.log("X is something else")
}

// Second :: Loops
// A) While loop (event loop)
// This is loop while the condition is true do this block of code 
while(x < 10) {
    x += 1 // This easy typing for x = x + 1 shortcut
}

// B) For loop (event or limited times)
// This is loop asking for 3 things intial condition or counter ; the question ; at the end do something
for(var i =0 ; i<10 ; i+=1 ){
    console.log("Inside the for loop") // this will be excuted for 10 times 
}

// Note :: we can use both break(to break the loop and get out of it) and continue (go to the next round of the loop)
var breaker = 0 
while( breaker < 10 ){
    break
    console.log("I'm still inside the loop")
    breaker+=1
}
while ( breaker < 10 ){
    breaker+=1
    continue
    console.log("I'm not going to continue")
}