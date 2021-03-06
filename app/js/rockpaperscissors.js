////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
//'use strict';

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
    while ((playerWins < 5) && (computerWins < 5)) {
        var playerMove = getPlayerMove(getInput());
        var computerMove = getComputerMove(randomPlay());
        //seperate console.logs for improved readability in console
        console.log(' ')
        console.log('Player chose: ' + playerMove);
        console.log('Computer chose: ' + computerMove);
        console.log(' ')
        
        
        if (getWinner(playerMove, computerMove) == 'computer') {
            computerWins += 1;
            console.log('Computer wins this round!');
        } else if (getWinner(playerMove, computerMove) == 'player') {
            playerWins += 1;
            console.log('Player wins this round!');
        } else {
            console.log('No one wins this round!');
        }
        console.log ('The score is currently: ' + [playerWins, computerWins         ]);
        
    }
    if (playerWins == 5) {
        return console.log ('  Player is the winner!')
    } else if (computerWins == 5)  {
        return console.log('  Computer is the winner!')
    }
}
playToFive()
