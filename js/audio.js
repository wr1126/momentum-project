const audio = document.querySelector("#audio");
const playBtn = document.querySelector("#playbutton");
const stopBtn = document.querySelector("#stopbutton");

playBtn.addEventListener("click", function(){ audio.play(); });
stopBtn.addEventListener("click", function(){ audio.pause(); });