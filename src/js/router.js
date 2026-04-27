import { populateGiftsSection } from './populateGiftsSection'
import { index } from '../templates/index'
import { gifts } from '../templates/gifts'

const BASE = import.meta.env.BASE_URL || '/'

const routes = {
  [BASE]: index,
  [BASE + 'gifts']: gifts,
  '/': index,
  '/gifts': gifts,
}

document.addEventListener('click', (e) => {
  const element = e.target.closest('a, button, [data-url]')
  if (!element) return

  const isHashAnchor = element.tagName === 'A' && element.href.includes('#')
  const isInFooter = element.closest('footer')

  if (isHashAnchor || isInFooter) return

  const url = element.dataset?.url || element?.href

  if (url) {
    e.preventDefault()
    route(url)
  }
})

const route = (url) => {
  let urlPath = new URL(url, window.location.href).pathname

  const currentState = window.history.state || {}
  const isSamePath = currentState.path === urlPath

  if (isSamePath) return

  window.history.pushState({ path: urlPath }, '', urlPath)

  locationHandler()
  window.scrollTo({ top: 0 })
}

const locationHandler = () => {
  const location = window.location.pathname

  const normalize = (p) => (p.endsWith('/') ? p : p + '/')
  const normalizedLocation = normalize(location)
  const normalizedBase = normalize(BASE)

  const isOnHomepage =
    normalizedLocation === normalizedBase || normalizedLocation === '/'

  const main = document.getElementById('main')

  const template = routes[location] || routes[normalizedLocation] || index
  main.innerHTML = template

  populateGiftsSection(isOnHomepage ? 4 : null)
}

window.onpopstate = locationHandler

locationHandler()
