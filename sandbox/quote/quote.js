import renderQuote from "./RandomQuote.mjs";

renderQuote("#quoteContainer");

// add button to html
// add a listener to button: click
// when clicked: get new quote, render the new quote

document.querySelector('.get-quote').addEventListener('click', function(e) {
    renderQuote('#quoteContainer')
});