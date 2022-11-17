/*
    fetch quote
    output quote html template
*/
const baseURL="https://api.quotable.io/";

function quoteTemplate(quote) {
    return `<section class="quote">
    <p><span class="quote-mark">&ldquo;</span>${quote.content}<span class="quote-mark">&rdquo;</span></p>
    <p class="author">-${quote.author}</p></section>`;
}

async function getQuote(url) {
    try {
    const response = await fetch(url + "random");
    // If the response comes back then convert to json
    if(response.ok) {
        // convert to json
        const data = await response.json();
        return data;
    }
 } catch (error) {
     console.log(error);
 }
}

export default async function renderQuote(selector) {
    const quote = await getQuote(baseURL);
    const element = document.querySelector(selector);
    const html = quoteTemplate(quote);
    element.innerHTML = html;
    console.log(quote);
}