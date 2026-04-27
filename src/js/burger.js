const burgerBtn = document.getElementById('burger__button')
const burgerMenu = document.getElementById('burger__menu')

burgerBtn.addEventListener('click', () => {
  toggleBurgerMenu()
  toggleBurgerButton()
  toggleNoScroll()
})

burgerMenu.addEventListener('click', (e) => {
  const isLink = e.target.classList.contains('burger__menu-link')

  if (isLink) {
    toggleBurgerMenu()
    toggleBurgerButton()
    toggleNoScroll()
  }
})

function toggleBurgerMenu() {
  burgerMenu.classList.toggle('burger__menu--active')
}
function toggleBurgerButton() {
  burgerBtn.classList.toggle('burger__button--active')
}
function toggleNoScroll() {
  document.body.classList.toggle('no-scroll')
}
