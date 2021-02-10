/* Constants */
// how many emojis are in the game in total
const TOTAL_HAND = 40

/* Game Logic Variables and State */
let humanHand = [] // this represents the emojis in the human hand
let aiHand = [] // 
let fishbowl = [] // this represents how many emojis have not been played yet
let humanMatchPile = [] // this represents how many matches the human has
let aiMatchPile = [] // 
let messages = ('')

/* DOM References */
// reset button 
const resetButtonEl = document.querySelector('#reset')

// left section
const humanMatchPileEl = document.querySelector('#human-match-pile')

// right section
const aiMatchPileEl = document.querySelector('#ai-match-pile')

// message area
const messagesEl = document.querySelector('#messages')

// fishbowl
const fishbowlEl = document.querySelector('#fishbowl')

// human hand
const humanHandEl = document.querySelector('#human-hand')

// ai hand
const aiHandEl = document.querySelector('#ai-hand')

/* Functions and Game Logic */
// function to start game
// fishbowl is full
// humanHandEl and aiHandEl each have 5 emojis
// humanMatchPileEl and aiMatchPileEl are empty
// messagesEl is showing gameplay instructions
// appendChild 
// math.random, math.floor, for loop for emojis
// show instructions in console div
// fill player emoji sections
const initialize = (event) => {
    humanHand = []
    aiHand = []
    fishbowl = []
    humanMatchPile = []
    aiMatchPile = []

    // filling the fishbowl with 40 emojis
    for (let i = 0; i < 4; i++) {
        fishbowl.push('😾', '🐶', '🐘', '🦄', '🐮', '🦁', '🦚', '🐬', '🐳', '🐁');
    }
    // this for loop is to draw human and ai 5 initial emojis
    for (let i = 0; i < 5; i++) {
        humanHand.push(drawEmoji())
        aiHand.push(drawEmoji())
    }
    // appendChild to show instructions in messagesEl



    // appendChild to fill in emoji sections


    // function to clear messages in console
    // clearMessages();

    // console.log(fishbowl);
    // console.log('initialize');
}

// function to clear the messages display
const clearMessages = () => {
    while (messagesEl.firstChild) {
        messagesEl.removeChild(messagesEl.firstChild)
    }
}


// function to draw random emoji
// needs to run for ai and human
// takes random emoji out of fishbowl and returns it
const drawEmoji = () => {
    let randomIndex = Math.floor(Math.random() * fishbowl.length)
    let randomEmoji = fishbowl.splice(randomIndex, 1)[0]
        // console.log(`This is the emoji we removed: ${randomEmoji}`)
        // console.log(`${fishbowl}`)
    return randomEmoji
}

// function for human to receive another emoji
// player clicks on fishbowl, an emoji is depleted from fishbowl and added to player's emojis
// if it is requested emoji, player gets it and goes again
// else if it is not requested emoji, player gets it and ai requests emoji from player
// if any player has nothing in hand, they must receive an emoji
// math.random, math.floor, for loop for emojis
// must append messages to console
const goFish = (event) => {

}

// function for what happens when it is ai's turn
// ai requests emoji, humanHand gives it up/tells ai to goFish (automatic process)
// game reverts to human's turn
// must append messages to console
const aiTurn = (event) => {

}

// function for what happens when human wins
// gameplay is ceased
// 'You win', 'click reset to start new game' is appended in messages div
// stretch: emojis perform a parade in div as well
const humanWins = (event) => {

}

// function for what happens when ai wins
// gameplay is ceased
// 'The computer wins', 'click reset to start new game' is appended in messages div
// stretch: ai emojis parade in div as well
const aiWins = (event) => {

}


/* Event Listeners */
// DOMContentLoaded - this is going to run the initialize function
document.addEventListener('DOMContentLoaded', initialize)

// fishbowl click - this is going to start the game
fishbowlEl.addEventListener('click', goFish)

// reset click - this restarts the game
resetButtonEl.addEventListener('click', initialize)

// player hand click - this selects emoji user is requesting
humanHandEl.addEventListener('click', goFish)