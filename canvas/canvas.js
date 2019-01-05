var canvas = document.querySelector('canvas');
var btn = document.getElementById('draw');


btn.onclick = drawShapes;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


function drawShapes() {
	c.clearRect(0,0,canvas.width,canvas.height);
	for (let i = 0; i <= 100 * Math.random(); i++) {
		const x = canvas.width * Math.random();
		const y = canvas.height * Math.random();
		const w = 10;
		const h = w;

		c.beginPath();
		c.fillStyle = `rgb(${255*Math.random()},${255*Math.random()},${255*Math.random()})`;
		c.arc(x,y,w,0,2*Math.PI);
		c.fill();
		// c.stroke();
		// c.fillRect(x, y, w, h);
	}
}

// c.fillRect(100, 100, 100, 100);

console.log(canvas);