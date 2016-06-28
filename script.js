window.onload=function(){
	var files = 5; 								// <---------- Change this value

	/**************TEXT**************/
	var a=new Date();
	var hour = a.getHours();
	var msj = ["おはよう", "こんにちは", "おやすみ"];
	var text = document.getElementById("text");

	if(hour >= 21 || hour <= 6){
		text.innerHTML=msj[2];
	}
	else if(hour <= 11){
		text.innerHTML=msj[0];
	}
	else{
		text.innerHTML=msj[1];
	}
	/**************IMAGES**************/
	var img_num = (Math.floor(Math.random() * files) + 1);
	var wrap = document.getElementById("wrap");
	wrap.style.backgroundImage = "url(" + 'img/' + img_num + '.png' + ")";
	wrap.style.backgroundRepeat = "no-repeat";
	wrap.style.backgroundPosition = "right bottom";
	wrap.style.backgroundSize = "auto 250px";
/**************SEARCH**************/
	var search_bar = document.getElementById("search-bar");
	var search_wrap = document.getElementById("search-wrap");
	var search_visible = false;
	search_wrap.style.display = 'none';
	"use strict";

	document.onkeydown = function (e){
		// if Alt+S
		if(e.altKey && (e.keyCode == 83)){
			search_visible = true;
			search_wrap.style.display = 'block';
			search_bar.focus();
		}
		// if Esc
		else if(e.keyCode == 27){
			search_visible = false;
			search_wrap.style.display = 'none';
		}
		/* // <------- I'm still trying to figure it out how make this work without the alert.
		// if Enter
		else if((e.keyCode == 13) && search_visible == true){
			var content = search_bar.value.replace(new RegExp(" ", 'g'), "+");
			if(content != ""){
				alert("You are looking for " + search_bar.value + " on Duckduckgo");
				window.location.href = ("https://duckduckgo.com/?q=" + content + "&ia=about");
			}
		}
		*/
	}
}
