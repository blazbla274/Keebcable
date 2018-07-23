

function galeryOnOff(x,witch){

    if(x == "open") {
		
        $(".vievCart").css("display", "none");
		movinShort = 110*(witch - 1);
		schowingPicture = witch;
		document.getElementById('short'+schowingPicture).style.opacity = "1";
		document.getElementById('GaleryBox2').style.backgroundImage = "url('img/galery/composition"+witch+".jpg')";
		document.getElementById('shortMoving').style.transform = "translateX(-"+movinShort+"px)";
		document.getElementById('galeryBox').style.display = "block";
	}
	
	if(x == "close") {
		document.getElementById('galeryBox').style.display = "none";
		document.getElementById('short'+schowingPicture).style.opacity = "0.5";
        $(".vievCart").css("display", "block");
	}
	
}	
	
var schowingPicture = 1;
var muchImg = 8;
var beforX = 1;

async function galeryFunc(x) {
	
	if (semafor2 == 0) return false;
	if(beforX != x) { 
		if(kolejka != 0) {
			return false;
		}
		await sleep(100);
		beforX = x;
	}
	
	document.getElementById('short'+schowingPicture).style.opacity = "0.5";
	schowingPicture += x;
	if(muchImg < schowingPicture) schowingPicture = 1;
	if(schowingPicture <= 0)      schowingPicture = muchImg;
	
	if(semafor == 1) {
		
		semafor = 0;
		shortAnimateStart(x);
    }else kolejka++;
	
	document.getElementById('short'+schowingPicture).style.opacity = "1";
	
	document.getElementById('GaleryBox1').style.backgroundImage = "url('img/galery/composition"+schowingPicture+".jpg')";
	for(var i = 1; i >= 0; i -= 0.1) {
		document.getElementById('GaleryBox2').style.opacity = i;			
		await sleep(18);
	}
	
	document.getElementById('GaleryBox2').style.backgroundImage = "url('img/galery/composition"+schowingPicture+".jpg')";
	document.getElementById('GaleryBox2').style.opacity = 1;

	
}

var movinShort = 0; /*short position*/
var semafor = 1;
var semafor2 = 1;
var kolejka = 0;
async function shortAnimateStart(x){
	
	if((movinShort + 110 > 110*(muchImg -1))&&(x == 1)) {
		
		var k = (110*(muchImg -1))/(100);
		k *= 2;
		
		for(var g =  110*(muchImg -1); g >= 0; g -= k) {
			
			document.getElementById('shortMoving').style.transform = "translateX(-"+g+"px)";
			await sleep(1);
		}
		movinShort = 0;
	} else if((movinShort <= 0)&&(x == -1)) {
		
		var k = (110*(muchImg -1))/(100);
		k *= 2;
		
		for(var g = 0; g <= 110*(muchImg -1); g += k) {
			document.getElementById('shortMoving').style.transform = "translateX(-"+g+"px)";
			await sleep(1);
		}
		movinShort = 110*(muchImg-1);
	}else {
		
		if(x > 0){
			
			for(var i = movinShort; i <= (movinShort + 110); i+=5) {
				
				document.getElementById('shortMoving').style.transform = "translateX(-"+i+"px)";
				await sleep(10);
			}
			movinShort += 110;
		} else {
			
			for(var i = movinShort; i >= (movinShort - 110); i-=5) {
				
				document.getElementById('shortMoving').style.transform = "translateX(-"+i+"px)";
				await sleep(10);
			}
			movinShort -= 110;
		}
		
	}
	
	if(kolejka > 0) {
		
		shortAnimateStart(x);
		kolejka--;
	} else semafor = 1;
}

async function shortOnclick(witch) {
	
	if((kolejka == 0)&&(semafor == 1)&&(semafor2 == 1)) {
		
	    semafor2 = 0;
		
		var distance = witch - schowingPicture;
		if(distance == 0) {
			
			semafor2 = 1;
			return true;
		}
		
		document.getElementById('short'+schowingPicture).style.opacity = "0.5";
		
		shortOnclickMove(distance);
		schowingPicture = witch;
		
		document.getElementById('short'+schowingPicture).style.opacity = "1";
		
		document.getElementById('GaleryBox1').style.backgroundImage = "url('img/galery/composition"+schowingPicture+".jpg')";
		for(var i = 1; i >= 0; i -= 0.1) {
			document.getElementById('GaleryBox2').style.opacity = i;			
			await sleep(18);
		}
		
		document.getElementById('GaleryBox2').style.backgroundImage = "url('img/galery/composition"+schowingPicture+".jpg')";
		document.getElementById('GaleryBox2').style.opacity = 1;
	}
}

async function shortOnclickMove(distance) {
	
	var  modDistance = 3*distance;
	if(modDistance < 0) modDistance *= (-1);
	
	if(distance > 0){
			
		for(var i = movinShort; i <= (movinShort + (distance*110)); i += modDistance) {
			
			document.getElementById('shortMoving').style.transform = "translateX(-"+i+"px)";
			await sleep(7);
		}
		movinShort += distance*110;
	} else {
			
		for(var i = movinShort; i >= (movinShort + (distance*110)); i -= modDistance) {
				
			document.getElementById('shortMoving').style.transform = "translateX(-"+i+"px)";
			await sleep(7);
		}
		movinShort += distance*110;
	}
	await sleep(50);
	semafor2 = 1;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
