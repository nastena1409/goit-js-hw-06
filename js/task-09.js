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

function onChangeColor(event) {
  event.currentTarget.value = getRandomHexColor();
  
  refs.body.style.backgroundColor = event.currentTarget.value;
  refs.spanColor.textContent = event.currentTarget.value; 
}
  