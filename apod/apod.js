// Where to pull from
const apodUrl = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

// Use the URL to fetch the current picture of the day
async function getApod(url) {
    // Get response from url
    const response = await fetch(url);
    // If ready, pull as json
    if (response.ok) {
        // success...make sure any previous error message is gone.
        hideError();
        //return the data
        const data = await response.json();
        console.log(data);
        renderTemplate(data);
    }
    else {
        // error...output the message returned by the server
        showError(Error)
        // return false to show that something went wrong
        return false;
    }
}

// Create html photoTemplate
function photoTemplate(photo) {
    return `<section class="photo">
        <img src=${photo.url} alt="${photo.title}">
        <div>
            <h2>${photo.title}</h2>
            <h3>${photo.date}</h3>
            <p>${photo.explanation}</p>
        </div>
    </section>`;
}

// Insert information into html using photoTemplate
function renderTemplate(data) {
    // Get element
    const element = document.querySelector('#pod');
    // Build html string
    const html = photoTemplate(data)
    // Insert html into element
    element.innerHTML = html;
}

function getApodByDate(apodUrl) {
    // Get value from input
    const date = document.querySelector("#date").value;
    console.log(date);
    // Append value from input to url
    return apodUrl = apodUrl + `&date=${date.value}`;
}


const el = document.querySelector('submit');
if(el){
    el.addEventListener('click', getApodByDate);
}

function showError(msg) {
    //get the error element
    document.querySelector('error');
    //set the content of the element to the msg
    
    // remove the hide class
    classList.remove('hide');
}
function hideError() {
    //get the error element
    document.querySelector('error');
    // clear out the content of the element
    
    // add the hide class
    classList.add('hide');
}

getApod(apodUrl);