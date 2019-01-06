var canvas = document.querySelector('canvas');
var btn = document.getElementById('draw');


btn.onclick = drawShapes;

canvas.width = window.innerWidth - 15;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

function Circle(x, y, dx, dy, rad, sColor) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.rad = rad;
	this.strcolor = sColor;

	this.draw = function () {
		c.beginPath();
		c.arc(this.x, this.y, this.rad, 0, Math.PI * 2);
		c.strokeStyle = this.strcolor;
		c.stroke();
	}

	this.update = function () {
		if (this.x > canvas.width - this.rad || this.x < this.rad) {
			this.dx *= (-1);
		} //To bounce off the edges
		if (this.y > canvas.height - this.rad || this.y < this.rad) {
			this.dy *= (-1);
		} //To bounce off the edges
		this.x += this.dx;
		this.y += this.dy;
		this.draw();
	}
}


var circleArr = [];


for (let i = 0; i < 100; i++) {
	var radius = 30;
	var x = Math.random() * (canvas.width - radius * 2) + radius;
	var y = Math.random() * (canvas.height - radius * 2) + radius;
	var dx = 2 * (Math.random() - 0.5);
	var dy = 2 * (Math.random() - 0.5);
	var sCol = `rgb(${255 * Math.random()},${255 * Math.random()},${255 * Math.random()})`;
	circleArr.push(new Circle(x, y, dx, dy, radius, sCol));
}


function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);

	circleArr.forEach(element => {
		element.update();
	});
}
animate();

function drawShapes() {
	c.clearRect(0, 0, canvas.width, canvas.height);
	for (let i = 0; i <= (100 * Math.random()) + 50; i++) {
		let x = canvas.width * Math.random();
		let y = (canvas.height * Math.random());
		const w = 10;
		const h = w;

		if (x > canvas.width - 10) x -= 10;
		if (y > canvas.height - 10) y -= 10;
		if (x < w) x += 10;
		if (y < w) y += 10;

		c.beginPath();
		c.fillStyle = `rgb(${255*Math.random()},${255*Math.random()},${255*Math.random()})`;
		c.arc(x, y, w, 0, 2 * Math.PI);
		c.fill();
		// c.stroke();
		// c.fillRect(x, y, w, h);
	}
}

console.log(canvas);