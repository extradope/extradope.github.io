var audioPlayer = document.getElementById('audioPlayer');
var	playButton = document.getElementsByClassName('audio-button-play')[0];

playButton.addEventListener('click', playOrPause, false);

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

