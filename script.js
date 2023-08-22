const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const age = document.getElementById("age");
const email = document.getElementById("email");
const phoneNum = document.getElementById("phoneNum");
const male = document.getElementById("male");
const female = document.getElementById("female");
let errorMsg = document.getElementsByTagName("p")[0];
let submit = document.getElementById("submit");
let form = document.getElementById("form");

const validateInput = (input) => {
  if (input === "age" && age.value < 18 && age.value < 100) {
    errorMsg.innerText = "Age should be greater than 18";
  } else if (input === "phoneNum" && phoneNum.value.length != 10) {
    errorMsg.innerText = "Phone number should be of 10 digits";
  } else {
    errorMsg.innerText = "";
  }
};

const formHandler = (event) => {
  submit.addEventListener("click", () => {
    submit.innerText = "Clicked";
    submit.style.backgroundColor = "green";
  });

  event.preventDefault();
  console.log({
    firstName: firstName.value,
    lastName: lastName.value,
    age: age.value,
    phoneNum: phoneNum.value,
    gender: male.checked ? "Male" : "Female",
  });
};
