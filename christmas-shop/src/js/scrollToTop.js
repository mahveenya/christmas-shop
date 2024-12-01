const scrollToTopButton = document.getElementById('scroll-to-top-button')
let scrollPositionY = window.scrollY
let windowWidth = window.innerWidth

document.addEventListener('scroll', (e) => {
  scrollPositionY = Number(window.scrollY)

  if (scrollPositionY > 300 && windowWidth <= 768) {
    scrollToTopButton.style.display = 'flex'
  }
  if (scrollPositionY < 300 || windowWidth > 768) {
    scrollToTopButton.style.display = 'none'
  }
})

window.addEventListener('resize', (e) => {
  windowWidth = Number(window.innerWidth)

  if (scrollPositionY > 300 && windowWidth <= 768) {
    scrollToTopButton.style.display = 'flex'
  }
  if (scrollPositionY < 300 || windowWidth > 768) {
    scrollToTopButton.style.display = 'none'
  }
})

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})
