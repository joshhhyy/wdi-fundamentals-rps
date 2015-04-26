////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
    
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    switch (playerMove) {
        case 'rock':
            if (computerMove === 'rock') {
                winner = 'tie';
            } else if (computerMove === 'paper') {
                winner = 'computer';
            } else {
                winner = 'player';
            }
            return winner;
            
        case 'paper':
            if (computerMove === 'rock') {
                winner = 'player';
            } else if (computerMove === 'paper') {
                winner = 'tie';
            } else {
                winner = 'computer';
            }
            return winner;
            
        case 'scissors':
            if (computerMove === 'rock') {
                winner = 'computer';
                console.log('Computer wins!')
            } else if (computerMove === 'paper') {
                winner = 'player';
            } else {
                winner = 'tie';
            }
            return winner;
        
        }
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    console.log('Player chose ' + playerMove + '. While Computer chose ' +  computerMove);
    switch (winner) {
        case 'player':
            playerWins += 1;
            break;
            
        case 'computer':
            computerWins += 1;
            break;
            
        default:
            console.log('No one is a winner')
            break;
    }
    if (playerWins === 5) {
        console.log('Player has beaten Computer in a first-to-five')
    } else if (computerWins ===5) {
        console.log('Computer has beaten player in a first-to-five ')
    } else {
        console.log('The score is currently ' + playerWins + ' to ' + computerWins);
        
	getInput()
         
    }
// UNFINISHED, looking for advice on how to get this working
    return [playerWins, computerWins];
}
