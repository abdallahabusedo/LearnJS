function MyFunction() {
    /**the function  */
}

/**
 * <div class="button-container">
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
        .then(function(response) {
            const processingPromise = response.json();
            return processingPromise;
        })
        .then(function(processedResponse) {
            const img = document.createElement("img");
            img.src = processedResponse.message;
            console.log(processedResponse.message);
            img.alt = "Cute doggo";

            dogs.appendChild(img);
        });
}

document.getElementById("AddDog").addEventListener("click", addNewDoggo);

/**
 *
S5 (JS - III)
Intro to objects
Creating new js object
This keyword
constructor functions
The data objects
Arrow functions
Classes
Promises
async/await
Try catch throw
Destructuring
Task 7 Make a timer
 */
/**
 * https://www.w3schools.com/js/js_objects.asp
 * https://www.w3schools.com/js/js_events.asp
 * https://www.w3schools.com/js/js_math.asp
 * https://www.w3schools.com/js/js_random.asp
 * https://www.w3schools.com/js/js_switch.asp
 * https://www.w3schools.com/js/js_this.asp
 * https://www.w3schools.com/js/js_arrow_function.asp
 * https://www.w3schools.com/js/js_object_classes.asp
 * https://www.w3schools.com/js/js_errors.asp
 */