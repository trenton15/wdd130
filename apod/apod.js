const apodUrl = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

// Use the URL to fetch the current picture of the day
async function getApod(apodUrl) {
    const response = fetch(apodUrl)
    console.log(response)
}

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

getApod(apodUrl);