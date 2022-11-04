const form = document.querySelector(".promo__form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

const checkInputs = () => {
  const name = document.querySelector(".input-name");
  const tel = document.querySelector(".input-tel");

  if (name.value.trim() === "" || name.value == null) {
    setError(name);
  } else {
    setSuccess(name);
  }

  if (tel.value.trim() === "" || tel.value == null) {
    setError(tel);
  } else {
    setSuccess(tel);
  }

  console.log("Отправлено!");
};

const setError = (input) => {
  input.classList.add("error");
};

const setSuccess = (input) => {
  input.classList.remove("error");
  input.classList.add("success");
  input.value = "";
};
