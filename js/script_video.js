function Video(){
  var video = document.getElementById("video");
  var files = 5;
  var n = (Math.floor(Math.random() * files) + 1);
  var width = window.innerWidth;
  video.insertAdjacentHTML('afterbegin', '<video width="' + width + '" src="video/' + n + '.webm" autoplay loop="true"></video>');
}
