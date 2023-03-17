'use strict';
let randomNumber;
let score = 20;
let highscore = 0;
randomNumber = Math.trunc(Math.random() * 20 + 1);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent =
      '📛Wrong Number. Try Again...';
  } else if (guess === randomNumber) {
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('.message').textContent = '🤙Correct Answer!🤙';
    document.querySelector('body').style.backgroundColor = '#01FE01';
    document.querySelector('.number').style.width = '250px';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess != randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > randomNumber
          ? '📈Too High! Try Again...'
          : 'Too Low! Try Again...';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.number').textContent = randomNumber;
      document.querySelector('.message').textContent = '💥You Lost...💥';
      document.querySelector('.score').textContent = '0';
      document.querySelector('body').style.backgroundColor = '#FE0101';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = randomNumber;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '150px';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
