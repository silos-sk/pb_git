// OOP AND ES6
// EXERCISE 1
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  welcome() {
    console.log(`Welcome ${this.lastName}, ${this.firstName}`);
  }

  userStatus() {
    if (this.admin === true) {
      console.log(`This user is an admin`);
    } else {
      console.log(`This user is NOT an admin.`);
    }
  }
}

const newUser = new User("Shaira", "Silos");
newUser.welcome();

// EXERCISE 2
class Admin extends User {
  constructor() {
    super();
    this.admin = true;
  }
}

const adminUser = new Admin();
adminUser.userStatus();
newUser.userStatus();

//EXERCISE 3 - MDN
// A
class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    const perimeter = this.sideLength * this.sides;
    console.log(`This is ${this.name}'s perimeter: ${perimeter}`);
  }
}

const square1 = new Shape("square", 4, 5);
square1.calcPerimeter();

const triangle = new Shape("triangle", 3, 3);
triangle.calcPerimeter();

// B
class Square extends Shape {
  constructor(sideLength) {
    super("square", 4, sideLength);
  }

  calcArea() {
    console.log(this.name + this.sidelength * this.sidelength);
  }
}

const square2 = new Square(4);
square2.calcPerimeter();

// EXERCISE 4
class Animal {
  constructor(name, group, sound) {
    this.name = name;
    this.group = group;
    this.sound = sound;
  }

  getAnimal() {
    const message = `This is a ${this.name}, it's a ${this.group}, and it ${this.sound}.`;
    return message;
  }
}

const dog = new Animal("dog", "mammal", "barks");
const cat = new Animal("cat", "mammal", "meows");
const snake = new Animal("snake", "reptile", "psssss");
console.log(dog.getAnimal());
console.log(cat.getAnimal());
console.log(snake.getAnimal());

// EXERCISE 5
class anotherAnimal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Lion extends anotherAnimal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(`${this.name} roars`);
  }
}

const lion = new Lion("Lion");
lion.speak();

// SPREAD Operator
// EXERCISE 1
const students1 = ["dele", "max", "grzegorz"];
const students2 = ["nurulizzah", "zamil", "shaira"];
const students3 = [...students1, ...students2];
console.log(students3);

// EXERCISE 2
const myFirstName = "Krystal";
const arrName = [...myFirstName];
console.log(arrName);

// DESTRUCTURING
let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
let { numPlanets, yearNeptuneDiscovered } = facts;

console.log(numPlanets); // ?
console.log(yearNeptuneDiscovered); // ?

let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659,
};

let { numPlanets2, ...discoveryYears } = planetFacts;

console.log(discoveryYears); // ?

function getUserData({ firstName, favoriteColor = "green" }) {
  console.log(`Your name is ${firstName} and you like ${favoriteColor}`);
}

getUserData({ firstName: "Alejandro", favoriteColor: "purple" }); // ?
getUserData({ firstName: "Melissa" }); // ?
// ?
getUserData({});

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]];

console.log(numbers);

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings",
];

console.log(raindrops); // ?
console.log(whiskers); // ?
console.log(aFewOfMyFavoriteThings);

// GENERAL EXERCISES 1
function reverse(string) {
  return [...string].reverse();
}
console.log(reverse(raindrops));

// GENERAL EXERCISES 2
const div = document.createElement("div");
const p = document.querySelector("p");
const generalEx = document.querySelector(".generalEx");

const text = p.textContent.split(" ");
console.log(text);
const trimmedText = text.join("").trim("");
console.log(trimmedText);

generalEx.appendChild(div);
div.textContent = trimmedText;

// GENERAL EXERCISES 3
const numbers_arr = [];

for (i = 0; i <= 99; i++) {
  num = Math.floor(Math.random() * 1000 + 1);
  numbers_arr.push(num);
}

console.log(numbers_arr);

const initialValue = 0;

const sumWithInitial = numbers_arr.reduce(
  (prevVal, currentVal) => prevVal + currentVal,
  initialValue
);

console.log(
  `The mean of the array numbers_arr is: ${Math.round(
    sumWithInitial / numbers_arr.length
  )}`
);

const mode = function mode(arr) {
  return arr.reduce(
    function (current, item) {
      var val = (current.numMapping[item] =
        (current.numMapping[item] || 0) + 1);
      if (val > current.greatestFreq) {
        current.greatestFreq = val;
        current.mode = item;
      }
      return current;
    },
    { mode: null, greatestFreq: -Infinity, numMapping: {} }
  ).mode;
};

console.log(`The mode if the array numbers_arr is: ${mode(numbers_arr)}`);

// EXERCISE: DATE OBJECT
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
console.log(`Today's date is ${today.toLocaleDateString()}`);
console.log(`The year is ${year}`);
console.log(`The month is ${month + 1}`);

const options = { month: "long" };
console.log(new Intl.DateTimeFormat("en-US", options).format(today));
