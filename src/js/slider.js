let contentSize
let slideSize
let tail
let position = 0
let clicksToTheSliderEdge
let clicksMade = 0

const slider = document.querySelector('.slider')
const slides = document.querySelector('.slider__slides')
const contentContainer = document.querySelector('.content')
const prevSlideButton = document.querySelector('.slider__arrow--left')
const nextSlideButton = document.querySelector('.slider__arrow--right')

if (nextSlideButton)
  nextSlideButton.addEventListener('click', (e) => changeSlide(e, 'next'))
if (prevSlideButton)
  prevSlideButton.addEventListener('click', (e) => changeSlide(e, 'prev'))

if (slides) {
  slides.addEventListener('transitionend', () => {
    moveSlider()
  })
}

window.addEventListener('load', () => {
  // Only initialize if required elements are present
  if (!contentContainer || !slider || !slides) return

  const observer = new ResizeObserver((entries) => {
    const entryMap = new Map(entries.map((entry) => [entry.target, entry]))
    const contentEntry = entryMap.get(contentContainer)
    const sliderEntry = entryMap.get(slider)
    const slidesEntry = entryMap.get(slides)

    const contentElementWidth = contentEntry
      ? contentEntry.contentRect.width
      : contentContainer.getBoundingClientRect().width
    const sliderWidth = sliderEntry
      ? sliderEntry.contentRect.width
      : slider.getBoundingClientRect().width
    const slidesSize = slidesEntry
      ? slidesEntry.target.scrollWidth
      : slides.scrollWidth

    if (contentSize != contentElementWidth) {
      position = 0
      clicksMade = 0
      updateButtons()
      moveSlider(0)
    }

    contentSize = contentElementWidth
    clicksToTheSliderEdge = contentSize > 768 ? 3 : 6
    tail = slidesSize - sliderWidth
    slideSize = Math.ceil(tail / clicksToTheSliderEdge)
  })

  observer.observe(contentContainer)
  observer.observe(slider)
  observer.observe(slides)
})

function moveSlider(pos = position) {
  if (!slides) return
  slides.style.transform = `translateX(${pos}px)`
}

function changeSlide(e, direction) {
  if (!clicksToTheSliderEdge) return

  if (direction === 'next' && clicksMade < clicksToTheSliderEdge) {
    clicksMade++
    position -= slideSize
  } else if (direction === 'prev' && clicksMade > 0) {
    clicksMade--
    position += slideSize
  }

  updateButtons()
  moveSlider(position)
}

function updateButtons() {
  if (!prevSlideButton || !nextSlideButton) return
  prevSlideButton.classList.toggle('slider__arrow--disabled', clicksMade === 0)
  nextSlideButton.classList.toggle(
    'slider__arrow--disabled',
    clicksMade === clicksToTheSliderEdge
  )
}
