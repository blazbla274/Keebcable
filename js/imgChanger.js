


async function changeMini(wher,what,value) {
	
	if(value == "null") {} else {
        
		document.getElementById(wher).style.backgroundImage = "url('img/perks/"+what+value+".jpg')";
		
		for(var i = 1; i >= 0; i -= 0.1) {
			
			document.getElementById(wher+'Inside').style.opacity = i;
			await sleep(20);
		}
		document.getElementById(wher+'Inside').style.backgroundImage = "url('img/perks/"+what+value+".jpg')";
		document.getElementById(wher+'Inside').style.opacity = 1; 
	}
}

var schowingCable = 1;
var panelTop = 1;

async function changeMainImg(x) {
	
	if(schowingCable == x) {
		
		document.getElementById(x).style.transform = "rotate(13deg)";
	} else {
		
		document.getElementById(schowingCable).style.transform = "rotate(0deg)";
		schowingCable = x;
		document.getElementById(x).style.transform = "rotate(13deg)";
        
		document.getElementById("SelType").style.color = "white"; /*kolor domyślny napisu Choose po poprawie błędu, niewybrania rodzaju kabla*/
		document.getElementById('mainImg1').style.backgroundImage = "url('img/main/cable"+x+".jpg')";
		for(var i = 1; i >= 0; i -= 0.1) {
			document.getElementById('mainImg2').style.opacity = i;
			await sleep(22);
		}
		document.getElementById('mainImg2').style.backgroundImage = "url('img/main/cable"+x+".jpg')";
		document.getElementById('mainImg2').style.opacity = 1;
	}
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

