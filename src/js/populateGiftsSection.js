import { getGifts } from './utilities'
import { createCard } from './createCard'

export function populateGiftsSection(numOfGifts) {
  const cardsArray = getGifts(numOfGifts).map(createCard)
  const cardsContainer = document.querySelector('.gifts__cards')

  cardsContainer.append(...cardsArray)
}
