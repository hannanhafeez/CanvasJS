var canvas = document.querySelector('canvas');
var btn = document.getElementById('draw');


btn.onclick = drawShapes;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


function drawShapes() {
	c.clearRect(0, 0, canvas.width, canvas.height);
	for (let i = 0; i <= (100 * Math.random()) + 50; i++) {
		let x = canvas.width * Math.random();
		let y = (canvas.height * Math.random());
		const w = 10;
		const h = w;

		if (x > canvas.width - 10) {
			x -= 10;
		}
		
		if (y >canvas.height - 10) {
			y -= 10;
		}
		if (x < w) {
			x += 10;
		}

		if (y < w) {
			y += 10;
		}

		c.beginPath();
		c.fillStyle = `rgb(${255*Math.random()},${255*Math.random()},${255*Math.random()})`;
		c.arc(x, y, w, 0, 2 * Math.PI);
		c.fill();
		// c.stroke();
		// c.fillRect(x, y, w, h);
	}
}

// c.fillRect(100, 100, 100, 100);

console.log(canvas);