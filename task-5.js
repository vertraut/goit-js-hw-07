const inputEl = document.querySelector("input#name-input");
const nameEl = document.querySelector("span#name-output");

inputEl.addEventListener("input", replaceName);

function replaceName(event) {
  event.currentTarget.value === "" ? (nameEl.textContent = "незнакомец") : (nameEl.textContent = event.currentTarget.value);
}
