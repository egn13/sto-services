const spares = document.getElementById('spares');

const changeClass = e => {
  for(let i = 0; i < spares.children.length; i++) {
    spares.children[i].classList.remove('active')
  }
  e.classList.add('active')
}

spares.addEventListener('click', el => {
  changeClass(el.target)
})