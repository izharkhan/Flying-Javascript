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

			
			
			
			
			
		function init()
		{
			var interval = setInterval(gameLoop, 60);

			function gameLoop()
			{
				var plane_left = document.getElementById('super').offsetLeft;
				var plane_top = document.getElementById('super').offsetTop;
				var plane_width = document.getElementById('super').offsetWidth;
				var plane_height = document.getElementById('super').offsetHeight;
				var p1_left = document.getElementById('planet').offsetLeft;
				var p1_top = document.getElementById('planet').offsetTop;
				var p1_width = document.getElementById('planet').offsetWidth;
				var p1_height = document.getElementById('planet').offsetHeight;
				var p2_left = document.getElementById('planet1').offsetLeft;
				var p2_top = document.getElementById('planet1').offsetTop;
				var s2_width = document.getElementById('planet1').offsetWidth;
				var p2_height = document.getElementById('planet1').offsetHeight;
				var p4_left = document.getElementById('planet3').offsetLeft;
				var p4_top = document.getElementById('planet3').offsetTop;
				var p4_widht = document.getElementById('planet3').offsetWidth;
				var p4_height = document.getElementById('planet3').offsetHeight;
				var p3_left = document.getElementById('planet2').offsetLeft;
				var p3_top = document.getElementById('planet2').offsetTop;
				var p3_width = document.getElementById('planet2').offsetWidth;
				var p3_height = document.getElementById('planet2').offsetHeight;
				var r1_left = document.getElementById('rock').offsetLeft;
				var r1_top = document.getElementById('rock').offsetTop;
				var r1_width = document.getElementById('rock').offsetWidth;
				var r1_height = document.getElementById('rock').offsetHeight;
				var r2_left = document.getElementById('ball').offsetLeft;
				var r2_top = document.getElementById('ball').offsetTop;
				var r2_width = document.getElementById('ball').offsetWidth;
				var r2_height = document.getElementById('ball').offsetHeight;
				var r4_left = document.getElementById('ball2').offsetLeft;
				var r4_top = document.getElementById('ball2').offsetTop;
				var r4_width = document.getElementById('ball2').offsetWidth;
				var r4_height = document.getElementById('ball2').offsetHeight;
				
				
			if(plane_left < p1_left + p1_width && plane_left + plane_width > p1_left && plane_top < p1_top + p1_height && plane_height + plane_top > p1_top)
				{
					window.location.href = "gameover.html";
					
				}
				if(plane_left < p4_left + p4_widht && plane_left + plane_width > p4_left && plane_top < p4_top + p4_height && plane_height + plane_top > p4_top)
				{
				window.location.href = "gameover.html";
					
				}
				if(plane_left < p2_left + s2_width && plane_left + plane_width > p2_left && plane_top < p2_top + p2_height && plane_height + plane_top > p2_top)
				{
					window.location.href = "gameover.html";
					
				}

				if(plane_left < p3_left + p3_width && plane_left + plane_width > p3_left && plane_top < p3_top + p3_height && plane_height + plane_top > p3_top)
				{
					window.location.href = "gameover.html";
					
				}

				if(plane_left < r1_left + r1_width && plane_left + plane_width > r1_left && plane_top < r1_top + r1_height && plane_height + plane_top > r1_top)
				{
					window.location.href = "gameover.html";
					
				}

				if(plane_left < r2_left + r2_width && plane_left + plane_width > r2_left && plane_top < r2_top + r2_height && plane_height + plane_top > r2_top)
				{
					window.location.href = "gameover.html";
					
				}		
				if(plane_left < r4_left + r4_width && plane_left + plane_width > r4_left && plane_top < r4_top + r4_height && plane_height + plane_top > r4_top)
				{
				window.location.href = "gameover.html";
					
				}	
			}
        	}
	
	
        	window.onload = init;