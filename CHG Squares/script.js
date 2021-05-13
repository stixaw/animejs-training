anime({
  targets: '.grid-container div',
  translateX: anime.stagger(100, { grid: [3, 3], from: 'first', axis: 'x' }),
  translateY: anime.stagger(100, { grid: [3, 3], from: 'last', axis: 'y' }),
  rotateZ: anime.stagger([0, 45], { from: 'center', axis: 'x' }),
  delay: anime.stagger(200, { start: 500, end: 500, grid: [3, 3], from: '5' }),
  easing: 'linear',
  duration: 2000,
  loop: true,
  direction: 'alternate',
})
anime({
  targets: '.grid-container div',
  opacity: {
    value: [1, .3],
    easing: 'linear',
    duration: 2000,
  },
  direction: 'alternate',
  loop: true,
})


// const squares = anime({
//   targets: '.grid-container div',
//   rotate: 90,
//   delay: anime.stagger(200, {grid: [3, 3], axis: 'x'}),
//   duration: 6000,
//   autoplay: false
// })

// document.querySelector('.play').onclick = squares.play
// document.querySelector('.pause').onclick = squares.pause
// document.querySelector('.reverse').onclick = squares.reverse
// document.querySelector('.restart').onclick = squares.restart

// const getTimestamp = document.querySelector('.timestamp')

// getTimestamp.oninput = function() {
//   squares.seek(getTimestamp.value)
// }

// const getScroller = document.querySelector('.scroller')

// getScroller.oninput = function() {
//   squares.seek(squares.duration * (getScroller.value / 100))
// }