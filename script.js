const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const resultText = document.getElementById("result-text");
const choices = document.querySelectorAll(".choice");

let userScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
};

const getResult = (user, computer) => {
  if (user === computer) return "draw";
  if (
    (user === "rock" && computer === "scissors") ||
    (user === "scissors" && computer === "paper") ||
    (user === "paper" && computer === "rock")
  ) {
    return "win";
  }
  return "lose";
};

const showResult = (userChoice, computerChoice, result) => {
  if (result === "win") {
    userScore++;
    resultText.textContent = `You Win! ${userChoice} beats ${computerChoice}`;
  } else if (result === "lose") {
    computerScore++;
    resultText.textContent = `You Lose! ${computerChoice} beats ${userChoice}`;
  } else {
    resultText.textContent = `It's a Draw! You both chose ${userChoice}`;
  }
  userScoreSpan.textContent = userScore;
  computerScoreSpan.textContent = computerScore;
};

choices.forEach(button => {
  button.addEventListener("click", () => {
    const userChoice = button.id;
    const computerChoice = getComputerChoice();
    const result = getResult(userChoice, computerChoice);
    showResult(userChoice, computerChoice, result);
  });
});
