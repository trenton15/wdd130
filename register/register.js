// import templates form Template.js
import {participantTemplate, successTemplate} from "./Template.js";
// ADD PARTICIPANT BUTTON
// set the count variable
let participantCount = 1;

// Event Listener for when the participant button is clicked
document.querySelector("#add").addEventListener("click", renderParticipant);

// count number of participants
function renderParticipant() {
    participantCount += 1
    const htmlParticipant = participantTemplate(participantCount);
    document.querySelector("#add").insertAdjacentHTML("beforebegin", htmlParticipant);
}

// SUBMIT BUTTON
// Event Listener for when the submit button is clicked
document.querySelector("#submitButton").addEventListener("click", submitForm);

// actions to take when the submit button is clicked
function submitForm(event) {
    // keep the page from reloading
    event.preventDefault();
    // create an odject to hold the items to be used in the successTemplate
    const info = {
        adultName: document.querySelector("#adult_name").value,
        numberOfParticipants: participantCount,
        feeTotal: totalFees()
    }
    // remove the form so that only the successTemplate is displayed
    document.querySelector("form").style.display = "none";
    // call the function to display the successTemplate
    renderSuccessTemplate(info)
}

// Calculate the total fee by summing each participant fee
function totalFees() {
    // the selector below lets us grab any element that has an id that begins with "fee"
    let feeElements = document.querySelectorAll("[id^=fee]");
    // querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
    // The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
    // The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
    feeElements = [...feeElements];
    console.log(feeElements)
    // sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
    const sum = feeElements.reduce((total, item)=>total + parseFloat(item.value),0);
    // once you have your total make sure to return it!
    return sum;
}

// Show the successTemplate
function renderSuccessTemplate(info) {
    const htmlTemplate = successTemplate(info);
    // add the successTemplate before the end of the #summary id
    document.querySelector("#summary").insertAdjacentHTML("beforeend", htmlTemplate);
}