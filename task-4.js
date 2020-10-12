let counterValue = 0; //текущее значение счетчика

const counterEl = document.querySelector("#value");
const incrementBtnEl = document.querySelector('[data-action="increment"]');
const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const counterUpdateUI = () => (counterEl.textContent = counterValue);

const increment = () => {
  counterValue += 1;
  counterUpdateUI();
};

const decrement = () => {
  counterValue -= 1;
  counterUpdateUI();
};

incrementBtnEl.addEventListener("click", increment);
decrementBtnEl.addEventListener("click", decrement);
