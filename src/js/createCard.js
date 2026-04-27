import forHarmonyImage from '/src/assets/img/gift-for-harmony.png'
import forHealthImage from '/src/assets/img/gift-for-health.png'
import forWorkImage from '/src/assets/img/gift-for-harmony.png'

const imagesObj = {
  'for-harmony': forHarmonyImage,
  'for-health': forHealthImage,
  'for-work': forWorkImage,
}

export function createCard(cardData) {
  const figure = document.createElement('figure')
  const imageContainer = document.createElement('div')
  const img = document.createElement('img')
  const figcaption = document.createElement('figcaption')
  const h4 = document.createElement('h4')
  const h3 = document.createElement('h3')

  const labelText = cardData.category.toLowerCase()
  const labelAttribute = labelText.replace(' ', '-')

  figure.classList.add('gifts__card')

  imageContainer.style.width = '310px'
  imageContainer.style.height = '230px'

  img.src = imagesObj[labelAttribute]
  img.alt = 'gift image'
  img.classList.add('gifts__card-img')

  figcaption.classList.add('gifts__card-figcaption')

  h4.dataset.label = labelAttribute
  h4.textContent = labelText

  h3.textContent = cardData.name

  figcaption.append(h4, h3)
  imageContainer.append(img)
  figure.append(imageContainer, figcaption)

  return figure
}
