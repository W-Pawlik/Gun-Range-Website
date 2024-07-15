'use strict';

class Game {
  constructor() {
    this.score = 0;
    this.time = 10;
    this.init();
  }

  init() {
    this.startButton = document.querySelector('.start-button');
    this.gameArea = document.querySelector('.game-area');
    this.currScore = document.querySelector('.curr-score');
    this.currScoreCont = document.querySelector('.curr-score-cont');

    this.timerEl = document.createElement('div');
    this.timerEl.classList.add('timer');

    this.startButton.addEventListener('click', () => {
      this.startGame();
    });
  }

  startGame() {
    this.score = 0;
    this.time = 10;
    this.gameArea.innerHTML = '';

    this.currScoreCont.innerHTML = `Current score: `;
    this.currScoreCont.appendChild(this.timerEl);
    this.timerEl.innerHTML = `Time left: ${this.time}s`;
    this.timer();

    this.spawnTarget();
  }

  timer() {
    const timerInterval = setInterval(() => {
      this.time--;
      this.timerEl.innerHTML = `Time left: ${this.time}s`;
      console.log(this.time);
      if (this.time === 0) {
        clearInterval(timerInterval);
        this.endGame();
      }
    }, 1000);
  }

  spawnTarget() {
    const target = document.createElement('img');
    target.setAttribute('class', 'target');
    target.setAttribute('src', './resources/images/target.png');

    const gameAreaHeight = this.gameArea.offsetHeight;
    const gameAreaWidth = this.gameArea.offsetWidth;

    this.gameArea.appendChild(target);

    target.addEventListener('click', () => {
      this.score++;
      this.currScore.innerHTML = `${this.score}`;
      this.currScoreCont.insertBefore(this.currScore, this.timerEl);

      target.style.pointerEvents = 'none';
    });

    setInterval(() => {
      const randTop = Math.random() * (gameAreaHeight - 100);
      const randLeft = Math.random() * (gameAreaWidth - 100);

      target.style.position = 'absolute';
      target.style.top = randTop + 'px';
      target.style.left = randLeft + 'px';
      target.style.pointerEvents = 'auto';
    }, 1000);
  }

  endGame() {
    this.gameArea.innerHTML = `<h1 class="start-button">Start game</h1>`;

    alert(`Game over! Your score: ${this.score}`);

    this.init();
    this.currScoreCont.innerHTML = '';
    this.timerEl.innerHTML = '';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Game();
});
