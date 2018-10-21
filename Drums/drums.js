  function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  //console.log(audio);
  if(!audio) return; //stop the function from running

  key.classList.add('playing');
  audio.currentTime = 0; //rewind to the start
  audio.play();


}

//suppose to make an animation for keys, seems like not doing anything :(
function removeTransition(e) {
console.log(e);
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing');
  //$(this).on('transitionend');
  //console.log(e.propertyName);
}


const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));//not functioning
window.addEventListener('keydown', playSound);
