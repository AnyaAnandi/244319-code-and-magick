'use strict';
window.renderStatistics = function (ctx, names, times) {

  /* ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 10;
  ctx.shadowColor = 'rgba(0, 0, 0, 0.7)'; */

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.beginPath();
  ctx.moveTo(110, 20);
  ctx.lineTo(150, 40);
  ctx.lineTo(190, 20);
  ctx.lineTo(230, 40);
  ctx.lineTo(270, 20);
  ctx.lineTo(310, 40);
  ctx.lineTo(350, 20);
  ctx.lineTo(390, 40);
  ctx.lineTo(430, 20);
  ctx.lineTo(490, 30);
  ctx.lineTo(530, 20);

  ctx.lineTo(510, 46);
  ctx.lineTo(530, 72);
  ctx.lineTo(510, 98);
  ctx.lineTo(530, 124);
  ctx.lineTo(510, 150);
  ctx.lineTo(530, 176);
  ctx.lineTo(510, 202);
  ctx.lineTo(530, 228);
  ctx.lineTo(510, 254);
  ctx.lineTo(530, 290);

  ctx.lineTo(490, 270);
  ctx.lineTo(440, 290);
  ctx.lineTo(390, 270);
  ctx.lineTo(350, 290);
  ctx.lineTo(310, 270);
  ctx.lineTo(270, 290);
  ctx.lineTo(230, 270);
  ctx.lineTo(190, 290);
  ctx.lineTo(150, 270);
  ctx.lineTo(110, 290);

  ctx.lineTo(130, 254);
  ctx.lineTo(110, 228);
  ctx.lineTo(130, 202);
  ctx.lineTo(110, 176);
  ctx.lineTo(130, 150);
  ctx.lineTo(110, 124);
  ctx.lineTo(130, 98);
  ctx.lineTo(110, 72);
  ctx.lineTo(130, 46);
  ctx.closePath();
  ctx.fill();

  var gradient = ctx.createLinearGradient(100, 10, 420, 270);
  gradient.addColorStop(0, 'green');
  gradient.addColorStop(1, 'white');

  ctx.fillStyle = gradient;
  ctx.strokeStyle = 'green';
  ctx.lineWidth = 5;

  ctx.beginPath();
  ctx.moveTo(100, 10);
  ctx.lineTo(140, 30);
  ctx.lineTo(180, 10);
  ctx.lineTo(220, 30);
  ctx.lineTo(260, 10);
  ctx.lineTo(300, 30);
  ctx.lineTo(340, 10);
  ctx.lineTo(380, 30);
  ctx.lineTo(420, 10);
  ctx.lineTo(480, 30);
  ctx.lineTo(520, 10);

  ctx.lineTo(500, 36);
  ctx.lineTo(520, 62);
  ctx.lineTo(500, 88);
  ctx.lineTo(520, 114);
  ctx.lineTo(500, 140);
  ctx.lineTo(520, 166);
  ctx.lineTo(500, 192);
  ctx.lineTo(520, 218);
  ctx.lineTo(500, 244);
  ctx.lineTo(520, 280);

  ctx.lineTo(480, 260);
  ctx.lineTo(420, 280);
  ctx.lineTo(380, 260);
  ctx.lineTo(340, 280);
  ctx.lineTo(300, 260);
  ctx.lineTo(260, 280);
  ctx.lineTo(220, 260);
  ctx.lineTo(180, 280);
  ctx.lineTo(140, 260);
  ctx.lineTo(100, 280);

  ctx.lineTo(120, 244);
  ctx.lineTo(100, 218);
  ctx.lineTo(120, 192);
  ctx.lineTo(100, 166);
  ctx.lineTo(120, 140);
  ctx.lineTo(100, 114);
  ctx.lineTo(120, 88);
  ctx.lineTo(100, 62);
  ctx.lineTo(120, 36);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  /* ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowColor = 'transparent'; */

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 135, 45);
  ctx.fillText('Список результатов:', 135, 65);

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
      ctx.globalAlpha = Math.random();
    }

    ctx.fillRect(startX + margin * j, startY, barWidth, -times[j] * step);
    ctx.fillText(names[j], startX + margin * j, startY + lineHeight);
    ctx.fillText(Math.round(times[j]), startX + margin * j, startY - histogramHeight - lineHeight / 2);

  }

  /* Функции вычисляющие рандомные знанчения

  function getRandomInt(min, max) {

    return Math.random() * (max - min + 1) + min;

  }
  console.log(getRandomInt(0, 1).toFixed(2));


   var randColor = function () {
    var r = 0,
      g = 0,
      b = Math.floor(Math.random() * (256));
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
  }
   console.log(randColor()); */

};


