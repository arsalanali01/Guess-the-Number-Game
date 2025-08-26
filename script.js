let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
console.log(secretNumber);

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  let message = document.querySelector(".message").textContent;
  if (!guess) {
    //no guess
    document.querySelector(".message").textContent =
      "Input a Number in the parameters";
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent = "Correct Number 🎉🎉";
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "#60b437";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    //combined code
    if (score > 0) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "Too High" : "Too Low"; // if guess is higher than 'Too High' else do 'Too low'
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost the game!";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
});
