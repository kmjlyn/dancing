navigator.getUserMedia = ( navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);


var vid;

var init = function() {
	vid = document.querySelector('#v');
		
	navigator.getUserMedia( {video: true}, function(stream) {
		var url = URL.createObjectURL(stream);
		vid.src = url;
	});
};

window.onload = function() {
	init();
};