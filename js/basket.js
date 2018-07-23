
var BasketHeatshrink = "null";
var BasketDoubleSleeving = "null";
var BasketConnector1 = "null";
var BasketConnector2 = "null";
var BasketLength = "null";
var BasketType = "null"; /*rodzaj kabla, oplotu*/

function basket(what, type) {
	
	var selectBoxId;
	
	switch(what) {
		
		case "Heatshrink": BasketHeatshrink = type;
		selectBoxId = "SelHeat";
		break;
		
		case "DoubleSleeving": BasketDoubleSleeving = type;
		break;
		
		case "Connector1": BasketConnector1 = type;
		selectBoxId = "SelConn1";
		break;
		
		case "Connector2": BasketConnector2 = type;
		selectBoxId = "SelConn2";
		break;
		
		case "Type": BasketType = type;
		selectBoxId = "SelType";
		break;
		
		case "Length": BasketLength = type;
		selectBoxId = "SelLength";
		
		switch(type) {
			case "0.5m": document.getElementById("iPPacces").value = "8LMTUP6JDFMX8"/*numer przycisku*/
			break;
			case "1m": document.getElementById("iPPacces").value = "VYZ5PQEGFFDS6"/*numer przycisku*/
			break;
			case "1.5m": document.getElementById("iPPacces").value = "AGAWVVHWRM8BY"/*numer przycisku*/
			break;
			case "2m": document.getElementById("iPPacces").value = "4JTRH6MUWUV62"/*numer przycisku*/
			break;
			case "2.5m": document.getElementById("iPPacces").value = "FJLLVLNNKCS7W"/*numer przycisku*/
			break;
			case "3m": document.getElementById("iPPacces").value = "SMSUATN95DCYJ"/*numer przycisku*/
			break;
		}
		break;
	}
	
	/*zmina tła selektu*/
	if((type != "null")&&(selectBoxId != "SelType")) {
		
		document.getElementById(selectBoxId).style.backgroundColor = SelectorColor;         /*kolor domyślny*/
	}
	
	/*warunek uruchomienia przycisku*/
	if((BasketHeatshrink != "null")&&(BasketType != "null")&&(BasketLength != "null")&&(BasketConnector1 != "null")&&(BasketConnector2 != "null")) {
		
		var x = BasketDoubleSleeving;
		if(x == "null") x = "none";
		
		document.getElementById("iPPinfo").value = "Paracord ["+BasketType+"], Heatshrink ["+BasketHeatshrink+"], DoubleSleeving ["+x+"], Connector #1 ["+BasketConnector1+"], Connector #2 ["+BasketConnector2+"]";
		
		/*dla 2 goldów i double slevingu*/
		if((BasketDoubleSleeving != "null")&&((BasketConnector1 == "USB A Gold Plated")||(BasketConnector1 == "USB mini B Gold Plated"))&&((BasketConnector2 == "USB A Gold Plated")||(BasketConnector2 == "USB mini B Gold Plated"))) 
		document.getElementById("PPoptionValue").value = "Legendary";
	
	    else {
	
			if((BasketDoubleSleeving != "null")&&(((BasketConnector1 == "USB A Gold Plated")||(BasketConnector1 == "USB mini B Gold Plated")||(BasketConnector1 == "USB micro B Gold Plated"))||((BasketConnector2 == "USB A Gold Plated")||(BasketConnector2 == "USB mini B Gold Plated")||(BasketConnector2 == "USB micro B Gold Plated")))) 
			document.getElementById("PPoptionValue").value = "Godlike";
		    else if(BasketDoubleSleeving != "null")
			document.getElementById("PPoptionValue").value = "Premium";
		    
			if((BasketDoubleSleeving == "null")&&((BasketConnector1 == "USB A Gold Plated")||(BasketConnector1 == "USB mini B Gold Plated")||(BasketConnector1 == "USB micro B Gold Plated"))&&((BasketConnector2 == "USB A Gold Plated")||(BasketConnector2 == "USB mini B Gold Plated")||(BasketConnector2 == "USB micro B Gold Plated")))
                document.getElementById("PPoptionValue").value = "Boosted";	
            else if((BasketDoubleSleeving == "null")&&(((BasketConnector1 == "USB A Gold Plated")||(BasketConnector1 == "USB mini B Gold Plated")||(BasketConnector1 == "USB micro B Gold Plated"))||((BasketConnector2 == "USB A Gold Plated")||(BasketConnector2 == "USB mini B Gold Plated")||(BasketConnector2 == "USB micro B Gold Plated"))))
                document.getElementById("PPoptionValue").value = "Upgraded";						 
			else if((BasketDoubleSleeving == "null")&&(BasketConnector1 != "USB A Gold Plated")&&(BasketConnector2 != "USB A Gold Plated"))
                document.getElementById("PPoptionValue").value = "Basic";				
	    }
		
		//zwolnieni przycisku
		document.getElementById("iPPtype").disabled = false;
		document.getElementById("iPPacces").disabled = false;
		document.getElementById("iPP").disabled = false;
		document.getElementById("iPPprop").disabled = false;
		document.getElementById("iPPinfo").disabled = false;
		document.getElementById("iPPcurrency").disabled = false;
		document.getElementById("iPPimg").disabled = false;
		document.getElementById("buttonCurtain").style.zIndex = "1399"; /*z-indek przycisku 1400*/
	} else {
		document.getElementById("iPPtype").disabled = true;
		document.getElementById("iPPacces").disabled = true;
		document.getElementById("iPP").disabled = true;
		document.getElementById("iPPprop").disabled = true;
		document.getElementById("iPPinfo").disabled = true;
		document.getElementById("iPPcurrency").disabled = true;
		document.getElementById("iPPimg").disabled = true;
		document.getElementById("buttonCurtain").style.zIndex = "1401"; 
	}
}

function walidationButton(){
	
	var backColorBeforFail = SelectorColor; //kolor tła przed zaczerwienieniem
	
	if(BasketHeatshrink == "null") selscColorChanger("SelHeat");
	else document.getElementById("SelHeat").style.backgroundColor = backColorBeforFail;
	
	if(BasketLength == "null") selscColorChanger("SelLength");
	else document.getElementById("SelLength").style.backgroundColor = backColorBeforFail;
	
	if(BasketConnector1 == "null") selscColorChanger("SelConn1");
	else document.getElementById("SelConn1").style.backgroundColor = backColorBeforFail;
	
	if(BasketConnector2 == "null") selscColorChanger("SelConn2");
	else document.getElementById("SelConn2").style.backgroundColor = backColorBeforFail;
	
	if(BasketType == "null") {
		$( "#SelType" ).animate({
			opacity: 0.4,
		}, 50, function() {
			document.getElementById("SelType").style.color = "rgb(244, 86, 66)";
		});
		$( "#SelType" ).animate({
			opacity: 1,
		}, 200);
	} else document.getElementById("SelType").style.color = "white";
}

function selscColorChanger(x) {
	
	$( "#"+x ).animate({
		opacity: 0.4,
	}, 50, function() {
		document.getElementById(x).style.backgroundColor = "rgb(244, 86, 66)";
	});
	$("#"+x ).animate({
		opacity: 1,
	}, 200);
}

var lengthZWITKA = "null";
var sizeZWITKA = "null";
var descriptionZWITKA = "";
function basketZWITKA(what, type) {
    
    switch(what) {
		
		case "Size": sizeZWITKA = type;                                                                                                                                                                                   
            document.getElementById("PPoptionValueZWITKA").value = sizeZWITKA;
		    selectBoxId = "SizeZWITKA";
		break;
		
		case "Length": lengthZWITKA = type;
		selectBoxId = "LengthZWITKA";
		
		switch(type) {
			case "15cm": document.getElementById("iPPaccesZWITKA").value = "GVZ82UYPF9BUJ"/*numer przycisku*/
			break;
			case "20cm": document.getElementById("iPPaccesZWITKA").value = "7Y3A5DFC6QELC"/*numer przycisku*/
			break;
			case "25cm": document.getElementById("iPPaccesZWITKA").value = "8CHAEEEK7CG4U"/*numer przycisku*/
			break;
			case "30cm": document.getElementById("iPPaccesZWITKA").value = "E27YRKJE6CUNU"/*numer przycisku*/
			break;   
		}
		break;
	}
    
    //przepisanie dodatkowego opisu
    descriptionZWITKA = document.getElementById("INPUTdescriptionZWITKA").value;
    document.getElementById("iPPinfoZWITKA").value = descriptionZWITKA;
    
    	/*zmina tła selektu*/
	if((type != "null")&&( type != "Description")) {
		
		document.getElementById(selectBoxId).style.backgroundColor = SelectorColor2;         /*kolor domyślny*/
	}
    
    if((lengthZWITKA != "null")&&(sizeZWITKA != "null")) {
        
    		//zwolnieni przycisku
		document.getElementById("iPPtypeZWITKA").disabled = false;
		document.getElementById("iPPaccesZWITKA").disabled = false;
		document.getElementById("iPPZWITKA").disabled = false;
		document.getElementById("iPPpropZWITKA").disabled = false;
		document.getElementById("iPPinfoZWITKA").disabled = false;
		document.getElementById("iPPcurrencyZWITKA").disabled = false;
		document.getElementById("iPPimgZWITKA").disabled = false;
		document.getElementById("buttonCurtainZWITKA").style.zIndex = "1399"; /*z-indek przycisku 1400*/
	} else {
		document.getElementById("iPPtypeZWITKA").disabled = true;
		document.getElementById("iPPaccesZWITKA").disabled = true;
		document.getElementById("iPPZWITKA").disabled = true;
		document.getElementById("iPPpropZWITKA").disabled = true;
		document.getElementById("iPPinfoZWITKA").disabled = true;
		document.getElementById("iPPcurrencyZWITKA").disabled = true;
		document.getElementById("iPPimgZWITKA").disabled = true;
		document.getElementById("buttonCurtainZWITKA").style.zIndex = "1401"; 
	}
}

function walidationButtonZWITKA(){
    
	var backColorBeforFail = SelectorColor2; //kolor tła przed zaczerwienieniem
	
	if(sizeZWITKA == "null") selscColorChanger("SizeZWITKA");
	else document.getElementById("SizeZWITKA").style.backgroundColor = backColorBeforFail;
	
	if(lengthZWITKA == "null") selscColorChanger("LengthZWITKA");
	else document.getElementById("LengthZWITKA").style.backgroundColor = backColorBeforFail;
}

$(document).ready(function() {
    
    $(document).scroll(function(){
        
      let navPosition = parseInt($(".vievCart").offset().top);

      if(navPosition < 750) {
          $(".vievCart").css("opacity","0");
      } else {
          $(".vievCart").css("opacity","1");
      }
      
  });
})