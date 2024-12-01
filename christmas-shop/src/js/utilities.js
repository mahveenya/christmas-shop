import gifts from '../assets/data/gifts'

export function getGifts(numOfGifts) {
  const { data } = gifts
  if (numOfGifts) {
    const shuffledArray = data.slice().sort(() => Math.random() - 0.5)
    return shuffledArray.slice(0, numOfGifts)
  } else {
    return data
  }
}
