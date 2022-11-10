// 1 - Create a function called probability that returns a promise.​

// 2 - The function should resolve(‘Higher probability’) if Math.random() > 0.5, and reject(‘Lower Probability’) if lesser than 0.5. ​

// 3 – Use then, catch and finally (‘Thank you for participating’) to console log the values gotten from the function.​

// const probability = new Promise((resolve, reject) => {
//   if (Math.random() > 0.5) {
//     resolve("Higher Probability");
//   } else {
//     reject("Lower Probability");
//   }
// });

// probability
//   .then(console.log("Yes"))
//   .catch("No")
//   .finally(console.log("Thank you for participating"));

// FETCH EXERCISE
//   1 – Use fetch to call the endpoint (https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json​

// )​

// 2 – Use innerHTML to display the prices that are greater than 1.​

// const fetchData = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json​");
// let prices = [];
// let para = document.querySelector("p");
// fetchData.then((response) => {
//   const jsonPromise = response.json();

//   jsonPromise.then((json) => {
//     prices = json;

//     prices.forEach((e) => {
//       para.innerHTML += `<ol>${e.price}</ol>`;
//     });
//   });
// });

// const url = fetch("");

// url.then((res) =>{
//     const jsonRes = res.json();

//     jsonRes.then((json) =>{
//         parseFloat.innerHTML = `<h2>The current weather is ${json.name} is ${json.main.temp}</h2>`
//     }.catch((err)=>{
//         parseFloat.innerHTML = `Please enter a location
//         `
//     })

//WEATHER API

const weatherBtn = document.querySelector("#getWeather");
const p = document.querySelector("p");
weatherBtn.addEventListener("click", getWeather);

function getWeather(e) {
  e.preventDefault();
  const apiKey = "6a8e47c47709fc9a90e95c0d8af1e420";
  const loc = document.getElementById("loc").value;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`
  ).then((res) => {
    const jsonRes = res.json();
    jsonRes
      .then((json) => {
        const temp = json.main.temp;
        displayData(loc, toCelsius(temp));
      })
      .catch(() => {
        p.innerHTML = "<span class='warning'>!</span>Location does NOT exist";
      });
    // } else {
    //   p.innerHTML = "<span class='warning'>!</span>Location does NOT exist";
    // }
  });

  function displayData(location, data) {
    const loc = document.getElementById("loc");
    p.innerHTML = `The current temperature in <b>${location.toUpperCase()}</b> is <b>${data.toFixed()}&#8451</b>.`;
    resetInput(loc);
    loc.focus();
  }

  function toCelsius(kelvin) {
    const celsius = kelvin - 273.15;
    return celsius;
  }

  function resetInput(element) {
    element.value = "";
    return element;
  }
}

// Call the api (https://imdb-api.com/en/API/Top250Movies/{APIKEY} ) using fetch method in JavaScript.​

// Iterate over the first 10 movies from the response of the end point displaying their title, rating and image in a list like manner.​

const apiKeyImdb = "k_q5h4dh46";

fetch(`https://imdb-api.com/en/API/Top250Movies/${apiKeyImdb}`).then((res) => {
  const jsonRes = res.json();
  jsonRes
    .then((json) => {
      const movie = json.items;
      console.log(movie);
      for (let i = 0; i < 10; i++) {
        displayMovie(movie[i].title, movie[i].image);
      }
    })
    .catch(() => {
      //enter code here
      console.log("error");
    });
});

function displayMovie(data, item1) {
  const card = document.querySelector(".card");
  card.innerHTML += `<h2>${data}</h2> <img src="${item1}" alt="${data}>`;
}
