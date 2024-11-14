import { populateGiftsSection } from '../js/populateGiftsSection'
import { index } from '../templates/index'
import { notFound } from '../templates/404'
import { gifts } from '../templates/gifts'

document.addEventListener('click', (e) => {
  const hasURL = e.target.dataset.url
  const element = e.target.closest('a')
  const isAnchor = element?.href.includes('#')

  if (!hasURL || isAnchor) return

  route(e)
})

const routes = {
  '/mahveenya-JSFE2024Q4/christmas-shop/404': notFound,
  '/mahveenya-JSFE2024Q4/christmas-shop/': index,
  '/mahveenya-JSFE2024Q4/christmas-shop/gifts': gifts,
}

const route = (e) => {
  const url = e.target.href || e.target.dataset.url
  window.history.pushState({}, '', url)
  locationHandler()
  if (url == '/gifts') {
    window.scrollTo({
      top: 0,
    })
  }
}

const locationHandler = () => {
  const location = window.location.pathname

  if (location.length == 0) {
    location = '/mahveenya-JSFE2024Q4/christmas-shop/'
  }

  const isOnHomepage = location === '/mahveenya-JSFE2024Q4/christmas-shop/'
  const numOfGifts = isOnHomepage ? 4 : 12

  const main = document.getElementById('main')

  main.innerHTML = routes[location] || 404

  populateGiftsSection(numOfGifts)
}

window.onpopstate = locationHandler

locationHandler()
