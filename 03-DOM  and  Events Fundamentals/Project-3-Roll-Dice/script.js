'use strict';
//selecting elements
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const dice1 = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

let scores, currentScore, activePlayer, playing;

//starting conditions
const initialization = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0; //the current active player
  playing = true;

  current0.textContent = 0;
  current1.textContent = 0;
  score0.textContent = 0;
  score1.textContent = 0;
  dice1.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};
initialization();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

// rolling dice functionality
// 1) generating the random dice roll
btnRoll.addEventListener('click', function () {
  if (playing) {
    let dice = Math.trunc(Math.random() * 6) + 1;
    // 1) Display the dice
    dice1.classList.remove('hidden');
    dice1.src = `dice-${dice}.png`;

    // 3) check for rolled 1 : if true switch to next player
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch the player
      switchPlayer();
    }
  }
});

//hold button functionality
btnHold.addEventListener('click', function () {
  if (playing) {
    // 1 add current score to active players  score
    scores[activePlayer] += currentScore; // i.e scores[1] = scores[1 + current score]
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. check if players score is >= 100
    if (scores[activePlayer] >= 50) {
      playing = false;
      dice1.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //switch the player
      switchPlayer();
    }
  }
});
btnNew.addEventListener('click', initialization);
