
var napis = new Array('unique','one of a kind', 'flawless');

var lengNap = new Array(napis[0].length, napis[1].length, napis[2].length);

var padding = 90; //czas pomiędzy kasowaniem liter
var showTime = 2000; //czas wyświetlania się napisu

async function start() {
	
	for(var d = 0; d < 3; d++) {
		
		var x;
		for (var i = 0; i < lengNap[d]; i++) {
			
			x = napis[d].charAt(i);
			document.getElementById('sub').innerHTML += x;
			await sleep(padding);
		}
		
		await sleep(showTime);
		var y;
		var napDl = 0;
		
		for (var i = 0; i < lengNap[d]; i++, napDl--) {
			
			y = "";
			for (var j = 0; j < (lengNap[d] + napDl - 1); j++) {
				y += napis[d].charAt(j);
			}
			
			document.getElementById('sub').innerHTML = y;
			await sleep(padding);
		}
      if(d == 2) d = (-1);
	}
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

$(document).ready(function() {
    
    checkSize();
    
    $(window).resize(function() {
        checkSize();
    })
    $(window).scroll(function() {
        if(screen.width < 500)
            if(parseInt($(".footer").offset().top) == parseInt($(".mobileInfo").offset().top) ||
               parseInt($(".footer").offset().top) == parseInt($(".mobileInfo").offset().top) + 1) {
                
                document.querySelector(".mobileInfo").style.display = "none";
            } else {
                
                document.querySelector(".mobileInfo").style.display = "block";
            }
    });
});

function checkSize() {

        if(screen.width < 500) {
            
            document.querySelector(".mobileInfo").style.display = "block";
        } else {
            
            document.querySelector(".mobileInfo").style.display = "none";
        }
}

