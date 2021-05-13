/**
 * Staggering
 * Follow-Through and overlapping action
 * 
 * delay: anime.stagger(100, {direction: 'reverse'})
 *                     value: {option}
 * Stagger options
 * start: starts from a specified value
 * range: evenly distributes values within the range
 * from: starts from a specific position within the group of targets
 * direction: stagger order
 * easing: apply easing
 * grid: staggers within a grid
 * axis: controls direction of grid stagger
 */

// GRID staggers in a grid  https://cssgrid-generator.netlify.app
// {grid: [3,3], from: 'center'}

anime({
  targets: '.grid-container div',
  rotate: 90,
  delay: anime.stagger(200, {grid: [3,3], axis: 'y'}),
  duration: 5000,
})

//stager from value  similar to direction normal first, reverse last

// anime({
//   targets: '#first .square',
//   translateX: anime.stagger(50, {
//     from: 'first'
//   }),
//   duration: 3000,
//   loop:2
// })

// anime({
//   targets: '#last .square',
//   translateX: anime.stagger(50, {
//     from: 'last',
//     easing: 'easeInQuad'
//   }),
//   duration: 3000,
//   loop:2
// })

// anime({
//   targets: '#center .square',
//   translateX: anime.stagger(50, {
//     from: 'center'
//   }),
//   duration: 3000,
//   loop:2
// })

// anime({
//   targets: '#index .square',
//   translateX: anime.stagger(50, {
//     from: '1'
//   }),
//   duration: 3000,
//   loop:2
// })


//stagger with range
// anime({
//   targets: '.square',
//   translateX: anime.stagger(300, {
//     start: 0,
//   }),
//   // delay: anime.stagger(100),
//   duration: 5000,
//   loop: 2
// })

// anime({
//   targets: '.circle',
//   translateX: anime.stagger([0,300]),
//   duration: 5000,
//   loop: 2
// })

// stagger with start
//  anime({
//   targets: '.square',
//   translateX: anime.stagger(50, {
//     start: 0,
//   }),
//   // delay: anime.stagger(100),
//   duration: 5000,
//   loop: 2
// })

// anime({
//   targets: '.circle',
//   translateX: anime.stagger(50, {
//     start: 200
//   }),
//   duration: 5000,
//   loop: 2
// })