let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const LoworHigh = document.querySelector('.lowOrHi')
const remaining = document.querySelector('.lastResult')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1;

let playGame = true

if(playGame) {
  submit.addEventListener('click',function(e) {
    e.preventDefault()
    const guess = parseInt(userInput.value)
    validateGuess(guess)
  })
}

function validateGuess(guess) {
  if(isNaN(guess)) {
    alert(`Please enter a valid number`)
  } else if(guess < 1) {
    alert(`Pleae enter a number greater than 1`)
  } else if(guess > 100) {
    alert(`Pleae enter a number less than 100`)
  } else {
    prevGuess.push(guess)
    if(numGuess > 10) {
      displayGuess(guess)
      displayMessage(`Game Over. Random number was ${randomNumber}`)
      endGame()
    } else {
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess) {
  if(guess === randomNumber) {
    displayMessage(`You gussed it right`)
    endGame()
  } else if( guess > randomNumber) {
    displayMessage(`Number is TOOOO HIGH`)
  } else if( guess < randomNumber) {
    displayMessage(`Number is TOOO LOW`)
  }
}

function displayGuess(guess) {
  userInput.value = ''
  guessSlot.innerHTML += `${guess}   `
  numGuess++
  remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message) {
  LoworHigh.innerHTML = `<h3>${message}</h3>`
}

function endGame() {
  userInput.value = ''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start a new game</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame()
}

function newGame() {
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click',function(e) {
    randomNumber = parseInt(Math.random() * 100 + 1)
    prevGuess = []
    userInput.removeAttribute('disabled')
    numGuess = 1
    remaining.innerHTML = `${11-numGuess}`
    startOver.removeChild(p)
    guessSlot.innerHTML = ''
    playGame = true
  })
}