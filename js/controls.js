var audioPlayer = document.getElementById('audioPlayer'),
	playButton = document.getElementById('playButton'),
	muteButton = document.getElementById('muteButton');

playButton.addEventListener('click', playOrPause, false);
muteButton.addEventListener('click', muteOrUnmute, false);

function playOrPause () {
	if (!audioPlayer.paused && !audioPlayer.ended) {
		audioPlayer.pause();
		playButton.style.backgroundImage = 'url(../../../../assets/svg/play.svg)';
	}
	else {
		audioPlayer.play();
		playButton.style.backgroundImage = 'url(../../../../assets/svg/pause.svg)';
	}
}

function muteOrUnmute () {
	if (audioPlayer.muted == true) {
		audioPlayer.muted = false;
		muteButton.style.backgroundImage = 'url(../../../../assets/svg/sound.svg)';
	}
	else {
		audioPlayer.muted = true;
		muteButton.style.backgroundImage = 'url(../../../../assets/svg/mute.svg)';
	}
}
