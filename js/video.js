var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
	let vol = document.querySelector("#volume");
	vol.innerHTML= video.volume *100 + "%";
}
function playVid() { 
	video.play();
	console.log("Play Video");
} 

// button.play {
// 	background-Image: URL(images/play.png)
// }

//play image - https://www.nicepng.com/downpng/u2w7w7q8q8w7w7q8_video-play-video-play-icon-png/

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() { 
      var vid = document.querySelector("#myVideo");
      vid.playbackRate *= 0.8;
	  console.log("Speed is "+ video.playbackRate);
	  
} 

function increaseSpeed() {
	var vid = document.querySelector("#myVideo");
	vid.playbackRate *= 1.25;
	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
	video.currentTime += 60;
if (video.ended){
	video.currentTime = 0;
}
console.log("Current location is"+ video.currentTime);
}
	


function mute() { 
		 if (video.muted) {
			 console.log("changing to Unmuted")
			 video.muted = false;
			 document.querySelector("#mute").innerHTML = "mute";
		 }
		 else{
			 console.log("changing to Muted")
			 video.muted = true;
			 document.querySelector("#mute").innerHTML = "unmute";
		 }
  	
}

function changeVolume() {
	var slider = document.querySelector("#volumeSlider").value;
	video.volume = slider / 100;
	console.log("Volume is" + slider);
	document.querySelector("#volume").innerHTML = slider +"%";
}
       

function gray() { 

	console.log("In grayscale");
	myVideo.classList.add("grayscale");
}

function color() {

	console.log("In color");
	myVideo.classList.remove("grayscale");
}





