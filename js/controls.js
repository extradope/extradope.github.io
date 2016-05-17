var audioPlayer = document.getElementById('audioPlayer'),
	playButton = document.getElementById('playButton'),
	muteButton = document.getElementById('muteButton'),
	totalTime = document.getElementById('totalTime'),
	currentTime = document.getElementById('currentTime'),
	barSize = 100,
	bar = document.getElementById('defaultBar'),
	progressBar = document.getElementById('progressBar');

audioPlayer.addEventListener("loadedmetadata", changeDuration);

function changeDuration() {
	var minutes = parseInt(audioPlayer.duration/60);
	var seconds = parseInt(audioPlayer.duration%60);
	totalTime.innerHTML = minutes+":"+seconds;
}

playButton.addEventListener('click', playOrPause, false);
muteButton.addEventListener('click', muteOrUnmute, false);

function playOrPause () {
	if (!audioPlayer.paused && !audioPlayer.ended) {
		audioPlayer.pause();
		playButton.style.backgroundImage = 'url(../../../../assets/svg/play.svg)';
		window.clearInterval(updateTime);
	}
	else {
		audioPlayer.play();
		playButton.style.backgroundImage = 'url(../../../../assets/svg/pause.svg)';
		updateTime = setInterval(update, 500);
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

function update() {
	if (!audioPlayer.ended) {
		var playedMinutes = parseInt(audioPlayer.currentTime/60);
		var playedSeconds;
			if (parseInt(audioPlayer.currentTime%60) < 10) {
				playedSeconds = '0' + parseInt(audioPlayer.currentTime%60);
			}
			else {
				playedSeconds = parseInt(audioPlayer.currentTime%60);
			}
		currentTime.innerHTML = playedMinutes + ':' + playedSeconds;

		var size = parseInt(audioPlayer.currentTime*barSize/audioPlayer.duration);
		console.log(size);
		progressBar.style.width = size + "%";
	}
	else {
		currentTime.innerHTML = '0.00';
		playButton.style.backgroundImage = 'url(../../../../assets/svg/play.svg)';
		progressBar.style.width = "0%";
		window.clearInterval(updateTime);
	}
}