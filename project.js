function getInputValue() {
    var input = document.getElementById('draw').value;
    return input;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function drawLines() {
  var c=document.getElementById("canvas");
  var ctx=c.getContext("2d");
  var times = getInputValue();
  for (i = 0; i < times; i++) {
    ctx.beginPath();
    ctx.moveTo(800*Math.random(), 800*Math.random());
    ctx.lineTo(800*Math.random(), 800*Math.random());
    ctx.strokeStyle=getRandomColor(); 
    ctx.stroke();
  }
}