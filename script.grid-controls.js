const squares = anime({
  targets: '.grid-container div',
  rotate: 90,
  delay: anime.stagger(200, {grid: [3, 3], axis: 'x'}),
  duration: 6000,
  autoplay: false
})

document.querySelector('.play').onclick = squares.play
document.querySelector('.pause').onclick = squares.pause
document.querySelector('.reverse').onclick = squares.reverse
document.querySelector('.restart').onclick = squares.restart

const getTimestamp = document.querySelector('.timestamp')

getTimestamp.oninput = function() {
  squares.seek(getTimestamp.value)
}

const getScroller = document.querySelector('.scroller')

getScroller.oninput = function() {
  squares.seek(squares.duration * (getScroller.value / 100))
}