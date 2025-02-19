"use strict";

const t0 = document.querySelector(".t0");
const t1 = document.querySelector(".t1");
const box0 = document.querySelector(".p0");
const score0 = document.querySelector(".s0");
const box1 = document.querySelector(".p1");
const score1 = document.querySelector(".s1");
const btnNew = document.querySelector(".new");
const img = document.querySelector(".image");
const btnRoll = document.querySelector(".roll");
const btnHold = document.querySelector(".save");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

let currentScore, scores, plactive, playing;

// Start of the game
function init() {
  currentScore = 0;
  scores = [0, 0];
  plactive = 0;
  playing = true;

  box0.textContent = 0;
  box1.textContent = 0;
  score0.textContent = 0;
  score1.textContent = 0;

  t1.textContent = "Player 2";
  t0.textContent = "Player 1";
  t0.classList.remove("hide");
  changePlayer();
}

init();

btnRoll.addEventListener("click", function () {
  if (playing) {
    // Randome Number
    let rollNumber = Math.trunc(Math.random() * 6 + 1);
    img.src = `img/dice-${rollNumber}.png`;
    img.style.opacity = 1;

    // rolle the dice and scoring
    if (rollNumber !== 1) {
      currentScore += rollNumber;
      document.querySelector(`.s${plactive}`).textContent = currentScore;
    } else {
      // Changing player
      changePlayer(score0);
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    //Saving the score
    scores[plactive] += currentScore;
    document.querySelector(`.p${plactive}`).textContent = scores[plactive];

    // Finish The Game
    if (scores[plactive] >= 10) {
      plactive === 0
        ? result(t0, t1, score0, score1)
        : result(t1, t0, score1, score0);
      playing = false;
      img.style.opacity = 0;
    } else {
      // Changing player
      changePlayer();
    }
  }
});

// Start again the game
btnNew.addEventListener("click", init);

// The Winner and Loser
function result(win, lose, mark1, mark2) {
  win.textContent = "WIN";
  lose.textContent = "LOSE";
  mark1.textContent = "🎉";
  mark2.textContent = "🎃";
}

// Switch player
function changePlayer() {
  left.classList.toggle("active");
  right.classList.toggle("active");
  document.querySelector(`.s${plactive}`).textContent = 0;
  currentScore = 0;
  plactive = plactive === 0 ? 1 : 0;
}
