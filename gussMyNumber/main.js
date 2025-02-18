"Use Strict";

const body = document.querySelector(".body");
const again = document.querySelector(".again");
const title = document.querySelector(".title");
const goal = document.querySelector(".goalNumber");
const number = document.querySelector(".number");
const check = document.querySelector(".check");
const result = document.querySelector(".result");
const score = document.querySelector(".scoreNumber");
const highScore = document.querySelector(".highScoreNumber");

console.log(highScore.textContent);

let currentScore = score.textContent;

again.addEventListener("click", startAgain);

let goalNumber = Math.trunc(Math.random() * 20 + 1);
function startAgain() {
  goalNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(goalNumber);
  body.style.backgroundColor = "rgb(47, 47, 47)";
  result.textContent = "What is the number❓";
  currentScore = 20;
  score.textContent = currentScore;
  number.value = "";
  goal.textContent = "?";
}

check.addEventListener("click", function () {
  let input = number.value;

  //   when it is a correct input
  if (input >= 1 && input <= 20) {
    if (input == goalNumber) {
      result.textContent = "🎉 Awesome it is correct";
      body.style.backgroundColor = "green";
      goal.textContent = goalNumber;
      goal.style.opacity = 1;

      //   save the highScore
      if (currentScore > highScore.textContent) {
        highScore.textContent = currentScore;
      }
    }
    // when it is greater
    else {
      if (input < goalNumber) {
        if (currentScore > 1) {
          currentScore--;
          score.textContent = currentScore;
          result.textContent = "📈 It is greater";
        } else {
          result.textContent = "🎃 You lost the game";
        }
      }
      //   when it is smaller
      else if (input > goalNumber) {
        if (currentScore > 1) {
          currentScore--;
          score.textContent = currentScore;
          result.textContent = "📉 It is smaller";
        } else {
          result.textContent = "🎃 You lost the game";
        }
      }
    }
  }
  //   Wrong input number
  else {
    result.textContent = "It should be a number between 1 and 20";
  }
});
