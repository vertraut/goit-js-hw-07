const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"];
const ulElem = document.querySelector("ul#ingredients");

const list = ingredients.map((elem) => {
  const listElem = document.createElement("li");
  listElem.classList.add("css-style");
  listElem.textContent = elem;
  return listElem;
});

ulElem.append(...list);
