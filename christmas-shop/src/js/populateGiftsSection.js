import { getRandomGifts } from './utilities'
import { createCard } from './createCard'

export function populateGiftsSection() {
  const isOnHomepage = window.location.pathname == '/'
  const numOfGifts = isOnHomepage ? 4 : 12

  const cardsArray = getRandomGifts(numOfGifts).map(createCard)

  const observer = new MutationObserver((mutationsList, observer) => {
    const cardsContainer = document.querySelector('.gifts__cards')

    if (cardsContainer) {
      console.log(cardsContainer)
      cardsContainer.append(...cardsArray)
      observer.disconnect()
    }
  })

  observer.observe(document.body, { childList: true, subtree: true })
}

populateGiftsSection()
