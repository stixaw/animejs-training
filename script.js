var bgImageArray = ["CHGCoreValuesGraphic.png", "CHGLOGO.png"],
base = "/images/",
secs = 4;
bgImageArray.forEach(function(img){
    new Image().src = base + img; 
    // caches images, avoiding white flash between background replacements
});

function backgroundSequence() {
  window.clearTimeout();
  var k = 0;
  for (i = 0; i < bgImageArray.length; i++) {
    setTimeout(function(){ 
      document.getElementById('container').style.background = "url(" + base + bgImageArray[k] + ") no-repeat center center";
    if ((k + 1) === bgImageArray.length) { setTimeout(function() { backgroundSequence() }, (secs * 2300))} else { k++; }      
    }, (secs * 2300) * i) 
  }
}

backgroundSequence()

anime({
  targets: '.animateMe',
  easing: 'linear',
  translateX: '50%',
  duration: 9000,
  loop: true,
  direction: 'alternate'
})

/**
 * Animates 6x6 blocks to CHG letters
 */

anime({
  targets: '.grid-container#C div',
  translateX: anime.stagger(100, { grid: [3, 3], from: 'first', axis: 'x' }),
  translateY: anime.stagger(100, { grid: [3, 3], from: 'last', axis: 'y' }),
  rotateZ: anime.stagger([0, 45], { from: 'center', axis: 'x' }),
  delay: anime.stagger(200, { start: 500, end: 500, grid: [3, 3], from: '5' }),
  easing: 'linear',
  duration: 2000,
  loop: true,
  direction: 'alternate'
})

anime({
  targets: [
    '#C .div9',
    '#C .div10',
    '#C .div15',
    '#C .div16',
    '#C .div17',
    '#C .div18',
    '#C .div21',
    '#C .div22',
    '#C .div23',
    '#C .div24',
    '#C .div27',
    '#C .div28'
  ],
  opacity: [1, 0],
  easing: 'linear',
  duration: 2500,
})

anime({
  targets: '.grid-container#H div',
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
  targets: [
    '#H .div3',
    '#H .div4',
    '#H .div9',
    '#H .div10',
    '#H .div27',
    '#H .div28',
    '#H .div33',
    '#H .div34'
  ],
  opacity: [1, 0],
  easing: 'linear',
  duration: 2500,
})

anime({
  targets: '.grid-container#G div',
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
  targets: [
    '#G .div9',
    '#G .div10',
    '#G .div15',
    '#G .div16',
    '#G .div17',
    '#G .div18',
    '#G .div21',
    '#G .div27',
    '#G .div28'
  ],
  opacity: [1, 0],
  easing: 'linear',
  duration: 2500,
})
