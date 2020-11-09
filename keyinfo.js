var textDisplay = document.getElementById('text-display');
var container = document.getElementById('container');
var textAscii = document.getElementById('text-ascii');
var keyValue = document.getElementById('keycode');
var loc = document.getElementById('location');
var keys = document.getElementById('keys');
var asciiCode = document.getElementById('ascii-code');
var enteredKey = document.getElementById('entered-key');

document.body.addEventListener('keydown', function(e){
    textDisplay.className = 'hide';
    container.className = 'display';
    textAscii.innerHTML = e.which;
    asciiCode.innerHTML = e.which;
    keyValue.innerHTML = e.key;

    if(e.which == 32){
        keyValue.innerHTML = 'Space';
    }
    enteredKey.innerHTML = e.code;
    loc.innerHTML = e.location;

    if(e.location === 0){
        keys.innerHTML = '(General Keys)';
    }
    else if(e.location == 1){
        keys.innerHTML = '(Left-Side modifier Keys)';
    }
    else if(e.location == 2){
        keys.innerHTML = '(Right-Side modifier Keys)';
    }
    else if(e.location == 3){
        keys.innerHTML = '(Numpad)';
    }

})
