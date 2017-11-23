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

  var pointsOfShadow = [[110, 20], [150, 40], [190, 20], [230, 40], [270, 20], [310, 40],
    [350, 20], [390, 40], [430, 20], [490, 40], [530, 20], [510, 46], [530, 72], [510,
      98], [530, 124], [510, 150], [530, 176], [510, 202], [530, 228], [510, 254], [530, 290],
    [490, 270], [440, 290], [390, 270], [350, 290], [310, 270], [270, 290], [230, 270], [190,
      290], [150, 270], [110, 290], [130, 254], [110, 228], [130, 202], [110, 176], [130, 150],
    [110, 124], [130, 98], [110, 72], [130, 46]];

  var pointsOfUp = pointsOfShadow.map(function (x) {
    return [x [0] - 10, x [1] - 10];
  });

  function paintFigure(arr) {
    ctx.beginPath();
    for (var i = 0; i < arr.length; i = i + 1) {
      if (i === 0) {
        ctx.moveTo(arr[i][0], arr[i][1]);
      } else {
        ctx.lineTo(arr[i][0], arr[i][1]);
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


  function drawBars(arr, arr1) {
    for (var j = 0; j < arr.length && j < arr1.length; j++) {

      if (arr1[j] === value) {

        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
        /* ctx.globalAlpha = 1;*/
      } else {
        ctx.fillStyle = 'rgba(0, 0, 255, ' + getRandomOpacity(0.1, 1) + ')';
        /* ctx.globalAlpha = getRandomOpacity(0.1, 1);*/
      }

      ctx.fillRect(startX + margin * j, startY, barWidth, -arr[j] * step);
      ctx.fillStyle = 'rgba(0, 0, 255, 1)';
      ctx.fillText(arr1[j], startX + margin * j, startY + lineHeight);
      ctx.fillText(Math.round(arr[j]), startX + margin * j, startY - histogramHeight - lineHeight / 2);

    }
  }
  drawBars(times, names);

};

