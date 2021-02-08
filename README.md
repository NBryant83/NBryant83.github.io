# P1-Go-Fish
## Purpose of the game
Beat the computer at my rendition of Go Fish! The object of the game is to be the first one to be finished making matches, (4 of any card is an automatic match.), with the cards in your possession once the cards in the deck, the fishpile, is empty.
### Instructions
- There are no emojis on the screen and the console reads: 'Click the fishbowl to start the game'
- User clicks on the fishpile to start the game
    - User emojis become visible on left side 
    - computer emojis become visible on right side
- User clicks an emoji they wish to match, (this is how to request an emoji)
    - computer checks request against what is in their hand and returns
        - if computer has requested emoji, user gets it/them and requests another
        - if computer does not have requested emoji, user clicks the fishpile to get another emoji
            - if user gets emoji they requested, they get to start a new request
            - if user does not get the emoji they requested, it is now the computer's turn to request and go through the entire process
- The game is won by whoever has matched and run out of emojis by the time the fishbowl is empty
