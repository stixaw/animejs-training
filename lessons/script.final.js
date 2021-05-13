const squares = anime ({
  targets: '.square',
  autoplay: false,
  duration: 2000,
  easing: 'linear',
  delay: anime.stagger(150, {from: 'center'}),
  translateX: {
    value: 250,
  },
  borderRadius: {
    value: [0, '50%'],
  },
  rotate: {
    delay: 500,
    value: 360,
  },
  background: {
    value: '#ff00ff',
    delay: 1000,
  },
  width: {
    value: '+=10px',
    delay: 1500,
  }
})

document.querySelector('.play').onclick = squares.play
document.querySelector('.pause').onclick = squares.pause
document.querySelector('.reverse').onclick = squares.reverse
document.querySelector('.restart').onclick = squares.restart