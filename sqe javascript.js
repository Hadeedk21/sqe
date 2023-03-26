// Define variables
const audioPlayer = document.getElementById("audio-player");
const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");
const trackList = document.getElementById("track-list");
const tracks = [
  {
    title: "Song 1",
    artist: "Artist 1",
    file: "path/to/song1.mp3",
  },
  {
    title: "Song 2",
    artist: "Artist 2",
    file: "path/to/song2.mp3",
  },
  // add more tracks as needed
];

// Load tracks into track list
tracks.forEach((track, index) => {
  const li = document.createElement("li");
  li.innerHTML = `${track.title} - ${track.artist}`;
  li.addEventListener("click", () => {
    audioPlayer.src = track.file;
    audioPlayer.play();
    playBtn.style.display = "none";
    pauseBtn.style.display = "inline-block";
  });
  trackList.appendChild(li);
});

// Play/pause button functionality
playBtn.addEventListener("click", () => {
  audioPlayer.play();
  playBtn.style.display = "none";
  pauseBtn.style.display = "inline-block";
});

pauseBtn.addEventListener("click", () => {
  audioPlayer.pause();
  pauseBtn.style.display = "none";
  playBtn.style.display = "inline-block";
});

// Update track progress bar
audioPlayer.addEventListener("timeupdate", () => {
  const percentComplete = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  document.getElementById("progress-bar").style.width = `${percentComplete}%`;
});

// Skip to different points in the track
document.getElementById("progress-bar-container").addEventListener("click", (event) => {
  const barWidth = event.currentTarget.clientWidth;
  const clickX = event.offsetX;
  const percentClicked = (clickX / barWidth) * 100;
  audioPlayer.currentTime = (audioPlayer.duration * percentClicked) / 100;
});
