function texto() {
	var a=new Date();
	var hora = a.getHours();
	var msj = ["おはよう", "こんにちは", "おやすみ"];
	
	if(hora<=6){
		document.getElementById("text").innerHTML=msj[2];
		document.getElementById("body").style.background = "#000";
	}
	else if(hora <= 11){
		document.getElementById("text").innerHTML=msj[0];
	}
	else if(hora<=20){
		document.getElementById("text").innerHTML=msj[1];
	}
	else{
		document.getElementById("text").innerHTML=msj[2];
		document.getElementById("body").style.background = "#000";
	}
}

window.onload=texto;
