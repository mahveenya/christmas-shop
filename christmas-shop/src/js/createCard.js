const cardData = {
  name: 'Bug Magnet',
  description:
    'Able to find bugs in code like they were placed there on purpose.',
  category: 'For Work',
  superpowers: {
    live: '+500',
    create: '+500',
    love: '+200',
    dream: '+400',
  },
}

export function createCard(cardData) {
  const figure = document.createElement('figure')
  const img = document.createElement('img')
  const figcaption = document.createElement('figcaption')
  const h4 = document.createElement('h4')
  const h3 = document.createElement('h3')
  const labelText = cardData.category.toLowerCase()
  const labelAttribute = labelText.replace(' ', '-')

  figure.classList.add('gifts__card')

  img.src = `/src/assets/img/gift-${labelAttribute}.png`
  img.alt = 'gift image'
  img.classList.add('gifts__card-img')

  figcaption.classList.add('gifts__card-figcaption')

  h4.dataset.label = labelAttribute
  h4.textContent = labelText

  h3.classList.add('gifts__card-description--truncate')
  h3.textContent = cardData.description

  figcaption.append(h4, h3)
  figure.append(img, figcaption)

  return figure
}

// console.log( createCard(cardData));
