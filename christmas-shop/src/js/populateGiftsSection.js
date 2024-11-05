import { getRandomGifts } from './utilities'
import { createCard } from './createCard'

function populateGiftsSection() {
  const isOnHomepage = window.location.pathname === '/'
  const numOfGifts = isOnHomepage ? 4 : 12
  const cardsArray = getRandomGifts(numOfGifts).map(createCard)

  const observer = new MutationObserver(() => {
    const cardsContainer = document.querySelector('.gifts__cards')

    cardsContainer.append(...cardsArray)

    observer.disconnect()
  })

  observer.observe(document.body, { childList: true, subtree: true })
}

document.addEventListener('click', (event) => {
  window.scrollTo({
    top: 0,
  })

  const button = event.target.closest('[data-url="/gifts"]')

  if (button) {
    populateGiftsSection()
  }
})

populateGiftsSection()
