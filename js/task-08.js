// event.preventDefault();

// if (event.currentTarget.value === "") {
//     allert("Заполните все поля")
// }

// const result = {
//     email: emailEl.currentTarget.value
//     password: passwordEl.currentTarget.value
// }

const emailEL = document.querySelector("input[name=email]");
const passwordEL = document.querySelector("input[type=password]");
const submitBtnEL = document.querySelector("button[type=submit]");

submitBtnEL.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
  if (emailEL.value.length === 0) {
    alert("Зaполните все поля");
  }
});
