'use strict'

import scrolltop from 'scrolltop'

const app = document.getElementById('app')
const heroHeader = document.querySelector('.hero h1')

window.addEventListener('load', () => {
  app.classList.add('visible')
})

window.addEventListener('scroll', e => {
  const scrollOffset = scrolltop()

  if (scrollOffset < window.innerHeight) {
    const ratio = parseFloat((scrollOffset / window.innerHeight).toFixed(3))
    heroHeader.style.opacity = 1 - ratio
    heroHeader.style.transform = `translateY(${(1-scrollOffset)/6}px)`
  }
})
