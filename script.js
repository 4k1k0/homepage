function texto() {
	var files = 43; 		// <---------- Change this value
	var a=new Date();
	var hora = a.getHours();
	var msj = ["おはよう", "こんにちは", "おやすみ"];
	var text = document.getElementById("text");

	if(hora >= 21 || hora <= 6){
		text.innerHTML=msj[2];
	}
	else if(hora <= 11){
		text.innerHTML=msj[0];
	}
	else{
		text.innerHTML=msj[1];
	}
	
	var num = (Math.floor(Math.random() * files) + 1);
	var wrap = document.getElementById("wrap");
	wrap.style.backgroundImage = "url(" + 'img/' + num + '.png' + ")";
	wrap.style.backgroundRepeat = "no-repeat";
	wrap.style.backgroundPosition = "right bottom";
	wrap.style.backgroundSize = "auto 250px";
}

window.onload=texto;
