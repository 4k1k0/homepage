function Glitch(){

  var text = document.getElementById("text");
  
  var a=new Date();
  var hour = a.getHours();
  var msj = ["おはよう", "こんにちは", "おやすみ"];
  var text = document.getElementById("text");

  if(hour >= 21 || hour <= 6){
    text.innerHTML=msj[2];
    text.setAttribute("title" , msj[2]);  
    text.setAttribute("content" , msj[2]);
  }
  else if(hour <= 11){
    text.innerHTML=msj[0];
    text.setAttribute("title" , msj[0]);  
    text.setAttribute("content" , msj[0]);
  }
  else{
    text.innerHTML=msj[1];
    text.setAttribute("title" , msj[1]);  
    text.setAttribute("content" , msj[1]);
  }
  
  
  
}
