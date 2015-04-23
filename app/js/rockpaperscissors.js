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
    var move;
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move = move || getInput();
    
}

function getComputerMove(move) {
    var computerMove;
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move = move || randomPlay;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    switch (playerMove){
        case 'rock':
            if (computerMove === 'rock') {
                winner = 'Its a tie!'
            } else if (computerMove === 'paper') {
                winner = 'Computer wins!'
            } else {
                winner = 'Player wins!'
            }
            return winner;
            break;
            
        case 'paper':
            if (computerMove === 'rock') {
                winner = 'Player wins!'
            } else if (computerMove === 'paper') {
                winner = 'Its a tie!'
            } else {
                winner = 'Computer Wins'
            }
            return winner;
            break;
            
        case 'scissors':
            if (computerMove === 'rock') {
                winner = 'Computer Wins!'
            } else if (computerMove === 'paper') {
                winner = 'Player Wins!'
            } else {
                winner = 'Its a tie!'
            }
            return winner;
            break;
        
        }
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

