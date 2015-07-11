function texto() {
	var a=new Date();
	var hora = a.getHours() + a.getMinutes;
	
	if(hora <= 11){
		document.getElementById("text").innerHTML="おはよう";
	}
	else if(hora<=21){
		document.getElementById("text").innerHTML="こんにちは";
	}
	else{
		document.getElementById("text").innerHTML="おやすみ";
	}
}

window.onload=texto;
