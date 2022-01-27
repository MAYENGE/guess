"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".again").onclick = function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".number").style.width = "8rem";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").style.color = "black";
  document.querySelector(".highscore").style.color = "white";
  document.querySelector(".score").style.color = "white";
  document.querySelector(".message").style.color = "white";
  document.querySelector(".again").style.color = "black";
};
document.querySelector(".check").onclick = function () {
  const guess = Number(document.querySelector(".guess").value);
   
  if (!guess) {
    displayMessage("⛔No number");
  } else if (guess === secretNumber) {
     document.querySelector(".guess").value = "";
    displayMessage("🎉Correct number");
    document.querySelector(".message").style.color = "red";
    
      document.querySelector(".highscore").textContent = highScore;
      document.querySelector("body").style.backgroundColor = "blue";
      document.querySelector(".number").style.width = "15rem";
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector(".number").style.color = "purple";
      document.querySelector(".highscore").style.color = "red";
      document.querySelector(".score").style.color = "red";
      document.querySelector(".again").style.color = "red";
      if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈Too high" : "📉Too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥You lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }
};

