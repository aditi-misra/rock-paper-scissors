function getComputerChoice(){
    let choice = '';
    let num = parseInt(Math.random()*10);
    if(num%2===0){
        choice = 'rock';
    } else if(num%3===0){
        choice = 'paper';
    } else{
        choice = 'scissors';
    }
    return choice;
}
function getHumanChoice(){
    let humChoice = prompt("rock, paper, scissors?");
    return humChoice;
}


//function for playing a game of x rounds and then declaring a winner
function playGame(){
    //these keep track of scores of both players
    let humanScore = 0;
    let computerScore = 0;
    //function for playing one round of rps
    function playRound(humanChoice, computerChoice){
        const humanSelects = humanChoice.toLowerCase();
        const compSelects = computerChoice;
        if(humanSelects === 'rock'){
            if(compSelects === 'rock'){
                console.log("Tie! Both chose Rock");
            }
            else if(compSelects==='paper'){
                console.log("You lose! Paper beats Rock");
                computerScore++;
            } else{
                console.log("You win! Rock beats Scissors");
                humanScore++;
            }
        }
        if(humanSelects === 'paper'){
            if(compSelects === 'paper'){
                console.log("Tie! Both chose Paper");
            }
            else if(compSelects==='Scissor'){
                console.log("You lose! Scissor beats Paper");
                computerScore++;
            } else{
                console.log("You win! Paper beats Rock");
                humanScore++;
            }
        }
        if(humanSelects === 'scissors'){
            if(compSelects === 'scissors'){
                console.log("Tie! Both chose Scissors");
            }
            else if(compSelects==='rock'){
                console.log("You lose! Rock beats Scissors");
                computerScore++;
            } else{
                console.log("You win! Scissors beat Paper");
                humanScore++;
            }
        }
    }
        

    //code that gives final score and winner
    console.log('Your Score: '+ humanScore);
    console.log('Computer\'s Score: '+ computerScore);
    if(humanScore>computerScore){
        console.log("Congratulations! You win");
    } else if(humanScore<computerScore){
        console.log("You lose! Better luck next time");
    } else{
        console.log("A tie! Rematch?");
    }

}
playGame();

//creating buttons for all three options for human's choice
const rockBtn = document.createElement("button");
rockBtn.textContent = "Rock";

const paperBtn = document.createElement("button");
paperBtn.textContent = "Paper";

const scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "Scissors";

