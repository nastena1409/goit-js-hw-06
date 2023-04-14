function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const refs = {
  body: document.querySelector('body'),
  changeColorBtn: document.querySelector('.change-color'),
  colorValue: document.querySelector('.color'),
}

refs.changeColorBtn.addEventListener('click', onChangeColor);

function onChangeColor() {
  
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.colorValue.textContent = getRandomHexColor();
}
  