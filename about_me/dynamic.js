// Favorite Foods
const favoriteFoods = ["Seafood", " Cookies", " Ice-cream"];
const foodList = document.createElement('p');
foodList.textContent = `Favorite Foods: ${favoriteFoods}`;
document.body.appendChild(foodList);
favoriteFoods.shift();
foodList.textContent = `Favorite Foods2:  ${favoriteFoods}`;
favoriteFoods.push(" Sandwiches");
foodList.textContent = `Favorite Foods3:  ${favoriteFoods}`;

// Todays Date
const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
const today = new Date();
console.log(today);
const day = today.getDay()
console.log(day);
const theDay = document.querySelector('#displayToday');
theDay.textContent = weekday[day];