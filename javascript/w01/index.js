// let age = 33;
// console.log(age);

// // Exercise 2
// let numberOfRabbits = 2;
// numberOfRabbits = 3 * numberOfRabbits;
// console.log(numberOfRabbits);

// // STRING Exercise
// const myCountry = "Philippines";
// console.log(myCountry.length);

// // UpperCase
// const favouriteFood = "shrimp";
// console.log(favouriteFood.toUpperCase());

// // Concatenation
// const myName = "Shaira";
// let myAge = 33;
// let message = `Hello, my name is ${myName} and I am ${myAge} years old.`;
// console.log("What is your name?" + "\n" + message);

// // Template Literals
// const firstName = "Krystal";
// const lastName = "Silos";
// console.log(`Welcome ${firstName} ${lastName} \nHow can I help you?`);

// // Find and Replace
// function findAndReplace(text, find, replace) {
//   let replacedText = text.replace(find, replace);
//   console.log(replacedText);
// }

// findAndReplace("Hi, how are you?", "Hi", "Hello");

// If-else

const password = "asdewjgas";

// if (password.length >7 ){
//     console.log(true);
// } else {
//     console.log(false)
// }

// const height = parseInt(prompt("What is your height in cm?"))
//     if(typeof height === Number){
//         if (height >= 150){
//             console.log("You can go on a ride.");
//         } else {
//             console.log("Sorry, you are not tall enough")
//         }
//     } else {
//         console.log("Please enter a number")
//     }

// let dice1 = Math.floor(Math.random()*6)+1;
// let dice2 = Math.floor(Math.random()*6)+1;
// let result;
// console.log(dice1);
// console.log(dice2);

// if (dice1 === 6 && dice2 === 6){
//     result = "You win a top price: a bear"
// } else if (dice1 === dice2){
//     result = "You in three free throws"
// } else if ((dice1 + dice2) % 2 === 0){
//     result = "You get a free throw";
// } else {
//     result = "You lose the game";
// }

// console.log(result);
// alert(`You threw ${dice1} and ${dice2}. ${result}`);

// EXERCISE 2
// function quadrupler(number) {
//   return number * 4;
// }

// console.log(quadrupler(5));

// // EXERCISE 3
// function welcome(firstName, lastName) {
//   return `Hello ${firstName.toLowerCase()} ${lastName.toUpperCase()}, how can I help you?`;
// }

// console.log(welcome("Shaira", "Silos"));

// EXERCISE 4
// function temperatureConverter(fahrenheit){
//     const celsius = (fahrenheit - 32) * 5/9
//     return Math.floor(celsius)
// }

// console.log(temperatureConverter(100))

// EXERCISE 5
// const myAge1 = 33

// ARRAYS LESSON - SLIDE 24
// FOREACH EXERCISE 1

const favouriteFoods = ["shrimp", "chiken", "muffin"];
favouriteFoods.forEach((item, index) => {
  console.log(`${index} : ${item}`);
});

// FOREACH EXERCISE 2

const numArray = [5, 9, 12, 13, 7];

function sum(arr) {
  let total = 0;
 arr.forEach(item => {
    total += item;
    return total
 })
 console.log(total)
}

sum(numArray)

// FOREACH EXERCISE 3
function product(arr){
    let total = 1;
    arr.forEach(item => {
        total *= item; 
     })
     return total
}

console.log(product(numArray))

//FOREACH EXERCISE 4
const studentGrades = [70, 20, 53, 64, 78, 60, 320
]

const filteredGrades = studentGrades.filter(item => item > 50)
console.log(filteredGrades)

// MAP EXERCISE 1
const kmArr = [100, 23, 50, 33, 60]

const toMiles = arr => arr.map(num => num * 0.621371)

console.log(toMiles(kmArr))

// MAP/FILTER EXERCISE 2
const inputArray = ["18", "27", 19, 21, "22", NaN, undefined]

const filteredAges = inputArray.filter(item => Number(item)).map(item => Number(item))

console.log(filteredAges)