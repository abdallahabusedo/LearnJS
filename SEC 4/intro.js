/**
 * We first learn HTML then CSS and now time to learn JS (JavaScript)
 * Websites are like a building
 * HTML => is the structure to this building
 * CSS  => is the beauty of this building
 * JS   => is life in this building
 */

/////////////////////////////////////////////////////////////////////
//                          INTRODUCTION
/////////////////////////////////////////////////////////////////////

// 1- Hello world app is the start to any new coding language

// Console is the place where the javascript is done and show errors and msgs
// you can see it inside the terminal using VScode press shift + `
console.log("Hello world");

// 2 Hello world inside a HTML file with JS
// this is DOM we will study it along this course but for now we can put something to see through JS in our HTML
document.getElementById("demo").innerHTML = "Hello world!";

// 3- Style out elements using DOM
// We can use selectors also to change the style for this specific ID , class and tags
// ex:
// Change size of text
document.getElementById("demo").style.fontSize = "35px";
// Change color of text
document.getElementById("demo").style.color = "red";

// The important question here where we can put our JS code ??!
// There is 2 places like we do in CSS we can put it in our script tag inside the HTML it self
// Or we can put it in separated file alone and include it inside the HTML tag

// Hope you enjoy our intro ;)