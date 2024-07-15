    //these keep track of scores of both players
    let humanScore = 0;
    let computerScore = 0;

    //function that gets computer's choice 
function getComputerChoice(){
    let choice = '';
    let num = parseInt(Math.random()*1000);
    if(num%2===0){
        choice = 'rock';
    } else if(num%3===0){
        choice = 'paper';
    } else{
        choice = 'scissors';
    }
    return choice;
}
//adding references to variables for the messages
let humanScoreTrack = document.querySelector("#humanScoreTrack");
let compScoreTrack = document.querySelector("#compScoreTrack");
let roundResult = document.querySelector("#roundResult");
let finalResult = document.querySelector("#finalResult");

    //function for playing one round of rps
    function playRound(humanChoice, computerChoice){
        const humanSelects = humanChoice;
        const compSelects = computerChoice;
        if(humanSelects === 'rock'){
            if(compSelects === 'rock'){
                roundResult.textContent = "It's a tie! Both chose Rock";
                return;
            }
            else if(compSelects==='paper'){
                roundResult.textContent = "You lose! Paper beats Rock";
                computerScore++;
            } else{
                roundResult.textContent = "You win! Rock beats Scissors";
                humanScore++;
            }
        }
        if(humanSelects === 'paper'){
            if(compSelects === 'paper'){
                roundResult.textContent = "It's a tie! Both chose Paper";
                return;
            }
            else if(compSelects==='Scissor'){
                roundResult.textContent = "You lose! Scissor beats Paper";
                computerScore++;
            } else{
                roundResult.textContent = "You win! Paper beats Rock";
                humanScore++;
            }
        }
        if(humanSelects === 'scissors'){
            if(compSelects === 'scissors'){
                roundResult.textContent = "Tie! Both chose Scissors";
                return;
            }
            else if(compSelects==='rock'){
                roundResult.textContent = "You lose! Rock beats Scissors"
                computerScore++;
            } else{
                roundResult.textContent = "You win! Scissors beat Paper";
                humanScore++;
            }
        }
    }


     //code that gives final score and winner
    if(humanScore>computerScore){
        console.log("Congratulations! You win");
    } else if(humanScore<computerScore){
        console.log("You lose! Better luck next time");
    } else{
        console.log("A tie! Rematch?");
    }
      
//creating buttons for all three options for human's choice
let rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () =>{
    finalResult.textContent = ''; //cleaning result message from previous game
    playRound('rock', getComputerChoice());

    humanScoreTrack.textContent = "Your Score: " + humanScore;
    compScoreTrack.textContent = "Computer\'s Score: " + computerScore;
    
    //logic for winning the whole game, first to five points wins
    if(humanScore == 5 || computerScore == 5){
        if(humanScore == computerScore){
            finalResult.textContent = "A Tie! Rematch?";
        } else if (humanScore>computerScore){
            finalResult.textContent = "Congratulations! You won";
        } else{
            finalResult.textContent = "You lost! Better luck next time";
        }
        humanScore = 0;
        computerScore = 0;
    }
});

let paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () => {
    finalResult.textContent = ''; //cleaning result message from previous game
    playRound('paper', getComputerChoice());

    humanScoreTrack.textContent = "Your Score: " + humanScore;
    compScoreTrack.textContent = "Computer\'s Score: " + computerScore;

    if(humanScore == 5 || computerScore == 5){
        if(humanScore == computerScore){
            finalResult.textContent = "A Tie! Rematch?";
        } else if (humanScore>computerScore){
            finalResult.textContent = "Congratulations! You won";
        } else{
            finalResult.textContent = "You lost! Better luck next time";
        }
        humanScore = 0;
        computerScore = 0;
    }
});

let scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", () => {
    finalResult.textContent = ''; //cleaning result message from previous game
    playRound('scissors', getComputerChoice());
    
    humanScoreTrack.textContent = "Your Score: " + humanScore;
    compScoreTrack.textContent = "Computer\'s Score: " + computerScore;

    if(humanScore == 5 || computerScore == 5){
        if(humanScore == computerScore){
            finalResult.textContent = "A Tie! Rematch?";
        } else if (humanScore>computerScore){
            finalResult.textContent = "Congratulations! You won";
        } else{
            finalResult.textContent = "You lost! Better luck next time";
        }
        humanScore = 0;
        computerScore = 0;
    }
});


