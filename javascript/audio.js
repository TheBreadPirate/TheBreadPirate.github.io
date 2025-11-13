let items = [
"https://thebreadpirate.com/audio/two.mp3", "https://thebreadpirate.com/audio/three.wav",
"https://thebreadpirate.com/audio/four.wav",
"https://thebreadpirate.com/audio/five.wav",





]; 
let playlist = ["https://thebreadpirate.com/audio/Intro.wav"];
let audio = null;

function play() {
  playlist.push(items[~~(Math.random() * items.length)]);
  audio= new Audio(playlist.shift());
  audio.play();
  audio.onended = _ => {
    play();
  }
}

function toggle_audio() {
  if(!audio) play();
  else if(audio.paused) audio.play();
  else audio.pause()
}




// Non Komali Stuff //

