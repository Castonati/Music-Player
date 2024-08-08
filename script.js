console.log("LETS write js");

async function getsongs() {
  let a = await fetch("http://127.0.0.1:5500/GODSAMAEUL/musixzen/songs/");
  let response = await a.text();
  let div = document.createElement("div");
  div.innerHTML = response;

  let as = div.getElementsByTagName("a");
  let songs = [];
  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href);
    }
  }
  return songs;
}

async function main() {
  // list of songs
  let songs = await getsongs();
  console.log(songs);

  let songUL = document.querySelector(".songlist ul");
  for (const song of songs) {
    let songName = song.split("/").pop().replace(/%20/g, " ");
    songUL.innerHTML += `<li><img class="invert" src="music.svg" alt="">
              <div class="info">
                <div>${songName}</div>
             <div>Castonati</div>
              </div>
              <div class="playnow">
              <span>Play Now</span>
              <img class="invert" src="play.svg" alt="">
            </div>
            </li>`;
  }

  // play first song
  var audio = new Audio(songs[0]);
  audio.play();
  audio.addEventListener("loadeddata", () => {
    let duration = audio.duration;
    console.log(duration, audio.currentSrc, audio.currentTime);
    // The duration variable now holds the duration (in seconds) of the audio clip
  });
}

main();
