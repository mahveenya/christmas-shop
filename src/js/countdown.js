const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')

function updateTimer() {
  // If none of the timer elements are present, do nothing
  if (!daysEl && !hoursEl && !minutesEl && !secondsEl) return

  const now = new Date()
  const nextYear = now.getFullYear() + 1
  const newYear = new Date(Date.UTC(nextYear, 0, 1, 0, 0, 0))
  const diff = newYear - now

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)

  if (daysEl) daysEl.textContent = days
  if (hoursEl) hoursEl.textContent = hours
  if (minutesEl) minutesEl.textContent = minutes
  if (secondsEl) secondsEl.textContent = seconds
}

// Start the timer only if timer elements exist
if (daysEl || hoursEl || minutesEl || secondsEl) {
  updateTimer()
  setInterval(updateTimer, 1000)
}
