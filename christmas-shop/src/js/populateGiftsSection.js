import { getRandomGifts } from './utilities'
import { createCard } from './createCard'

export function populateGiftsSection(numOfGifts) {
  const cardsArray = getRandomGifts(numOfGifts).map(createCard)
  const cardsContainer = document.querySelector('.gifts__cards')

  cardsContainer.append(...cardsArray)
}
