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
    clearDom()

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
    let instructions = document.createElement('h2');
    instructions.innerText = 'This is where the instructions go';
    messagesEl.appendChild(instructions);

    //console.log(instructions);

    // appendChild to fill in humanHandEl
    // how to populate from humanHand
    // for every emoji I have, make a span and put it in the DOM

    for (let i = 0; i < humanHand.length; i++) {
        let humanSpan = document.createElement('span')
        humanSpan.innerText = humanHand[i]
        humanHandEl.appendChild(humanSpan)
        humanSpan.addEventListener('click', humanTurn)
    }

    //console.log(fillHumanHand);

    // appendChild to fill in aiHandEl
    // how to populate from aiHand
    for (let i = 0; i < aiHand.length; i++) {
        let aiSpan = document.createElement('span')
        aiSpan.innerText = aiHand[i]
        aiHandEl.appendChild(aiSpan)

    }

    // function to clear messages in console
    // clearMessages();

    // console.log(fishbowl);
    // console.log('initialize');
}

// this function clears all words and emojis from the DOM
const clearDom = () => {
    clearMessages()
    clearEmojis()
}

// function to clear the emojis
const clearEmojis = () => {
    while (humanHandEl.firstChild) {
        humanHandEl.removeChild(humanHandEl.firstChild)
    }
    while (aiHandEl.firstChild) {
        aiHandEl.removeChild(aiHandEl.firstChild)
    }
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
// an emoji is depleted from fishbowl and added to player's emojis
// if it is requested emoji, player gets it and goes again
// else if it is not requested emoji, player gets it and ai requests emoji from player
// if any player has nothing in hand, they must receive an emoji
// math.random, math.floor, for loop for emojis
// must append messages to console
// way to pull the return out of drawEmoji
const goFish = () => {

    // how to apply returned emoji randomEmoji possible return?
    let drawnEmoji = drawEmoji() // how to use returned emoji
        //console.log(drawnEmoji)
        // add emoji to state variable humanHand
    humanHand.push(drawnEmoji)
        // create span and add to humanHandEl
    let humanSpan = document.createElement('span')
    humanSpan.innerText = drawnEmoji
    humanHandEl.appendChild(humanSpan)

    //let playerRequestedEmoji = event.target.innerText

    // if (drawnEmoji != playerRequestedEmoji) {
    //     console.log(`You did not get a ${drawnEmoji} 😊 it is ai's turn`)
    // } else {
    //     console.log(`Oh look 🎆 you drew a ${drawnEmoji} you get to go again 🎉`)
    // }
    aiTurn()

}


// function for human to request emoji
// when click on span, function runs to choose emoji
// generates a request to ai for chosen emoji
// if aiHand.contains chosen emoji
// if the emojis go from ai hand to human hand 
// else go fish
const humanTurn = (event) => {
    let chosenEmoji = event.target.innerText
        //console.log(chosenEmoji);
    let callsIt = aiHand.includes(chosenEmoji)
        //console.log(callsIt);
    if (callsIt != true) {
        let messages = document.createElement('span')
        messages.innerText = (`No, go fish 🎣`)
        messagesEl.appendChild(messages)
        goFish()
    } else {
        let messages = document.createElement('span')
        messages.innerText = (`Yes, here you go 🐠`)
        messagesEl.appendChild(messages)
            //aiHandGive()

    }

    // code to humanTurn again

}

// function for ai requesting emoji
// choosing a span object
// humand hand .contains
// if nay go fish
// else here
// function for what happens when it is ai's turn
// ai requests emoji, humanHand gives it up/tells ai to goFish (automatic process)
// game reverts to human's turn
// must append messages to console
const aiTurn = () => {
    for (i = 0; i < aiHand.length; i++) {

    }
}

// Function to have emoji move from humanHandEl to aiHandEl
// take from humanHand 
// add to aiHand
const humanHandGive = () => {
    let giveToAi = humanHand.pop()
}


// Function to have emoji move from aiHandEl to humanHandEl
const aiHandGive = () => {
    let giveToHuman = aiHand.pop()
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