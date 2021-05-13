//javascript objects
// const myObject = { prop1: 0, prop2: "0%"}
// const animation = anime({
//   targets: myObject,
//   prop1: 100,
//   prop2: "100%"
// })

const squareStats = document.querySelector('#stats')

const squareDistance = {
  distance: 0,
  progress: '0%',
}

anime({
  targets: '.square',
  left: 300,
})

anime({
  targets: squareDistance,
  distance: 300,
  progress: '100%',
  round: 1, //rounds the values to a whole number
  easing: 'linear', //display in consecutive way
  update: function(){
    squareStats.innerHTML = JSON.stringify(squareDistance)
    // squareStats.innerHTML = Object.values(squareDistance)
    // squareStats.innerHTML = squareDistance.distance
  }
})

anime({
  targets: '.countUp',
  value: [0,20],
  round: 1,
  easing: 'linear',
  duration: 3000,
})