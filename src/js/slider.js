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

nextSlideButton.addEventListener('click', (e) => changeSlide(e, 'next'))
prevSlideButton.addEventListener('click', (e) => changeSlide(e, 'prev'))

slides.addEventListener('transitionend', () => {
  moveSlider()
})

window.addEventListener('load', () => {
  const observer = new ResizeObserver((entries) => {
    const contentElement = entries[0]
    const sliderElement = entries[1]
    const slidesElement = entries[2]

    if (contentSize != contentElement.contentRect.width) {
      position = 0
      clicksMade = 0
      updateButtons()
      moveSlider(0)
    }

    contentSize = contentElement.contentRect.width
    const sliderSize = sliderElement.contentRect.width
    const slidesSize = slidesElement.target.scrollWidth

    clicksToTheSliderEdge = contentSize > 768 ? 3 : 6
    tail = slidesSize - sliderSize
    slideSize = Math.ceil(tail / clicksToTheSliderEdge)
  })

  observer.observe(contentContainer)
  observer.observe(slider)
  observer.observe(slides)
})

function moveSlider(position) {
  slides.style.transform = `translateX(${position}px)`
}

function changeSlide(e, direction) {
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
  prevSlideButton.classList.toggle('slider__arrow--disabled', clicksMade === 0)
  nextSlideButton.classList.toggle(
    'slider__arrow--disabled',
    clicksMade === clicksToTheSliderEdge
  )
}
