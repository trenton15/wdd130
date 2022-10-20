// Declare array
const steps = ["one", "two", "three"];
// Use array and place in HTML format
function listItemTemplate(item) {
  return `<li>${item}</li>`;
}
// Take the function and add to an array
const htmlStrings = steps.map(listItemTemplate);
// Get HTML Element
const listElement = document.querySelector('#myList');
// Put the array from map together with no commas
const html = htmlStrings.join("");
// Add joined array to HTML element
listElement.innerHTML = html;

// Declare array of grades
const grades = ["A", "B", "C"];
// callback declaration
function convertGradeToPoint(grade) {
// Declare points variable as 0
  let points = 0;
// Use if statements for each possible letter grades and assign point values
  if (grade === "A"){
    points = 4;
  }
  else if (grade === "B"){
    points = 3;
  }
  else if (grade === "C"){
    points = 2;
  }
  else if (grade == "D"){
    points = 1;
  }
// Return defined point values for grade as defined in if statements
  return points;
}
const gpaPoints = grades.map(convertGradeToPoint);
const gradeListElement = document.querySelector('#gradeList');
const gpa = gpaPoints.join("");
gradeListElement.innerHTML = gpa;

// Using grades from above
function sumPoints(total, current){
  return total + current;
}
const average = gpaPoints.reduce(sumPoints, 0) / gpaPoints.length;
console.log(average);

// Filter words in the array with less than 6 charaters
const fruits = ["watermelon", "peach", "apple", "tomato", "grape"];
function lessThanSix(word){
  return word.length >= 6;
}
const fruit = lessThanSix;
console.log(fruit);

// Find the index of an object in the array
const numbers = [12, 34, 21, 54];
const luckyNumber = 21;
const index = numbers.indexOf(luckyNumber);
console.log(index);