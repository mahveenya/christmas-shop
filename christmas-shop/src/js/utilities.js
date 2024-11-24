import gifts from '../assets/data/gifts'

export function getRandomGifts(numOfGifts) {
  const { data } = gifts
  if (numOfGifts > data.length) {
    throw new Error(
      `Number of required cards to be returned cannot be more than ${giftsData.length}`
    )
  }

  const shuffledArray = data.slice().sort(() => Math.random() - 0.5)
  return shuffledArray.slice(0, numOfGifts)
}
