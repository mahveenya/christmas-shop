import { populateGiftsSection } from '../js/populateGiftsSection'
import { index } from '../templates/index'
import { gifts } from '../templates/gifts'

const routes = {
  '/mahveenya-JSFE2024Q4/christmas-shop/': index,
  '/mahveenya-JSFE2024Q4/christmas-shop/gifts': gifts,
}

document.addEventListener('click', (e) => {
  const element = e.target.closest('a, button, [data-url]')
  if (!element) return

  if (element.tagName === 'A' && element.href.includes('#')) return

  const url = element.dataset?.url || element?.href

  if (url) {
    e.preventDefault()
    route(url)
  }
})

const route = (url) => {
  let urlPath = url
  if (url.includes('http')) urlPath = new URL(url).pathname

  const currentState = window.history.state || {}
  const isSamePath = currentState.path === urlPath

  if (isSamePath) return

  window.history.pushState({ path: urlPath }, '', urlPath)

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
