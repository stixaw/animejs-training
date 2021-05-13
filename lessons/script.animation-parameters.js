//Defining Animation Parameters

/**
 * Duration: 1000 ms
 * Delay, End Delay: 0 ms
 * Direction: 'normal', 'reverse', 'alternate'
 * Loop: 1 /True (infinite)
 */

/**
 * Rounding
 * round 1 default 1
 * round 10 default 0.1
 * round 100 default 0.01
 */

anime({
  targets: '.blue',
  easing: 'linear',
  direction: 'alternate',
  loop: 3,
  left: {
    value: '50%',
    duration: 3000,
  },
  opacity: {
    value: .50,
    duration: 1500,
  },
  rotate: {
    value: 360,
    delay: 3000,
    duration: 1000,
  },
})

// anime({
//   targets: '.green' ,
//   left: 300,
//   duration: 5000,
//   easing: 'linear'
// })

// anime({
//   targets: '.yellow',
//   left: 300,
//   duration: 2000,
//   endDelay: 200,
//   loop: 3,
//   rotate: 45,
//   easing: 'linear',
//   direction: 'reverse'
// })


// anime({
//   targets: '.red',
//   left: 300,
//   duration: 2000,
//   delay: 200,
//   loop: 3,
//   rotate: 45,
//   easing: 'linear',
//   direction: 'alternate'
// })

// anime({
//   targets: '.countUp',
//   value: [0, 100],
//   round: 1,
//   easing: 'linear'
// })

// anime({
//   targets: '.countDown',
//   value: [100, 0],
//   round: 1,
//   easing: 'linear'
// })