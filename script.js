'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!!🎉';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 10;
// console.log(document.querySelector('.guess').value);
let randomNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //when no input
  if (!guess) {
    // document.querySelector('.message').textContent ='No Number!!😒😒' ;
    displayMessage('No Number!!😒😒');
  }
  //When player win
  else if (guess === randomNumber) {
    // document.querySelector('.message').textContent = '🎉🎉Correct Number';
    displayMessage('🎉🎉Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //whenguess is wong
  else if (guess !== randomNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > randomNumber ? '📈too high' : '📉too Low';
      score--;
      displayMessage(guess > randomNumber ? '📈too high' : '📉too Low');
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 you lost the game!';
      displayMessage('💥 you lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  // //guess is high
  // else if (guess > randomNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈too high';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 you lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // //when guess is low
  // else if (guess < randomNumber && guess !== 0) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉too Low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 you lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  score = 20;
  randomNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').textContent = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
