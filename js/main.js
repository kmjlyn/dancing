navigator.getUserMedia = ( navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);


var vid;
var capture;

var init = function() {
	vid = document.querySelector('#v');
		
	navigator.getUserMedia( {video: true}, function(stream) {
		var url = URL.createObjectURL(stream);
		vid.src = url;
	});
};

/var initCapture = function() {
	navigator.getUserMedia( {video: true}, function(stream) {
		var url = URL.createObjectURL(stream);
		capture.src = url;
	});
};

var doCapture = function() {
	var g = document.createElement('canvas').getContext('2d');
	g.canvas.width = capture.videoWidth;
	g.canvas.height = capture.videoHeight;
	g.canvas.className = 'film';
	g.drawImage(capture, 0, 0);

	
	filmstrip.appendChild(g.canvas);
	films.push(g.canvas);
};/

window.onload = function() {
	init();
};