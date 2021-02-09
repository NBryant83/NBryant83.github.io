/* Constants */

/* Game Logic Variables and State */
let humanHand = [] // this represents the emojis in the human hand
let aiHand = [] // 
let fishbowl = [] // this represents how many emojis have not been played yet
let humanMatchPile = [] // this represents how many matches the human has
let aiMatchPile = [] // 

/* DOM References */
// reset button 
const resetButtonEl = document.querySelector('#reset')

// left section
const lSectionEl = document.querySelector('#left-section')

// right section
const rSectionEl = document.querySelector('#right-section')

// message area
const messagesEl = document.querySelector('#messages')

// fishbowl
const fishbowlEl = document.querySelector('#fishbowl')

// player hand
//const playerHandEl =

/* Functions and Game Logic */
const initialize = (event) => {

}

const goFish = (event) => {

}

const requestEmoji = (event) => {

}

/* Event Listeners */
// DOMContentLoaded - this is going to run the initialize function
document.addEventListener('DOMContentLoaded', initialize)

// fishbowl click - this is going to start the game
fishbowlEL.addEventListener('click', goFish)

// reset click - this restarts the game
resetButtonEl.addEventListener('click', initialize)

// player hand click - this selects emoji user is requesting
playerHandEl.addEventListener('click', requestEmoji)