function playSound(file) {
	new Howl({
		urls: ['./assets/sounds/' + file + '.mp3'],
		autoplay: true
	});
};