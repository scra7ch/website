'use strict'

import scrolltop from 'scrolltop'

const app = document.getElementById('app')
const heroHeading = document.querySelector('.hero h1')

window.addEventListener('load', () => {
  app.classList.add('visible')
})

window.addEventListener('scroll', e => {
  const scrollPosition = scrolltop()

  // Hero heading parallax effect
  if (scrollPosition < window.innerHeight) {
    const scrollRatio = parseFloat((scrollPosition / window.innerHeight).toFixed(3))
    heroHeading.style.opacity = (1 - scrollRatio)
    heroHeading.style.transform = `translateY(${(1-scrollPosition)/6}px)`
  }
})
