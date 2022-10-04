const PI = 3.14;
const radius = 3;
let area = 0;
area = radius * radius * PI;
radius = 4;
area = radius * radius * PI;

// get age from input
const age = document.getElementById("age").value; // assume 21 was entered
// add 10 years
const agePlus10 = parseInt(age) + 10;
console.log(agePlus10);

// modify the copyInput callback to receive the event object
function copyInput(event) {
    // take a look at the event!
    console.log(event);
    const inputElement = document.getElementById("inputBox");
    const outputElement = document.getElementById("output");
    outputElement.innerHTML = inputElement.value;
  }