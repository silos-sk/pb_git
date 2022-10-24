const dynamicId = document.querySelector("#dynamic");
const dynamicBtn = document.querySelector("#dynamicBtn");

// Toggle Hide/Show Content
dynamicBtn.addEventListener("click", () => {
  dynamicId.classList.toggle("hide");
});

// Password Validation: min 8 characters
const pw = document.querySelector("#password");
const loginBtn = document.querySelector("#loginBtn");

loginBtn.addEventListener("click", () => {
  if (pw.value.length >= 8) {
    console.log(`Password contains ${pw.value.length} characters. Allowed.`);
  } else {
    console.log("Please enter password with at least 8 characters.");
  }
});

// Currency Converter
const num = document.querySelector("#num");
const convertBtn = document.querySelector("#convertBtn");
const usdContent = document.querySelector("#usd");

convertBtn.addEventListener("click", () => {
  const usd = num.value * 1.12;
  usdContent.textContent = "$" + usd.toFixed(2);
});

// LOCAL STORAGE
const firstName = document.querySelector("#firstName").textContent;
const lastName = document.querySelector("#lastName").value;
const bday = document.querySelector("#bday").value;
const email = document.querySelector("#email").value;
const localForm = document.getElementById("local");

localForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(firstName);
  // let data = {
  //   fName: firstName,
  //   lName: lastName,
  //   bday: bday,
  //   email: email
  // };
  // console.log(data);
  // let userData = JSON.stringify(data);
  // console.log(data);
  // localStorage.setItem("data", userData);
});
