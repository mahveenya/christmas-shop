const config = { childList: true, subtree: true }

const callback = (mutationList, observer) => {
  const scrollToTopButton = document.getElementById('scroll-to-top-button')

  if (scrollToTopButton) {
    const handleScroll = () => {
      const scrollPositionY = window.scrollY
      const windowWidth = window.innerWidth

      if (scrollPositionY > 300 && windowWidth <= 768) {
        scrollToTopButton.style.display = 'flex'
      } else {
        scrollToTopButton.style.display = 'none'
      }
    }

    const handleClick = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }

    scrollToTopButton.addEventListener('click', handleClick)
    document.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)

    const cleanUp = () => {
      scrollToTopButton.removeEventListener('click', handleClick)
      document.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }

    const buttonObserver = new MutationObserver(() => {
      if (!document.body.contains(scrollToTopButton)) {
        cleanUp()
        buttonObserver.disconnect()
      }
    })

    buttonObserver.observe(document.body, config)
  }
}

const observer = new MutationObserver(callback)

observer.observe(document.body, config)
