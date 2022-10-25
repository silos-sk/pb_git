const todosList = []; // All added todos
const completedList = []; // All todos marked complete
const todosLeft = document.querySelector("#todosLeft");
const todosEntries = document.querySelector(".todosEntries"); // ul.todosEntries

// Initial Todo Counter
let count = 0;
todosLeft.textContent = 0;

//*** LOAD SAVED TODO LIST ***/
// Read previous todos. If no todos were found, start with an empty list
const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

const completedTodos = JSON.parse(localStorage.getItem("completedTodos")) || [];

if (completedTodos == false) {
  savedTodos.forEach(todoTemplate);
} else if (completedTodos) {
  // If todo in completed todo, remove from todoslist
  savedTodos.forEach((item) => {
    for (let i = 0; i < completedTodos.length; i++) {
      if (completedTodos.includes(item)) {
        let index = savedTodos.indexOf(item);
        savedTodos.splice(index, 1);
        // console.log(`savedTodos: ${savedTodos}`);
        savedTodos.forEach(todoTemplate);
        completedTodos.forEach(completedTodoTemplate);
      }
    }
  });
}
// Update todos counter
count = todosEntries.children.length;
todosLeft.textContent = count;

//*** CREATE TODO ***/
function todoTemplate(todo) {
  const li = document.createElement("li");
  const ul = document.querySelector("ul");

  li.innerHTML = `<i class="fa-regular fa-square"></i><span>${todo}</span><i class="fa-solid fa-xmark del"></i>`;
  ul.appendChild(li);
  todosList.push(todo);
}

//*** CREATE COMPLETED TODO ***/
function completedTodoTemplate(todo) {
  const li = document.createElement("li");
  const ul = document.querySelector("ul");

  li.innerHTML = `<i class="fa-regular fa-square-check"></i><span class="strike">${todo}</span><i class="fa-solid fa-xmark del"></i>`;
  ul.appendChild(li);
  todosList.push(todo);
}

//*** ADD TODO ***/
const addBtn = document.querySelector(".addBtn");

addBtn.addEventListener("click", function () {
  let inputVal = document.getElementById("todo").value;

  if (inputVal.length) {
    //if input field not empty, add todo to list
    todoTemplate(inputVal); // add todo item
    clearInput(); // clear input field
    count++; // increase todos counter

    todosLeft.textContent = count;

    localStorage.setItem("todos", JSON.stringify(todosList));
  }
  return count;
});

// Clear input field after adding todo
function clearInput() {
  document.getElementById("todo").value = "";
}

// When todo list is not empty
if (todosEntries.children) {
  // if todos list has items

  //*** REMOVE TODO ***/
  todosEntries.addEventListener("click", (e) => {
    if (e.target.classList.contains("del")) {
      // if it contains the delete icon

      const entry = e.target.parentElement.textContent;
      //Remove entry from local storage
      const localList = JSON.parse(localStorage.getItem("todos")) || []; //get item from local storage and store in this variable
      const index = localList.indexOf(
        entry.trim() // get todo text content from <li> and remove spaces to get index from local storage
      );
      localList.splice(index, 1); // remove item from current list
      localStorage.setItem("todos", JSON.stringify(localList)); // set local storage from updated list

      const completedLocalList =
        JSON.parse(localStorage.getItem("completedTodos")) || []; // get completed todos from local storage
      if (completedLocalList.includes(entry)) {
        const index = localList.indexOf(
          entry.trim() // get todo text content from <li> and remove spaces to get index from local storage
        );
        // if todo in completed todos from local storage
        completedLocalList.splice(index, 1); //remove completed todo from current ls
        localStorage.setItem(
          // set completed todos in local storage from the updated list
          "completedTodos",
          JSON.stringify(completedLocalList)
        );
      }

      //Remove entry from html
      e.target.parentElement.remove();

      //Reduce counter of todos left
      if (count > 0) {
        // if count is not 0, reduce counter
        count--;
      }
      //Display counter in html
      todosLeft.textContent = count;
    }
  });

  //*** COMPLETE TODO ***/
  const unchecked = document.querySelectorAll(".fa-square"); // square box before the <li>

  const checked = document.querySelectorAll(".fa-square-check");

  let clickCount = 0;

  // TO MARK TODO AS COMPLETE
  unchecked.forEach((unchecked) => {
    unchecked.addEventListener("click", function (e) {
      e.target.classList.remove("fa-square");
      e.target.classList.add("fa-square-check"); // toggle check icon
      e.target.parentElement.classList.add("completed"); // add .completed css class to square box
      e.target.nextElementSibling.classList.add("strike"); // add strike-through css style
      e.target.parentElement.setAttribute("id", "completed");
      clickCount++; // increase click count

      console.log(e.target.parentElement.getAttribute("id"));

      if (e.target.parentElement.getAttribute("id") === "completed") {
        const completedTodo = e.target.parentElement.textContent;

        if (!completedList.includes(completedTodo)) {
          completedList.push(completedTodo); // add completed todo to the completedList array
          // console.log(`Completed todo items LIST: ${completedList}`);
          // if it is the first time to click on the square box

          localStorage.setItem("completedTodos", JSON.stringify(completedList)); // Add completedList to the 'completedTodos' local storage
        }
      }
    });

    checked.forEach((checked) => {
      checked.addEventListener("click", function (e) {
        e.target.classList.remove("fa-square-check");
        e.target.classList.add("fa-square"); // toggle check icon
        e.target.parentElement.classList.remove("completed"); // add .completed css class to square box
        e.target.nextElementSibling.classList.remove("strike"); // add strike-through css style
        e.target.parentElement.setAttribute("id", "");
        clickCount++; // increase click count

        const todo = e.target.parentElement.textContent;
        let index = completedList.indexOf(todo);
        completedList.splice(index, 1); // add completed todo to the completedList array
        // console.log(`Completed todo items LIST: ${completedList}`);

        // if it is the first time to click on the square box
        localStorage.setItem("completedTodos", JSON.stringify(completedList)); // Add completedList to the 'completedTodos' local storage

        // console.log(completedList)
      });
    });
  });
}

//** FOOTER **/
const active = document.querySelector(".active");
const all = document.querySelector("#all");
const activeTodo = document.querySelector("#active");
const completedTodo = document.querySelector("#completed");

// Display only active todos
activeTodo.addEventListener("click", function () {
  activeTodo.classList.add("active");
  all.classList.remove("active");
  completedTodo.classList.remove("active");

  const li = document.querySelectorAll("li.completed");
  li.forEach((li) => {
    li.classList.add("hidden");
  });

  const activeLi = document.querySelectorAll("li:not(.completed");
  activeLi.forEach((activeLi) => {
    activeLi.classList.remove("hidden");
  });

  document.querySelector(".todos").textContent = activeLi.length;
});

// Display only completed todos
completedTodo.addEventListener("click", function () {
  completedTodo.classList.add("active");
  activeTodo.classList.remove("active");
  all.classList.remove("active");

  const li = document.querySelectorAll("li");
  li.forEach((li) => {
    li.classList.add("hidden");
  });
  const completeLi = document.querySelectorAll("li.completed");
  completeLi.forEach((completeLi) => {
    completeLi.classList.remove("hidden");
  });

  document.querySelector(".todos").textContent = completeLi.length;
});

// Display all todos
all.addEventListener("click", function () {
  all.classList.add("active");
  activeTodo.classList.remove("active");
  completedTodo.classList.remove("active");

  const li = document.querySelectorAll("li");
  li.forEach((li) => {
    li.classList.remove("hidden");
  });

  document.querySelector(".todos").textContent = li.length;
});

/* BUGS FOUND:
1. Unable to mark todo item as complete on first add; need to refresh page
2. Loading todo list from local storage loads duplicate complete + savedtodos -- FIXED
3. Random times on page refresh, even though the local storage is empty, it repopulates previously erased data
4. Unable to uncheck completed todo
*/
