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

  else if (e.keyCode == KEYCODE_TOP) {
    el.style.top = (parseInt(el.style.top) - 10) + 'px';
  }
  else if (e.keyCode == KEYCODE_BOTTOM) {
    el.style.top = (parseInt(el.style.top) + 10) + 'px';
  }

  if (e.keyCode == KEYCODE_SPACE) {
    fire.style.display = 'initial';
    fire.style.left = el.style.left;
    var fireLoop = setInterval(function () {
      fire.style.left = (parseInt(fire.style.left) + 50) + 'px';
      if (fire.style.left == '1350px') {
        clearInterval(fireLoop);
      }
    }, 500);
  }

}









