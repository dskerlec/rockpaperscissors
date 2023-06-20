let computer;
let player;
let winner;
let playerWins = 0;
let computerWins = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0)
        return "rock";
    else if (choice === 1)
        return "paper";
    else
        return "scissors";
}

function getPlayerChoice() {
    let choice = prompt("Throw rock (R), paper (P) or scissors (S)");
    if (choice.toLowerCase() === "rock" || choice.toLowerCase() === "r")
        return "rock";
    else if (choice.toLowerCase() === "paper" || choice.toLowerCase() === "p")
        return "paper";
    else
        return "scissors";
}

function playRound(computerChoice, playerChoice) {
    let winner;
    if (computerChoice === playerChoice)
        winner = "draw";
    else if (computerChoice === "rock" && playerChoice === "scissors")
        winner = "computer";
    else if (computerChoice === "scissors" && playerChoice === "paper")
        winner = "computer";
    else if (computerChoice === "paper" && playerChoice === "rock")
        winner = "computer";
    else
        winner = "player";

    return winner;
}

function getResults(winner, computerChoice, playerChoice) {
    let results;
    if (winner === "player")
        results = `You Win! ${playerChoice} beats ${computerChoice}`;

    else if (winner === "computer")
        results = `You Lose! ${computerChoice} beats ${playerChoice}`;
    
    else
        results = `Draw! You both threw ${playerChoice}`;

    return results;
}

function updateScore(winner) {
    if (winner === "player")
        playerWins++;

    else if (winner === "computer")
        computerWins++;
}

for (i = 0; i <= 4; i++)
{
    computer = getComputerChoice();
    player = getPlayerChoice();
    winner = playRound(computer, player);
    updateScore(winner);
    console.log(getResults(winner, computer, player));
    console.log(`Score: You: ${playerWins} 
    Computer: ${computerWins}`)
}
