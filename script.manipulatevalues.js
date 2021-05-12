//Manipulating Animation Values
// Value Default Units
/**
 * Px (Size related values)
 * translate
 * translateX
 * translateY
 * translateZ
 * perspective
 * 
 * deg (rotation related values)
 * rotate
 * rotateX
 * rotateY
 * rotateZ
 * skew
 * skewX
 * skewY
 */

anime({
  targets: '.square',
  left: '50%' //conversion value for move rather than pixels
})

anime({
  targets: '.rectangle',
  left: ['10px', '25%'],

})

anime({
  targets: '.circle',
  // translateX: '+=300', //moves diagonally
  // translateY: '+=300',
  translateX: anime.random(0,300),
  translateY: anime.random(50, 300)
})

//Relative Values
/**
 * Add += / transformX: { value: '+=2'}
 * Subtract -= / transformX: { value: '-=4'}
 * Multiply *= / transformX: { value: '*=2' }
 */

//Manipulating Animation Values
/**
 * Random: translateX: anime.random(0,300)
 * Relative: translateX: '+=300'
 * Specific: left: ['10px', '25%']
 */