'use strict';

const check = document.querySelector('.check');
const scoreText = document.querySelector('.score');
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.number').textContent = secretNumber;
check.addEventListener('click', () => {
  let guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = '❌  No number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct number!';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '📈 Too high!';
    score--;
    scoreText.textContent = score;
  } else {
    document.querySelector('.message').textContent = '📉 Too low!';
    score--;
    scoreText.textContent = score;
  }
});
