// --==o08{What is the dom}80o==--
/**
 * The HTML DOM (Document Object Model)
 * When a web page is loaded, the browser creates a Document Object Model of the page.
 */

/**
  * JavaScript can change all the HTML elements in the page
    JavaScript can change all the HTML attributes in the page
    JavaScript can change all the CSS styles in the page
    JavaScript can remove existing HTML elements and attributes
    JavaScript can add new HTML elements and attributes
    JavaScript can react to all existing HTML events in the page
    JavaScript can create new HTML events in the page
  */

/**
   * What You Will Learn
    How to change the content of HTML elements
    How to change the style (CSS) of HTML elements
    How to react to HTML DOM events
    How to add and delete HTML elements
   */

/**
 * What is the DOM?
 * The DOM is a W3C (World Wide Web Consortium) standard.

    The DOM defines a standard for accessing documents:

    "The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document."

    The W3C DOM standard is separated into 3 different parts:

    Core DOM - standard model for all document types
    XML DOM - standard model for XML documents
    HTML DOM - standard model for HTML documents
 */

/**
  *What is the HTML DOM?
    The HTML DOM is a standard object model and programming interface for HTML. It defines:

    The HTML elements as objects
    The properties of all HTML elements
    The methods to access all HTML elements
    The events for all HTML elements
    In other words: The HTML DOM is a standard for how to get, change, add, or delete HTML elements.
  */

// get element by id
console.log(document.getElementById("page-banner"));
// get element by class
console.log(document.getElementsByClassName("title"));
// get element by tag name
console.log(document.getElementsByTagName("p"));
let classes = document.getElementsByClassName("title");
console.log(Array.isArray(classes));
console.log(Array.isArray(Array.from(classes)));
/**
 * classes.forEach((item)=>{
 *  console.log(item);
 * })
 */
Array.from(classes).forEach((item) => {
  console.log(item);
});
// Query Selector
classes = document.querySelector(".title");
console.log(classes); // why it choose just the first one

classes = document.querySelectorAll(".title");
console.log(classes);
classes.forEach((item) => {
  console.log(item);
});
// --==o08{Changing the page content}80o==--
classes.forEach((books) => {
  books.textContent += " (book title)";
});
classes = document.querySelector(".title");
classes.innerHTML = "<h2>books are important </h2>";
classes.innerHTML += "<h6>so read it </h6>";

//https://www.w3schools.com/js/js_htmldom_document.asp
// --==o08{Add element to the Dom}80o==--
const list = document.querySelector("#book-list ul");
const addForm = document.forms["add-book"];
if (addForm) {
  addForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // create elements
    const value = addForm.querySelector('input[type="text"]').value;
    const li = document.createElement("li");
    const bookName = document.createElement("span");
    const deleteBtn = document.createElement("span");

    // add text content
    bookName.textContent = value;
    deleteBtn.textContent = "delete";

    // add classes
    bookName.classList.add("name");
    deleteBtn.classList.add("delete");

    // append to DOM
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}
// --==o08{Removing element from the dom}80o==--
list.addEventListener("click", (e) => {
  if (e.target.className == "delete") {
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});
// --==o08{Changing element attributes}80o==--

// --==o08{Traversing the dom}80o==--
classes = document.querySelector(".classDemo");
console.log("parent node : ", classes.parentNode);
console.log("parent Element : ", classes.parentElement);
console.log("parent Element : ", classes.parentElement.parentElement);
console.log("child Nodes : ", classes.childNodes);

console.log("next sibling is :", classes.nextSibling);
console.log("next Element sibling is :", classes.nextElementSibling);
console.log("next sibling is :", classes.previousSibling);
console.log("previous Element sibling is :", classes.previousElementSibling);

// --==o08{Transpiring Modern JS code using babel}80o==--

// --==o08{Bundling Multiple JS files using Webpack}80o==--

// --==o08{Introduction to package management NPM}80o==--

// --==o08{Initializing npm project}80o==--

// --==o08{Npm packages}80o==--

// --==o08{package.json}80o==--

// --==o08{require and import}80o==--

// --==o08{Local storage}80o==--
