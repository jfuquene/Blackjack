let player = {
    name: "John",
    chips: 500
}

let cards = []
let sum = 0

let hasBlackJack = false
let isAlive = false

let message = ""
let messageEl = document.getElementById("message")
let sumEl = document.getElementById("sum")
let cardsEl = document.getElementById("cards")
let playerEl = document.getElementById("player")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}