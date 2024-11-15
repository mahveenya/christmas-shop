import { populateGiftsSection } from '../js/populateGiftsSection'
import { index } from '../templates/index'
import { gifts } from '../templates/gifts'

document.addEventListener('click', (e) => {
  const element = e.target.closest('a, button, [data-url]')
  if (!element) return

  if (element.tagName === 'A' && element.href.includes('#')) return

  const url = element.dataset?.url || element?.href

  e.preventDefault()
  route(url)
})

const routes = {
  '/mahveenya-JSFE2024Q4/christmas-shop/': index,
  '/mahveenya-JSFE2024Q4/christmas-shop/gifts': gifts,
}

const route = (url) => {
  window.history.pushState({}, '', url)

  locationHandler()
  window.scrollTo({ top: 0 })
}

const locationHandler = () => {
  const location = window.location.pathname

  const isOnHomepage = location === '/mahveenya-JSFE2024Q4/christmas-shop/'

  const main = document.getElementById('main')

  main.innerHTML = routes[location]

  populateGiftsSection(isOnHomepage ? 4 : 12)
}

window.onpopstate = locationHandler

locationHandler()
