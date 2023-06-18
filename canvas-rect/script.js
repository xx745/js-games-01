let posX = 0;
let posY = 0;
const WIDTH = HEIGHT = 50;
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

function drawRect() {
  ctx.fillStyle = '#FF0000';
  ctx.fillRect(posX, posY, WIDTH, HEIGHT);
}

function displayKeyCode(keyCode) {
  const labelEl = document.getElementById('label');
  const codes = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
  }
  labelEl.innerText = codes[keyCode];
}

window.onkeydown = function (event) {
  let { keyCode } = event;

  displayKeyCode(keyCode);

  const left = 37;
  const up = 38;
  const right = 39;
  const down = 40;

  if (keyCode === right && posX <= 300) {
    posX = posX + 50;
  } else if (keyCode === left && posX > 0) {
    posX = posX - 50;
  } else if (keyCode === up && posY > 0) {
    posY = posY - 50;
  } else if (keyCode === down && posY <= 300) {
    posY = posY + 50;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawRect();
};

window.onload = drawRect();