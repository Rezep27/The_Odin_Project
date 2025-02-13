let humanScore = 0;
let computerScore = 0;

function transaleString(myStr){
    switch (myStr) {
        case "ROCK":
            return 3;
        case "PAPER":
            return 2;
        case "SCISSORS":
            return 1;
        default:
            return 3;
    }
}

function translateNumber(myStr){
    switch (myStr) {
        case 3:
            return "ROCK"
        case 2:
            return "PAPER";
        case 1:
            return "SCISSORS";
        default:
            break;
    }
}
function translate(query){
    if (typeof(query) === "number"){
        return translateNumber(query);
    }
    else{
        return transaleString(query);
    }
}

// Determines if the highValue won, lost, or tied.
function detWinner(highValue, lowValue){
    if (lowValue - highValue === 0){
        return 0;
    }
    else if (lowValue - highValue === -1){
        return -1;
    }
    else{
        return 1;
    }
}
function getComputerChoice(){
    let choice = Math.random();

    if (choice <= 0.33){
        // Rock equals 3
        return 3;
    }
    else if(choice <= 0.66){
        // Paper equals 2
        return 2;
    }
    else{
        // Scissors equals 1
        return 1;
    }
}

// We get the human choice from a prompt and translate it to its number equivalent
function getHumanChoice(){
    return translate(prompt("Insert your choice for this turn: ").toUpperCase());
}

function playRound(humanChoice , computerChoice){
    let hChoice = humanChoice();
    let cChoice = computerChoice();

    let result = 4;

    // If the computer choice is greater than the human choice in value (number)
    // we are going to place the computer choice first so that we can determine the winner using the function detWinner
    // and then invert the result, since the function gives us the win status of the first value
    if (hChoice < cChoice){
        result = detWinner(cChoice, hChoice) * -1;
    }
    else{
        result = detWinner(hChoice, cChoice);
    }

    // Display the corresponding messages based on the result
    switch (result) {
        case 0:
            alert(`It is a tie. Both picked ${translate(hChoice)}`);
            break;
        case 1:
            alert(`You won this round! ${translate(hChoice)} beats ${translate(cChoice)}`);
            humanScore += 1;
            break;
        case -1:
            alert(`You lost this round. ${translate(cChoice)} beats ${translate(hChoice)}`);
            computerScore += 1;
            break;
        default:
            alert("Hello, bug!")
            break;
    }

}

function playGame(){
    let numberOfRounds = 5;
    for (numberOfRounds; numberOfRounds >= 0; numberOfRounds--){
        playRound(getHumanChoice, getComputerChoice);
    }

    if(humanScore > computerScore){
        alert("Congratulations, you won the game!");
    }
    else if(humanScore < computerScore){
        alert("Shoots! You lost the game, better luck next time.")
    }
    else{
        alert("Both you and the computer ended up with the same final score. It is a tie")
    }
}

playGame();