const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email === "" || password === "") {
    alert("Заполни все поля");
  } else {
    const formData = {
      email,
      password,
    };

    console.log(formData);
    loginForm.reset();
  }
});
