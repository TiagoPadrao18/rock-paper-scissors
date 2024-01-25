const buttons = document.getElementsByClassName("btn");
let userResponse = document.getElementById("result");
let computerResponse = document.getElementById("computer-res");
let resultWinner = document.getElementById("winner");
let drawString = "Draw";

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    let playerChosedOption = buttons[i].value;
    let computerChoseOption = computerResponseFunction();
    userResponse.innerText = playerChosedOption;
    computerResponse.innerText = computerChoseOption;
    resultWinner.innerText = verifyWhoWin(
      playerChosedOption,
      computerChoseOption,
      drawString
    );
  });
}

function computerResponseFunction() {
  const computerAnswer = buttons[Math.floor(Math.random() * buttons.length)];
  return computerAnswer.value;
}

function verifyWhoWin(player1, player2, draw) {
  if (
    (player1 === "Rock" && player2 === "Scissor") ||
    (player1 === "Paper" && player2 === "Rock") ||
    (player1 === "Scissor" && player2 === "Paper")
  ) {
    return "Player 1 Win";
  } else if (player1 === player2) {
    return draw;
  } else {
    return "Computer Win";
  }
}
