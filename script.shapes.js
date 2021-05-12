//targets for anime:
// css selector, DOM Node/NodeList, Array

const squares = document.getElementsByClassName('square')
const allElements = document.querySelectorAll('div')

// anime({
//   targets: squares,
//   borderRadius: 50,
//   left: 300
// })

// anime({
//   targets: '.circle',
//   borderRadius: 0,
//   rotate: 45,
//   left: 200
// })

// anime({
//   targets: '.rectangle',
//   rotate: 90,
//   borderRadius: 75
// })

// allElements.forEach((element, i) => {
//   anime({
//   targets: element,
//   left: 300 + (i*50),
//   })
// })

// anime({
//   targets: allElements,
//   left: 300,
//   opacity: 0.5,
//   height: 50,
//   borderRadius: 0
// })

// anime({
//   targets: [squares, '.circle'],
//   left: 300
// })

// anime({
//   targets: allElements[2],
//   left: 300
// })

// anime({
//   targets: allElements,
//   left: 300
// })

// anime({
//   targets: '.rectangle',
//   left: 100,
// })

// anime({
//   targets: squares,
//   left: 500,
// })