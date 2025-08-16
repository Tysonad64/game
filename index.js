

function getComputerChoice(choice) {
    let randomNumber = Math.random();
    let randomNumberTwo = randomNumber * 100;
    let randomNumberThree = (Math.floor(randomNumberTwo));

    if (randomNumberThree <= 33) {
        choice = "rock";
    } else if (randomNumberThree <= 66) {
        choice = "paper";
    } else {
        choice = "scissors";
    }

    return choice;

}
let ComputerChoice = getComputerChoice();

function getHumanChoice() {
    let userInput = prompt("Pick: Rock, Paper, or Scissors");
    return userInput;
}
let HumanChoice = getHumanChoice();

let humanScore = 0; 
let computerScore = 0;

    function playRound(theHumanChoice, theComputerChoice) {

        function getHumanChoice() {
        let userInput = prompt("Pick: Rock, Paper, or Scissors");
        return userInput;
        }
        let HumanChoice = getHumanChoice();
        console.log(HumanChoice);

        function getComputerChoice(choice) {
    let randomNumber = Math.random();
    let randomNumberTwo = randomNumber * 100;
    let randomNumberThree = (Math.floor(randomNumberTwo));

    if (randomNumberThree <= 33) {
        choice = "rock";
    } else if (randomNumberThree <= 66) {
        choice = "paper";
    } else {
        choice = "scissors";
    }

    return choice;

}
let ComputerChoice = getComputerChoice();
console.log(ComputerChoice);

        theHumanChoice = HumanChoice.toLowerCase(); 
        theComputerChoice = ComputerChoice; 

        if (theHumanChoice == theComputerChoice) {
        console.log("You tied, loser.");
        } else if (theHumanChoice == "rock" && theComputerChoice == "scissors" || theHumanChoice == "scissors" && theComputerChoice == "paper" || theHumanChoice == "paper" && theComputerChoice == "rock") {
        console.log("You win!");
        ++humanScore; 
        console.log("Your score", humanScore);
        console.log("Computer score", computerScore);
        } else {
        console.log("You lose!");
        ++computerScore; 
        console.log("Your score", humanScore);
        console.log("Computer score", computerScore);
        }
    }


        while (humanScore < 5 || computerScore < 5) {
            playRound(HumanChoice, ComputerChoice); 

            if (humanScore >= 5) {
                console.log("You have won the game!");
                break; 
            } else if (computerScore >= 5) {
                console.log("You lost the game to a computer :(");
                break;
            }
        }
