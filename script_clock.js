function current(){
	var date = new Date();
	var hour = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();

	if(hour < 10){
		hour = '0' + hour;
	}
	if(minutes < 10){
		minutes = '0' + minutes;
	}
	if(seconds < 10){
		seconds= '0' + seconds;
	}

	return hour + " : " + minutes + " : " + seconds;
}

function update(){
	var current_time = current();
	var clock = document.getElementById("clock");
	clock.innerHTML = current_time;
}

update();
setInterval(update, 1000);