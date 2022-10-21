//////////////// Query Selector Exercise //////////////////
/*
1. Given the boiler plate use query selector console log the following items on the page:​

    - The text Content of the H1 element​
    - The text content of the id “Hero”​
    -The text content of the first instance of the class “list”​

2. Add some text to the p tag with the id “dynamic-text”​
​*/

// Add Your JavaScript Below
const h1 = document.querySelector("h1");
console.log(h1.textContent);

const heroText = document.querySelector("#hero");
console.log(heroText.textContent);

const listItem = document.querySelector(".list");
console.log(listItem.textContent);

const dynamicText = document.querySelector("#dynamic-text");
dynamicText.textContent = "I added some sentence in the p tag using javaScript";
