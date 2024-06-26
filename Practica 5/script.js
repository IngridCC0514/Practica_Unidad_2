var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var painting = false;

function startDraw(e) {
    painting = true;
    startDraw(e);
}

function endDraw() {
    painting = false;
    ctx.beginPath();
}

function draw(e) {
    if (!painting) return;
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.strokeStyle = "black";
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.moveTo(e.clientX, e.clientY);
}

canvas.addEventListener('mousedown', startDraw);
canvas.addEventListener('mouseup', endDraw);
canvas.addEventListener('mousemove', draw);