////////////////  Query Selector All ////////////////////

/* 
1. Given the boiler plate use query selector console log the following items on the page:​

    - The second p tag​
    - All of the list items​ with the class list
    - The text content of the third instance of the class “list”​
    - The length of the list.

*/

// Write your JavaScript below
const secondPTag = document.querySelectorAll("p");
console.log(secondPTag[1].textContent);

const listItem = document.querySelectorAll(".list");
listItem.forEach((item) => {
  console.log(item);
});


console.log(listItem[2].textContent);

console.log(listItem.length);