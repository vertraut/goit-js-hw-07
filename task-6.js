const inputEl = document.querySelector("input#validation-input");


// console.log(inputEl.dataset.length);

inputEl.addEventListener("blur", valudation);
// inputEl.currentTarget.value === 6 ? console.log("Все верно") : console.log("Хрень собачья");

function valudation(event) {
  if (event.currentTarget.value.length === Number(event.currentTarget.dataset.length)) {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.remove("invalid");
  } else {
    event.currentTarget.classList.add("invalid");
    event.currentTarget.classList.remove("valid");
  }
}
