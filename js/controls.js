var audioPlayer = document.getElementById('audioPlayer');

function playOrPause () {
	if (!audioPlayer.paused && !audioPlayer.ended) {
		audioPlayer.pause();
	}
	else {
		audioPlayer.play();
	}
}

