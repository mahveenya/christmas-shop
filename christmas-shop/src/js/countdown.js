function updateTimer() {
  const now = new Date()

  const nextYear = now.getFullYear() + 1
  const newYear = new Date(Date.UTC(nextYear, 0, 1, 0, 0, 0))

  const diff = newYear - now

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)

  document.getElementById('days').textContent = days
  document.getElementById('hours').textContent = hours
  document.getElementById('minutes').textContent = minutes
  document.getElementById('seconds').textContent = seconds
}

// Start the timer
setInterval(updateTimer, 1000)
updateTimer()
