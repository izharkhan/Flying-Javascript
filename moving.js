document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
      upArrowPressed();   // up arrow
    }
    else if (e.keyCode == '40') {
        downArrowPressed();
    }
    else if (e.keyCode == '37') {
       leftArrowPressed();
    }
    else if (e.keyCode == '39') {
       rightArrowPressed();

    }

}    




			function leftArrowPressed() {
                var element = document.getElementById("super");
                element.style.left = parseInt(element.style.left) - 10 + 'px';
            }

            function rightArrowPressed() {
                var element = document.getElementById("super");
                element.style.left = parseInt(element.style.left) + 10 + 'px';
            }

            function upArrowPressed() {
                var element = document.getElementById("super");
                element.style.top = parseInt(element.style.top) - 10 + 'px';
            }

            function downArrowPressed() {
                var element = document.getElementById("super");
                element.style.top = parseInt(element.style.top) + 10 + 'px';
            }

			
			
			
			
			
			
       