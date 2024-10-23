import '../scss/style.scss'

const h2 = document.querySelector('h2')

h2.addEventListener('mouseover', () => {
  h2.innerText = 'mouseover'
})
h2.addEventListener('mouseout', () => {
  h2.innerText = 'mouseout'
})
