var canvas = document.querySelector('canvas');
var btn = document.getElementById('draw');


btn.onclick = drawShapes;

canvas.width = window.innerWidth - 15;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var x = 200;
var y = 200;
var dx = 5;
var dy = 2;
var radius = 30;

function animate() {
	requestAnimationFrame(animate);
	// console.log('Lol');
	c.clearRect(0, 0, innerWidth, innerHeight);
	c.beginPath();
	c.arc(x, y, radius, 0, Math.PI * 2);
	c.strokeStyle = 'blue';
	c.stroke();
	// if(x>innerWidth) x = 0;		//To loop from left to right
	if (x > canvas.width - radius || x < radius) {
		dx *= (-1);
	} //To bounce off the edges
	if (y > canvas.height - radius || y < radius) {
		dy *= (-1);
	} //To bounce off the edges
	x += dx;
	y += dy;
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