function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  key.classList.add("playing");
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
}
const keys = document.querySelectorAll(".key");
function removeTransition(e) {
  if (e.propertyName !== "transform") {
    this.classList.remove("playing");
  }
}
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
