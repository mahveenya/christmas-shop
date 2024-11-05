import giftsData from '../assets/data/gifts'

export function getRandomGifts(numOfGifts) {
  if (numOfGifts > giftsData.length) {
    throw new Error(
      `Number of required cards to be returned cannot be more than ${giftsData.length}`
    )
  }

  const shuffledArray = giftsData.slice().sort(() => Math.random() - 0.5)
  return shuffledArray.slice(0, numOfGifts)
}
