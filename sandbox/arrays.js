// example 1
const steps = ["one", "two", "three"];
// callback declaration
function listItemTemplate(item) {
  return `<li>${item}</li>`;
}

const htmlStrings = steps.map(listItemTemplate);
const listElement = document.querySelector('#myList');
const html = htmlStrings.join("");
listElement.innerHTML = html;

// example 2
// is the luckyNumber in the list?
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = -1;
myArray.forEach(function (item, index) {
  if (item === luckyNumber) {
    luckyIndex = index;
  }
});