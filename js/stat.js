'use strict';

function findMaxTime(arr) {
  var maxTime = 0;
  /* var maxTimeIndex = 0; */
  for (var i = 0; i < arr.length; i++) {
    var time = arr[i];
    if (time > maxTime) {
      maxTime = time;
      /* maxTimeIndex = i; */
    }
  }
  return maxTime;
}

function getRandomOpacity(min, max) {
  return Math.random() * (max - min + 1) + min;
}

window.renderStatistics = function (ctx, names, times) {

  var pointsOfShadow = [110, 20, 150, 40, 190, 20, 230, 40, 270, 20, 310, 40,
    350, 20, 390, 40, 430, 20, 490, 30, 530, 20, 510, 46, 530, 72, 510,
    98, 530, 124, 510, 150, 530, 176, 510, 202, 530, 228, 510, 254, 530, 290,
    490, 270, 440, 290, 390, 270, 350, 290, 310, 270, 270, 290, 230, 270, 190,
    290, 150, 270, 110, 290, 130, 254, 110, 228, 130, 202, 110, 176, 130, 150,
    110, 124, 130, 98, 110, 72, 130, 46];

  var pointsOfUp = [100, 10, 140, 30, 180, 10, 220, 30, 260, 10, 300, 30, 340, 10, 380, 30, 420, 10, 480, 30, 520, 10,
    500, 36, 520, 62, 500, 88, 520, 114, 500, 140, 520, 166, 500, 192, 520, 218, 500, 244, 520, 280,
    480, 260, 420, 280, 380, 260, 340, 280, 300, 260, 260, 280, 220, 260, 180, 280, 140, 260, 100, 280,
    120, 244, 100, 218, 120, 192, 100, 166, 120, 140, 100, 114, 120, 88, 100, 62, 120, 36];

  function paintFigure(arr) {
    ctx.beginPath();
    for (var i = 0; i < arr.length; i = i + 2) {
      if (i === 0) {
        ctx.moveTo(arr[i], arr[i + 1]);
      } else {
        ctx.lineTo(arr[i], arr[i + 1]);
      }
    }
    ctx.stroke();
    ctx.fill();
  }

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.7)';
  paintFigure(pointsOfShadow);

  var gradient = ctx.createLinearGradient(100, 10, 420, 270);
  gradient.addColorStop(0, 'green');
  gradient.addColorStop(1, 'white');

  ctx.fillStyle = gradient;
  ctx.strokeStyle = 'green';
  ctx.lineWidth = 5;
  paintFigure(pointsOfUp);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 135, 45);
  ctx.fillText('Список результатов:', 135, 65);

  var histogramHeight = 150;
  var step = histogramHeight / (findMaxTime(times) - 0);
  var barWidth = 40;
  var margin = barWidth + 50;
  var startX = 150;
  var startY = 240;
  var lineHeight = 20;
  var value = 'Вы';

  for (var j = 0; j < times.length && j < names.length; j++) {

    if (names[j] === value) {

      ctx.fillStyle = 'rgb(255, 0, 0)';
      ctx.globalAlpha = 1;
    } else {
      ctx.fillStyle = 'rgb(0, 0, 250)';
      ctx.globalAlpha = getRandomOpacity(0.1, 1);
    }

    ctx.fillRect(startX + margin * j, startY, barWidth, -times[j] * step);
    ctx.fillText(names[j], startX + margin * j, startY + lineHeight);
    ctx.fillText(Math.round(times[j]), startX + margin * j, startY - histogramHeight - lineHeight / 2);

  }
};

