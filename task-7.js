const sliderEl = document.querySelector("input#font-size-control");

const textAfterInputRange = document.querySelector("span#text");
textAfterInputRange.style.fontSize = `${sliderEl.value}px`;

sliderEl.addEventListener("input", () => (textAfterInputRange.style.fontSize = `${sliderEl.value}px`));
