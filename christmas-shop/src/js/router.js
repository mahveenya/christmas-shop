const pageTitle = 'Christmas-Shop'

document.addEventListener('click', (e) => {
  let { target } = e

  const hasURL = target.dataset.url

  if (!hasURL) return

  if (hasURL) {
    route(target)
    return
  }

  target = target.closest('a')
  const isAnchor = target.href.includes('#')

  if (isAnchor) return

  e.preventDefault()
  route(target)
})

const routes = {
  404: {
    template: '/src/templates/404.html',
    title: `404 | ${pageTitle}`,
    description: 'Page not found',
  },
  '/': {
    template: '/src/templates/index.html',
    title: `${pageTitle}`,
    description: 'This is the homepage',
  },
  '/gifts': {
    template: '/src/templates/gifts.html',
    title: `Gifts | ${pageTitle}`,
    description: 'This is the gifts page',
  },
}

const route = (target) => {
  window.history.pushState({}, '', target.href || target.dataset.url)
  locationHandler()
}

const locationHandler = async () => {
  const location = window.location.pathname

  if (location.length == 0) {
    location = '/'
  }

  const route = routes[location] || routes[404]
  const html = await fetch(route.template)
  const htmlText = await html.text()

  document.getElementById('content').innerHTML = htmlText
  document.title = route.title
  document
    .querySelector('meta[name="description"]')
    .setAttribute('content', route.description)
}

window.onpopstate = locationHandler

locationHandler()
