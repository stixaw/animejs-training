import anime from 'animejs'

export function animation(element) {
    anime({
        targets: element,
        position: 300
    })
}