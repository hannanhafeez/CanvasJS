var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function () {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	init();
});

// var minRad = 4;
var maxRad = 40;
var minDist = 60;
var circleArr = [];
var colors = [
	'#393E46', 
	'#00ADB5',
	'#FFF4E0',
	'#F8B500',
	'#FC3C3C'
]

var mouse = {
	x: undefined,
	y: undefined
}


var c = canvas.getContext('2d');

function Circle(x, y, dx, dy, rad, sColor) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.rad = rad;
	this.minRad = this.rad;
	this.strcolor = sColor;

	this.draw = function () {
		c.beginPath();
		c.arc(this.x, this.y, this.rad, 0, Math.PI * 2);
		c.strokeStyle = this.strcolor;
		c.fillStyle = this.strcolor;
		c.fill();
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

		//INTERACTIVITY
		if (mouse.x - this.x < minDist && mouse.x - this.x > -minDist && mouse.y - this.y < minDist && mouse.y - this.y > -minDist) {
			if (this.rad < maxRad) {
				this.rad += 1;
			}
		} else if (this.rad > this.minRad) {
			this.rad -= 1;
		}
		this.draw();
	}
}



function init() {
	circleArr = [];
	for (let i = 0; i < 400; i++) {
		var radius = Math.random() * 6 + 2;
		var x = Math.random() * (canvas.width - radius * 2) + radius;
		var y = Math.random() * (canvas.height - radius * 2) + radius;
		var dx = 2 * (Math.random() - 0.5);
		var dy = 2 * (Math.random() - 0.5);
		// var sCol = `rgb(${255 * Math.random()},${255 * Math.random()},${255 * Math.random()})`;
		var sCol = colors[Math.floor(Math.random() * colors.length)];
		circleArr.push(new Circle(x, y, dx, dy, radius, sCol));
	}
}

function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);

	circleArr.forEach(element => {
		element.update();
	});
}
animate();
init();
canvas.addEventListener('mousemove', (event) => {
	mouse.x = event.x;
	mouse.y = event.y;
	// console.log(mouse);

});

function drawShapes() {
	var ctx = canvas.getContext('2d');

	ctx.clearRect(0, 0, canvas.width, canvas.height);
	for (let i = 0; i <= (100 * Math.random()) + 50; i++) {
		let x = canvas.width * Math.random();
		let y = (canvas.height * Math.random());
		const w = 10;
		const h = w;

		if (x > canvas.width - 10) x -= 10;
		if (y > canvas.height - 10) y -= 10;
		if (x < w) x += 10;
		if (y < w) y += 10;

		ctx.beginPath();
		ctx.fillStyle = `rgb(${255*Math.random()},${255*Math.random()},${255*Math.random()})`;
		ctx.arc(x, y, w, 0, 2 * Math.PI);
		ctx.fill();
		// c.stroke();
		// c.fillRect(x, y, w, h);
	}
}
// console.log(canvas);