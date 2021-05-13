/**
 * Making it smooth
 * Using easing for more natural movement
 * Easing functions specify the rate of change of a parameter
 * over time ---easings.net
 * in other words, the speed at which an animation runs at different
 * points in time.
 * https://easings.net
 * 
 * Spring is similar  velocity: speed, Stiffness: tension
 * Damping: friction, Mass: how heavy the object is(weight)
 */

// steps
anime({
  targets: '.blue',
  easing: 'steps(8)',
  left: {
    value: 400,
    duration: 2000
  }
})

// cubicBezier(x1, y1, x2, y2)
// anime({
//   targets: '.blue',
//   easing: 'cubic-bezier(1, .72, .54, .38)',
//   left: {
//     value: 400,
//     duration: 4000,
//   }
// })



// Spring parameters (mass, stiffness, damping, velocity)
// anime({
//   targets: '.blue',
//   easing: 'spring(1, 100, 10, 0)',
//   left: {
//     value: 500,
//     duration: 4000,
//   }
// })

// anime({
//   targets: '.red',
//   easing: 'spring(100, 100, 10, 0)' ,
//   left: {
//     value: 500,
//     duration: 4000,
//   }
// })

// anime({
//   targets: '.yellow',
//   easing: 'spring(1, 0, 10, 0)',
//   left: {
//     value: 500,
//     duration: 4000,
//   }
// })

// anime({
//   targets: '.green',
//   easing: 'spring(1, 100, 100, 0)' ,
//   left: {
//     value: 500,
//     duration: 4000,
//   }
// })

// anime({
//   targets: '.purple',
//   easing: 'spring(1, 100, 100, 100)',
//   left: {
//     value: 500,
//     duration: 4000,
//   }
// })


//easeOutElastic/Spring/Bounce
//  anime({
//   targets: '.blue',
//   easing: 'easeOutElastic(2,0.05)',
//   left: {
//     value: 500,
//     duration: 4000,
//   }
// })

// anime({
//   targets: '.red',
//   easing: 'spring' ,
//   left: {
//     value: 500,
//     duration: 4000,
//   }
// })

// anime({
//   targets: '.green',
//   easing: 'easeOutBounce',
//   left: {
//     value: 500,
//     duration: 4000,
//   }
// })



//easeOutElastic examples
//  anime({
//   targets: '.blue',
//   easing: 'easeOutElastic(1,0.5)',
//   left: {
//     value: 500,
//     duration: 4000,
//   },
//   loop: 2
// })

// anime({
//   targets: '.red',
//   easing: 'easeOutElastic(2,0.05)' ,
//   left: {
//     value: 500,
//     duration: 4000,
//   },
//   loop: 3
// })

// anime({
//   targets: '.green',
//   easing: 'easeOutElastic(1,0.1)',
//   left: {
//     value: 500,
//     duration: 4000,
//   }
// })

// Various Easings
// anime({
//   targets: '.blue',
//   easing: 'linear',
//   left: {
//     value: '50%',
//     duration: 2000,
//   }
// })

// anime({
//   targets: '.red',
//   easing: 'easeInCubic', //acelerates
//   left: {
//     value: '50%',
//     duration: 2000,
//   }
// })

// anime({
//   targets: '.green',
//   easing: 'easeInOutQuart', //acelerates
//   left: {
//     value: '50%',
//     duration: 2000,
//   }
// })
