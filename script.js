function texto() {
	var a=new Date();
	var hora = a.getHours();
	
	if(hora<=6){
		document.getElementById("text").innerHTML="おやすみ";
	}
	else if(hora <= 11){
		document.getElementById("text").innerHTML="おはよう";
	}
	else if(hora<=20){
		document.getElementById("text").innerHTML="こんにちは";
	}
	else{
		document.getElementById("text").innerHTML="おやすみ";
	}
}

window.onload=texto;
