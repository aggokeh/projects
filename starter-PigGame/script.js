'use strict';

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0Elem = document.querySelector('#score--0');
const score1Elem = document.getElementById('score--1');
const currentScore0Elem = document.getElementById('current--0');
const currentScore1Elem = document.getElementById('current--1');
const diceElem = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn--roll');
const newBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');

let currentScore;
let activePlayer;
let totalScore;

const init = function () {
  currentScore = 0;
  activePlayer = 0;
  totalScore = [0, 0];

  score0Elem.textContent = 0;
  score1Elem.textContent = 0;
  currentScore0Elem.textContent = 0;
  currentScore1Elem.textContent = 0;

  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  diceElem.classList.add('hidden');

  rollBtn.disabled = false;
  holdBtn.disabled = false;
};

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
};

init();

rollBtn.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6 + 1);
  diceElem.classList.remove('hidden');
  diceElem.src = `dice-${dice}.png`;

  if (dice != 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    switchPlayer();
  }
});

holdBtn.addEventListener('click', function () {
  totalScore[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    totalScore[activePlayer];

  if (totalScore[activePlayer] >= 100) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    diceElem.classList.add('hidden');
    rollBtn.disabled = true;
    holdBtn.disabled = true;
    diceElem.classList.add('hidden');
  }
  switchPlayer();
});

newBtn.addEventListener('click', init);
