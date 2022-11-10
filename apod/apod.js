// Where to pull from
const baseUrl = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

// Use the URL to fetch the current picture of the day
async function getPic(url) {
    // Get response from url
    const response = await fetch(url);
    // If ready, pull as json
    if (response.ok) {
        const data = await response.json();
        renderTemplate(data);
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

getPic(baseUrl);