'use strict';
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  let guessValue = Number(document.querySelector('.guess').value);

  // When player wins
  if (guessValue === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //When there is invalid input
  else if (!guessValue) {
    document.querySelector('.message').textContent =
      '🛑 Please enter a number ( 1 - 20 )!';
  }
  // When guess is high
  else if (guessValue > secretNumber && score > 1) {
    document.querySelector('.message').textContent = '📉 Guess Lower!';
    score--;
    document.querySelector('.score').textContent = score;
  }
  // When guess is low
  else if (guessValue < secretNumber && score > 1) {
    document.querySelector('.message').textContent = '📈 Guess Higher!';
    score--;
    document.querySelector('.score').textContent = score;
  }
  // When player lose
  else {
    document.querySelector('.message').textContent = '💥 Game Over';
    document.querySelector('.score').textContent = 0;
    document.querySelector('body').style.backgroundColor = '#DC143C';
  }
  //When Again
  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
  });
});
