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

// Insert HTML into form
function participantTemplate(participantCount) {
    return `<section class="participant${participantCount}">
    <p>Participant ${participantCount}</p>
    <div class="item">
      <label for="fname"> First Name<span>*</span></label>
      <input id="fname" type="text" name="fname" value="" required="">
    </div>
    <div class="item activities">
      <label for="activity">Activity #<span>*</span></label>
      <input id="activity" type="text" name="activity">
    </div>
    <div class="item">
      <label for="fee">Fee ($)<span>*</span></label>
      <input id="fee" type="number" name="fee">
    </div>
    <div class="item">
      <label for="date">Desired Date <span>*</span></label>
      <input id="date" type="date" name="date">
    </div>
    <div class="item">
      <p>Grade</p>
      <select>
        <option selected="" value="" disabled=""></option>
        <option value="1">1st</option>
        <option value="2">2nd</option>
        <option value="3">3rd</option>
        <option value="4">4th</option>
        <option value="5">5th</option>
        <option value="6">6th</option>
        <option value="7">7th</option>
        <option value="8">8th</option>
        <option value="9">9th</option>
        <option value="10">10th</option>
        <option value="11">11th</option>
        <option value="12">12th</option>
      </select>
    </div>
  </section>`
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

// Calculate the tootal fee by summing each participant fee
function totalFees() {
    // the selector below lets us grab any element that has an id that begins with "fee"
    let feeElements = document.querySelectorAll("[id^=fee]");
    console.log(feeElements);
    // querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
    // The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
    // The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
    feeElements = [...feeElements];
    // sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
    sum = feeElements.reduce((total, item)=>total + parseFloat(item.value),0);
    // once you have your total make sure to return it!
    return sum;
}

// Build the success template to show the user
function successTemplate (info) {
    return`<p>Thank you ${info.adultName} for registering. You have registered ${info.numberOfParticipants} participants and owe $${info.feeTotal} in fees.</p>`
}

// Show the successTemplate
function renderSuccessTemplate(info) {
    const htmlTemplate = successTemplate(info);
    // add the successTemplate before the end of the #summary id
    document.querySelector("#summary").insertAdjacentHTML("beforeend", htmlTemplate);
}