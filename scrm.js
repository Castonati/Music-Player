// console.log("LETS write js");

// async function getsongs() {
//   let response = await fetch("http://127.0.0.1:5500/GODSAMAEUL/musixzen/songs/");
//   let text = await a.text();
//   console.log(response)
  
//   let div = document.createElement("div");
//   div.innerHTML = response;

//   let as = div.getElementsByTagName("a");
//   let songs = [];
// for (let index = 0; index < as.length; index++) {
//   const element = array[index];
//   if (element.href.endsWith(".mp3")) {
//     songs.push(element.href).split("/songs/");
//   }
// }
//   return songs;
// }
// async function main(){
// let songs= await getsongs()
// console.log(songs)
// // play the songs
// var audio = new Audio(songs[0]);
// audio.play();
// }
// main()

// console.log("LETS write js");

// async function getsongs() {
//   let response = await fetch("http://127.0.0.1:5500/GODSAMAEUL/musixzen/songs/");
//   let text = await response.text();

//   let div = document.createElement("div");
//   div.innerHTML = text;

//   let as = div.getElementsByTagName("a");
//   let songs = [];
//   for (let index = 0; index < as.length; index++) {
//     const element = as[index];
//     if (element.href.endsWith(".mp3")) {
//       songs.push(element.href.split("/songs/"))[1];
//     }
//   }
//   return songs;
// }

// async function main() {
//   let songs = await getsongs();
//   console.log(songs);

//   let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0];

//   // Clear existing content
//   songUL.innerHTML = '';

//   for (const song of songs) {
//     songUL.innerHTML += `<li>${song.replaceall("%20", " ")}</li>`;
//   }

//   if (songs.length > 0) {
//     var audio = new Audio(songs[0]);
//     audio.play();
//     audio.addEventListener("loadeddata", () => {
//       let duration = audio.duration;
//       console.log(duration, audio.currentSrc, audio.currentTime);
//     });
//   }
// }

// main();

console.log("LETS write js");

async function getsongs() {
  let response = await fetch("http://127.0.0.1:5500/GODSAMAEUL/musixzen/songs/");
  let text = await response.text();

  let div = document.createElement("div");
  div.innerHTML = text;

  let as = div.getElementsByTagName("a");
  let songs = [];
  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href.split("/songs/")[1]); // Corrected split usage
    }
  }
  return songs;
}

async function main() {
  let songs = await getsongs();
  console.log(songs);

  let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0];

  // Clear existing content
  songUL.innerHTML = '';

  for (const song of songs) {
    songUL.innerHTML += `<li>${song.replaceAll("%20", " ")}</li>`; // Corrected replaceAll
  }

  if (songs.length > 0) {
    var audio = new Audio(songs[0]);
    audio.play();
    audio.addEventListener("loadeddata", () => {

      let duration = audio.duration;
      console.log(duration, audio.currentSrc, audio.currentTime);
    });  
  }
}

main();
