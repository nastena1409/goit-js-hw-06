function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  body: document.querySelector('body'),
  changeColorBtn: document.querySelector('.change-color'),
  spanColor: document.querySelector('.color'),
}

refs.changeColorBtn.addEventListener('click', onChangeColor);

function onChangeColor() {
  color = getRandomHexColor();
  
  refs.body.style.backgroundColor = color;
  refs.spanColor.textContent = color; 
}
  