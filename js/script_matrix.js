/*
 * Based on: http://thecodeplayer.com/walkthrough/matrix-rain-animation-html5-canvas-javascript
 * */

function Matrix(){
  var matrix = document.getElementById("matrix_effect");
  var m = matrix.getContext("2d");
  
  /* 
   * Matrix width and height based on your screen resolution
   * If anyone know a better way to do this
   * please let me know. 
   */
  var h = window.innerHeight - 5; /* Delete the -5 and tell me if it works on your computer */
  var w = window.innerWidth;
  matrix.height = h;
  matrix.width = w;
  
  /* Opacity of the canvas */
  var opacity = 0.05;
  
  /* Message */
  var letters = "Nomatterwhereyougoeverybodysconnected";
  letters = letters.split("");
  
  /* Font size */
  var f = 12;
  
  /* Columns = width / font size */
  var columns = w/f;
  
  /* An array of drops - one per column */
  var drops = [];
  
  /* x below is the x coordinate
     1 = y co-ordinate of the drop(same for every drop initially)
   */
  for(var x = 0; x < columns; x++)
    drops[x] = 1; 

  /* Drawing the characters */
  function draw()
  {
    /*
     * Details of the canvas and text 
     * fillStyle --> background color of the canvas
     * fillRect(x, y, width, height)
     * fillStyle --> color of the letters.
     * font --> font size and font family
     */
    m.fillStyle = "rgba(0, 0, 0, " + opacity + ")";
    m.fillRect(0, 0, w, h);
    m.fillStyle = "#00e600";
    m.font = f + "px monospace";
    
    /* Looping over drops */
    for(var i = 0; i < drops.length; i++)
    {
      /* A random letters character to print */
      var text = letters[Math.floor(Math.random()*letters.length)];
      //x = i*f, y = value of drops[i]*f
      m.fillText(text, i*f, drops[i]*f);
      
      /* 
       * Sending the drop back to the top randomly after it has crossed the screen
       * Adding a randomness to the reset to make the drops scattered on the Y axis
       */
      if(drops[i]*f > h && Math.random() > 0.975)
        drops[i] = 0;
      
      /* Incrementing Y coordinate　*/
      drops[i]++;
    }
  }

  setInterval(draw, 30);
}
