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