const audioPlayer = document.getElementById("audio-player");
const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");
const stopBtn = document.getElementById("stop-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const progressBar = document.getElementById("progress-bar");
const volumeSlider = document.getElementById("volume-slider");
const trackTitle = document.getElementById("track-title");

// Playlist (Add more songs if needed)
const playlist = [
    { name: "Song 1", src: "songs/song1.mp3" },
    { name: "Song 2", src: "songs/song-2.mp3" },
    { name: "Song 3", src: "songs/song-3.mp3" }
];

let currentTrackIndex = 0;

// Load Initial Track
function loadTrack(index) {
    audioPlayer.src = playlist[index].src;
    trackTitle.textContent = playlist[index].name;
    progressBar.value = 0;
}

// Play Music
playBtn.addEventListener("click", () => {
    audioPlayer.play();
    playBtn.style.display = "none";
    pauseBtn.style.display = "inline-block";
});

// Pause Music
pauseBtn.addEventListener("click", () => {
    audioPlayer.pause();
    pauseBtn.style.display = "none";
    playBtn.style.display = "inline-block";
});

// Stop Music
stopBtn.addEventListener("click", () => {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    playBtn.style.display = "inline-block";
    pauseBtn.style.display = "none";
});

// Next Track
nextBtn.addEventListener("click", () => {
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    loadTrack(currentTrackIndex);
    audioPlayer.play();
    playBtn.style.display = "none";
    pauseBtn.style.display = "inline-block";
});

// Previous Track
prevBtn.addEventListener("click", () => {
    currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    loadTrack(currentTrackIndex);
    audioPlayer.play();
    playBtn.style.display = "none";
    pauseBtn.style.display = "inline-block";
});

// Update Progress Bar
audioPlayer.addEventListener("timeupdate", () => {
    progressBar.value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
});

// Seek Music
progressBar.addEventListener("input", () => {
    audioPlayer.currentTime = (progressBar.value / 100) * audioPlayer.duration;
});

// Volume Control
volumeSlider.addEventListener("input", () => {
    audioPlayer.volume = volumeSlider.value;
});

// Load the first track initially
loadTrack(currentTrackIndex);
