document.getElementById('player').style.top = '50px';
document.getElementById('player').style.left = '50px';


document.body.onkeydown = function (e) {
  var el = document.getElementById('player');
  var fire = document.getElementById('fire');

var KEYCODE_LEFT = 37;
var KEYCODE_RIGHT = 39;
var KEYCODE_TOP = 38;
var KEYCODE_BOTTOM = 40;
var KEYCODE_SPACE = 32;

if (e.keyCode == KEYCODE_LEFT) {
    el.style.left = (parseInt(el.style.left) - 10) + 'px';
}
else if (e.keyCode == KEYCODE_RIGHT) {
    el.style.left = (parseInt(el.style.left) + 10) + 'px';
}

else if(e.keyCode == KEYCODE_TOP){
    el.style.top = (parseInt(el.style.top) - 10) + 'px';
}
else if(e.keyCode == KEYCODE_BOTTOM){
    el.style.top = (parseInt(el.style.top) + 10) + 'px';
}
     
 if(e.keyCode == KEYCODE_SPACE){ 
  fire.style.display = 'initial';
 
 setInterval(function(){
    fire.style.left = (parseInt(el.style.left) + 200) + 'px';
    console.log(fire.style.left);
  },1000);
 
  /*fire.style.left = (parseInt(el.style.left) + 200) + 'px';
    var fps = 50;  
    var animation = setInterval(function(){
    var long;
    long += 100;
    fire.style.left = (parseInt(el.style.left) + long) + 'px';
    },1000/fps);*/
    
    /* var bullet = document.createElement('div');
    bullet.classList.add('fire');
     document.body.appendChild(bullet);
    bullet.style.left = (parseInt(bullet.style.left)) + 'px';
    bullet.style.top = (parseInt(el.style.top)) + 'px'; */
  
   
 
}

}







