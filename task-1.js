const mainListEl = document.querySelectorAll("li.item");

console.log(`В списке ${mainListEl.length} категории.`);

mainListEl.forEach((elem) =>
  console.log(
    `Катгория: "${elem.querySelector("h2").textContent}", количество элементов: ${elem.querySelectorAll("li").length}`
  )
);
