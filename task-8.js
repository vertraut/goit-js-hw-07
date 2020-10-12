const ammountEl = document.querySelector("div#controls input"); //количество дивов
const renderEl = document.querySelector('[data-action="render"]'); //кнопка создания дивов
const clearEl = document.querySelector('[data-action="destroy"]') // кнопка очистки дивов
const divConteinerEl = document.querySelector('#boxes');


renderEl.addEventListener("click", createBoxesListener)
clearEl.addEventListener('click', clearDiv)


function createBoxes(amount) {
  
  divConteinerEl.innerHTML = ''; //очищаем контейнер с дивами
  const divBlocks = []; // массив дивов
  const initSizeDiv = 30;
  let currentSizeDiv;

  for (let i = 0; i < amount; i += 1) { //создаем в цикле нужно кол-во дивов
    
    divBlocks[i] = document.createElement('div')
    divBlocks[i].textContent = i+1;
    currentSizeDiv = initSizeDiv + (i * 10);
    // divBlocks[i].style.backgroundColor = "red"
    divBlocks[i].style.backgroundColor =  randomColorRGB();
    divBlocks[i].style.width = `${currentSizeDiv}px`
    divBlocks[i].style.height = `${currentSizeDiv}px`
      }
   divConteinerEl.append(...divBlocks);
}

function createBoxesListener() {
  createBoxes(ammountEl.value)
}
   
function clearDiv() {
  divConteinerEl.innerHTML = '';
}
 
function randomColorRGB() {

  const R = Math.floor(Math.random() * 256)
  const G = Math.floor(Math.random() * 256)
  const B = Math.floor(Math.random() * 256)
  
  return (`rgb(${R},${G},${B})`)
  
 }




