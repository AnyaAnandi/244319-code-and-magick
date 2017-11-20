window.renderStatistics = function (ctx, names, times) {

  var gradient = ctx.createLinearGradient(100, 10, 420, 270);
  gradient.addColorStop(0, 'green');
  gradient.addColorStop(1, 'white');

  ctx.fillStyle = gradient;
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 10;
  ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  ctx.shadowBlur = 10;
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


// как сделать тень только на мою фигуру???

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 135, 45);
  ctx.fillText('Список результатов:', 135, 65);

// если выношу функцию в самый верх кода, до window. ...., то она не работает
// и почему она сразу не работает если пишу function(times) ????

  var findMaxTime = function (arr) {
    var maxTime = 0;
      for (var i = 0 ; i < arr.length; i++) {
        var time = arr[i];
        if (time > maxTime) {
          maxTime = time;
          maxTimeIndex = i; }
    }
    return maxTime;
  };
  findMaxTime(times);
  console.log(times);

  var histogramHeight = 150;
  var step = histogramHeight / (findMaxTime(times) - 0);
  var barWidth = 40;
  var margin = barWidth + 50;
  var startX = 150;
  var startY = 240;
  var lineHeight = 20;
  var value = 'Вы';


  for (var j = 0; j < times.length; j++) {
    ctx.fillRect(startX + margin * j, startY, barWidth, -times[j] * step);
    ctx.fillText(names[j], startX+ margin * j, startY + lineHeight);
    ctx.fillText(Math.round(times[j]), startX + margin * j, startY - histogramHeight - lineHeight/2);

  };
  console.log(names);

//ниже код не красит, я всю голову сломала - по дебагеру все работает
// а по факту не красит нужный прямоугольник

  var randColor = function() {
    var r = Math.floor(Math.random() * (256)),
        g = Math.floor(Math.random() * (256)),
        b = Math.floor(Math.random() * (256));
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
  }
  console.log(randColor());

//как сделать случайную прозрачность?

  for (var i = 0; i < names.length; i++) {
    if (names[i] == 'Вы') {

      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'randColor';}
  };


  };


