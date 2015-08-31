//You need to change the number on line 22 to the exact number of images on your img folder.
//The images have to be PNG and the namefiles have to be like this: 0.png, 1.png, 2.png, 3.png

function texto() {
	var a=new Date();
	var hora = a.getHours();
	var msj = ["おはよう", "こんにちは", "おやすみ"];
	
	if(hora<=6){
		document.getElementById("text").innerHTML=msj[2];
	}
	else if(hora <= 11){
		document.getElementById("text").innerHTML=msj[0];
	}
	else if(hora<=20){
		document.getElementById("text").innerHTML=msj[1];
	}
	else{
		document.getElementById("text").innerHTML=msj[2];
	}
	
	var num = (Math.floor(Math.random() * 42));
	document.getElementById("wrap").style.backgroundImage = "url(" + 'img/' + num + '.png' + ")";
	document.getElementById("wrap").style.backgroundRepeat = "no-repeat";
	document.getElementById("wrap").style.backgroundPosition = "right bottom";
	document.getElementById("wrap").style.backgroundSize = "auto 350px";
}

window.onload=texto;
