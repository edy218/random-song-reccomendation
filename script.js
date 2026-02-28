const songs = [
  { title: "Golden Hour", artist: "JVKE", mood: "happy" },
  { title: "From the Start", artist: "Laufey", mood: "chill" },
  { title: "Stitches", artist: "Shawn Mendes", mood: "sad" },
  { title: "Blinding Lights", artist: "The Weeknd", mood: "hype" },
  { title: "Daydreaming", artist: "Harry Styles", mood: "happy" },
  { title: "Heather", artist: "Conan Gray", mood: "sad" },
  { title: "Sunroof", artist: "Nicky Youre", mood: "happy" },
  { title: "505", artist: "Arctic Monkeys", mood: "chill" }
];

function getSong() {
  const mood = document.getElementById("mood").value;

  let filtered = mood === "all"
    ? songs
    : songs.filter(song => song.mood === mood);

  if (filtered.length === 0) return;

  const random = filtered[Math.floor(Math.random() * filtered.length)];

  document.getElementById("songTitle").textContent = random.title;
  document.getElementById("artist").textContent = "by " + random.artist;

  document.getElementById("songCard").classList.remove("hidden");
}