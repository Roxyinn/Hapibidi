const audio = document.getElementById('background-music');
const body = document.body;

// Memeriksa apakah musik dimatikan sebelumnya
const musicMuted = localStorage.getItem('musicMuted');
if (!musicMuted) {
  // Memainkan musik jika sebelumnya tidak dimatikan
  audio.play();
}

audio.addEventListener('play', () => {
  body.classList.add('play-music');
});

audio.addEventListener('pause', () => {
  body.classList.remove('play-music');
});

// Menyimpan status pemutaran musik saat meninggalkan halaman
window.addEventListener('beforeunload', () => {
  if (audio.paused) {
    localStorage.setItem('musicMuted', true);
  } else {
    localStorage.removeItem('musicMuted');
  }
});
