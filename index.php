<?php



?>
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8"/>
    <title>Keebcables</title>
    <meta name="discription" content="Custom cables for enthusiasts Made with love to mechanical keyboards"/>
    <meta name="keywords" content="mechanical, cable, cables, heatshrink, paracord, custom, homemade, coil"/>
    <meta http-eguip="X-UA-Compatible" content="IE=edge,chrome=1"/>
    
    <link rel="stylesheet" href="style.css" type="text/css"/>
    <link rel="stylesheet" href="css/shop.css" type="text/css"/>
    <link rel="shortcut icon" href="favicon.ico" />
	
    <link href="https://fonts.googleapis.com/css?family=Poppins:500" rel="stylesheet">
	
	<script src="js/jquery-1.12.3.min.js"></script>
	<script src="js/basket.js"></script>
    <script src="js/subtitles.js"></script>
	<script src="js/imgChanger.js"></script>
	<script src="js/slideing.js"></script>
	<script src="js/galery.js"></script>
    <script src="js/prefixfree.js"></script>
    
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-120130700-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-120130700-1');
    </script>

</head>
<body onload="start()">

    <nav>
        <!--[if IE]>Please stop using IE<![endif]-->
	    <div>
		    
			<div>
			
				<div class="nav">
				
					<a href="#create">
						<div class="navBox">Creator
							<div class="navLine"></div>
						</div>
					</a>
					<a href="#galery">				
						<div class="navBox">Gallery
							<div class="navLine"></div>
						</div>
					</a>	
					<a href="faq.php" onclick="this.target='_blank'">	
						<div class="navBox">FAQ
							<div class="navLine"></div>
						</div>
					</a>
					
				</div>
				
				<div class="logo"><img src="logoKeebcable.png" alt="Keebcable.com logo" height="130" width="390"></div>

				

				<div style="clear: both"></div>
				
			</div>
			
		</div>
		
    </nav>
    
    <div class="vievCart">
       
        <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" id="qw12">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----
        ">
        <input type="image" src="img/paypal/ViewButton.png" border="0" name="submit" alt="PayPal – Płać wygodnie i bezpiecznie">
        <img alt="" border="0" src="https://www.paypalobjects.com/pl_PL/i/scr/pixel.gif" width="1" height="1">
        </form>
        
    </div>
	
	<div class="them">
	    
		<div class="subtitle"><span style="font-size: calc(10px + 1vw);">Make your <span style="font-size: calc(15px + 1vw);">mechanical keyboard</span> </span>
		<span style="font-size: calc(8px + 1vw);" id="sub"></span>
		</div>
		
		<div class="subtitle description">
		    
			<span>Custom cables for enthusiasts</span> <br/>
			<span>Made with love to mechanical keyboards</span>
			
		</div>
		
		
		
	</div>
	
	<div class="customization">
	    
		<div id="create" ></div>
		<div class="pictureBox">
		
		    <div class="sitePanel">
			    
				<div class="minPictureBox" id="pictureLeftTop">
				
				    <div class="minPictureBoxInside" id="pictureLeftTopInside">
					</div>
					
				</div>
				
				<div class="minPictureBox" id="pictureLeftBottom">
				    
					<div class="minPictureBoxInside" id="pictureLeftBottomInside">
					</div>
					
				</div>
				
			</div>
			
			<div class="centerPanel" id="mainImg1">
			    <div id="mainImg2">
			    </div>
			</div>
			
			<div class="sitePanel">
			    
				<div class="minPictureBox" id="pictureRightTop">
				    
					<div class="minPictureBoxInside" id="pictureRightTopInside">
					</div>
					
				</div>
				
				<div class="minPictureBox" id="pictureRightBottom">
				    
					<div class="minPictureBoxInside" id="pictureRightBottomInside">
					</div>
					
				</div>
				
			</div>
			
		</div>
		
	
		<div class="preferenceBox">
		
		    <div class="prefBoxSeparate">
			    
				<h1 id="SelType">Choose</h1>
				<div class="colorContainer">
				
<?php
  
for($i = 1; $i <= 286; $i++) {

echo<<<END

    <div class="circle" id="$i" style="background-image: url(img/main/circle$i.jpg)" onclick="changeMainImg($i); basket('Type', ''+$i);">$i
	</div>

END;
	
}

?>
				</div>
				
			</div>
			
			<div class="prefBoxSeparate" >
			    
				<div class="slectorSeparate">
				
				    <select id="SelHeat" onchange="changeMini('pictureLeftTop','Heatshrink',value); basket('Heatshrink',value);">
					
						<option value="null">Heatshrink</option>
						<option value="Black">Black</option>
                        <option value="White">White</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Red">Red</option>
                        <option value="Purple">Purple</option>
                        <option value="Orange">Orange</option>
                        <option value="Green">Green</option>
                        <option value="Gray">Gray</option>
                        <option value="Clear">Clear</option>
						<option value="Brown">Brown</option>
						<option value="Blue">Blue</option>
						
					</select>
					
					<select onchange="changeMini('pictureRightTop','DoubleSleeving',value); basket('DoubleSleeving',value);">
					
						<option value="null">Double sleeving</option>
						<option value="Black">[Techflex] Black</option>
						<option value="White">[Techflex] White</option>
                        <option value="Blue">[Techflex] Blue</option>
                        <option value="NeonBlue">[Techflex]  Neon Blue</option>
                        <option value="Carbon">[Techflex]  Carbon</option>
                        <option value="DarkPurple">[Techflex] Dark Purple</option>
                        <option value="Beige">[Techflex]  Beige</option>
                        <option value="Green">[Techflex]  Green</option>
                        <option value="ForestGreen">[Techflex]  Forest Green</option>
                        <option value="NeonGreen">[Techflex]  Neon Green</option>
                        <option value="Gray">[Techflex]  Gray</option>
                        <option value="PlatinGray">[Techflex]  Platin Gray</option>
                        <option value="Orange">[Techflex]  Orange</option>
                        <option value="Red">[Techflex] Red</option>
                        <option value="NeonRed">[Techflex]  Neon Red</option>
                        <option value="Brown">[Techflex]  Brown</option>
                        <option value="Yellow">[Techflex]  Yellow</option>
                        <option value="NeonYellow">[Techflex]  Neon Yellow</option>
                        <option value="Superhero">[Techflex]  Superhero</option>
						<option value="Clear">[Techflex] Clear</option>
					
					</select>
					
					<select id="SelLength" onchange="basket('Length',value);">
		
					    <option value="null">Length</option>
						<option value="0.5m">0.5m</option>
						<option value="1m">1m</option>
						<option value="1.5m">1.5m</option>
						<option value="2m">2m</option>
						<option value="2.5m">2.5m</option>
						<option value="3m">3m</option>
						
					</select>
					
				</div>
				
				<div class="slectorSeparate">
				
				    <select id="SelConn1" onchange="changeMini('pictureLeftBottom','Connector',value); basket('Connector1',value);">
								<option value="null">Connector #1</option>
								<option value="USB A">USB A</option>
								<option value="USB mini B">USB mini B</option>
								<option value="USB micro B">USB micro B</option>
								<option value="USB A Gold Plated">USB A Gold Plated</option>
								<option value="USB mini B Gold Plated">USB mini B Gold Plated</option>
					</select>
					
					<select id="SelConn2" onchange="changeMini('pictureRightBottom','Connector',value); basket('Connector2',value);">
								<option value="null">Connector #2</option>
								<option value="USB A">USB A</option>
								<option value="USB mini B">USB mini B</option>
								<option value="USB micro B">USB micro B</option>
								<option value="USB A Gold Plated">USB A Gold Plated</option>
								<option value="USB mini B Gold Plated">USB mini B Gold Plated</option>
					</select>

					
<form class="payForm" target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
<input disabled id="iPPtype" type="hidden" name="cmd" value="_s-xclick">
<input disabled id="iPPacces" type="hidden" name="hosted_button_id" value="">
<table>
	<tr><td>
		<input disabled id="iPP" type="hidden" name="on0" value="Option">
	</td></tr>
	<tr><td><select id="PPoption" name="os0">
			<option id="PPoptionValue" value=""></option>
	</select> 
</td></tr>
<tr><td><input disabled id="iPPprop" type="hidden" name="on1" value="Parameters"></td></tr>
<tr><td><input disabled id="iPPinfo" type="text" name="os1"></td></tr>
</table>
<input disabled id="iPPcurrency" type="hidden" name="currency_code" value="EUR">
<div onclick="walidationButton()" id="buttonCurtain">
</div>
<input disabled id="iPPimg" type="image" src="img/paypal/PayButton.png" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">

<img alt="" border="0" src="https://www.paypalobjects.com/pl_PL/i/scr/pixel.gif" width="1" height="1">
</form>

				</div>
				
			</div>
			
		</div>
		
	</div>
	
	<div class="zwitkiBox">
        <div>
            <h1 id="SelType">Coils</h1>
            <span>
            Length of cable between keyboard connector and coils by default is 2 cm. 
            Length of coils you choose won’t be built in overall length of cable.
            For example: if you order 1m cable with 15cm of coils, overall it will be exactly 1,15m.
            Due to USB power limits we recommend to keep length of cable under 5 meters. (to get 1cm of coils there is need to use around 9cm of straight cable) 
            Keep in mind that there are keyboards like HHKB which require more power so 2,5m is upper limit for them.
            </span>
        </div>
        <div>
            <div class="slectorSeparate">
                <textarea placeholder="Please read FAQ before ordering cable. If you buy multiple cables please write here which one has to come with coils." 
                          id="INPUTdescriptionZWITKA" onblur="basketZWITKA('Description', 'Description')"></textarea>
            </div>
             <div class="slectorSeparate">
				
				    <select id="SizeZWITKA" onchange="basketZWITKA('Size', value)">
								<option value="null">Size</option>
								<option value="S">S</option>
                            <!--    <option value="M">M</option>
								<option value="L">L</option>  -->
					</select>
					
					<select id="LengthZWITKA" onchange="basketZWITKA('Length', value)">
								<option value="null">Length</option>
								<option value="15cm">15cm</option>
								<option value="20cm">20cm</option>
								<option value="25cm">25cm</option>
								<option value="30cm">30cm</option>
					</select>

					
<form class="payForm" target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
<input disabled id="iPPtypeZWITKA" type="hidden" name="cmd" value="_s-xclick">
<input disabled id="iPPaccesZWITKA" type="hidden" name="hosted_button_id" value="GVZ82UYPF9BUJ">
<table>
	<tr><td>
		<input disabled id="iPPZWITKA" type="hidden" name="on0" value="Size">
	</td></tr>
	<tr><td><select id="PPoptionZWITKA" name="os0">
			<option id="PPoptionValueZWITKA" value=""></option>
	</select> 
</td></tr>
<tr><td><input disabled id="iPPpropZWITKA" type="hidden" name="on1" value="description"></td></tr>
<tr><td><input disabled id="iPPinfoZWITKA" type="text" name="os1"></td></tr>
</table>
<input disabled id="iPPcurrencyZWITKA" type="hidden" name="currency_code" value="EUR">
<div onclick="walidationButtonZWITKA()" id="buttonCurtainZWITKA">
</div>
<input disabled id="iPPimgZWITKA" type="image" src="img/paypal/PayButton.png" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">

<img alt="" border="0" src="https://www.paypalobjects.com/pl_PL/i/scr/pixel.gif" width="1" height="1">
</form>

            </div>
        </div>
    </div>
	
	<div class="galeryBanerBack" id="galeryBox">
	
	    <div class="cross" onclick="galeryOnOff('close')">
		    
			<i class="icon-plus"></i>
			
		</div>
	
	    <div class="arrowLeft" onclick="galeryFunc(-1)">
		    
			<i class="icon-angle-left"></i>
			
		</div>
		
			<div class="galeryBaner" id="GaleryBox1">
			    
				<div id="GaleryBox2">
				</div>
				
				<div class="galeryShortBox">
				
				<div id="shortMoving">
				
<?php
  
for($i = 1; $i <= 8; $i++) {

echo<<<END

    <div class="short" id="short$i" onclick="shortOnclick($i)" style="background-image: url(img/galery/compositionMini$i.jpg)">
	</div>

END;
	
}

?>

                </div>
				
			    </div>
				
			</div>
			
			
		<div class="arrowRight" onclick="galeryFunc(1)">
		    
			<i class="icon-angle-right"></i>
			
		</div>
	
	</div>
	
	<div class="galeryContainer">
	    
		<div id="galery"></div>
		
	    <div class="galeryBox" style="background-image: url(img/galery/compositionMini1.jpg);">
		
		    <div class="loupeIko" onclick="galeryOnOff('open',1)">
			SHOW
			</div>
			
		    <div class="galeryInfoBox">
                
                <ul>
                  <li>Laser</li>
                  <li>Dark purple techflex</li>
                  <li>Neon Pink paracord</li>
                  <li>Purple heatshrinks</li>
                </ul>
                
			</div>
			
		</div>
		
		<div class="galeryBox" style="background-image: url(img/galery/compositionMini2.jpg);">
		
		    <div class="loupeIko" onclick="galeryOnOff('open',2)">
			SHOW
			</div>
			
		    <div class="galeryInfoBox">
                
                <ul>
                  <li>Carbon</li>
                  <li>Carbon techflex</li>
                  <li>Orange paracord</li>
                  <li>Gray heatshrinks</li>
                </ul>
                
			</div>
			
		</div>
		
		<div class="galeryBox" style="background-image: url(img/galery/compositionMini3.jpg);">
		
		    <div class="loupeIko" onclick="galeryOnOff('open',3)">
			SHOW
			</div>
			
		    <div class="galeryInfoBox">
			
                <ul>
                  <li>Nautilus</li>
                  <li>Blue techflex</li>
                  <li>Midnight Blue paracord</li>
                  <li>Yellow heatshrinks</li>
                </ul>
                
			</div>
			
		</div>
		
		<div class="galeryBox" style="background-image: url(img/galery/compositionMini4.jpg);">
		
		    <div class="loupeIko" onclick="galeryOnOff('open',4)">
			SHOW
			</div>
			
		    <div class="galeryInfoBox">
						
                <ul>
                  <li>Jukebox</li>
                  <li>White techflex</li>
                  <li>Mint paracord</li>
                  <li>Red heatshrinks</li>
                </ul>
                
			</div>
			
		</div>	
        
        <div class="galeryBox" style="background-image: url(img/galery/compositionMini5.jpg);">
		
		    <div class="loupeIko" onclick="galeryOnOff('open',5)">
			SHOW
			</div>
			
		    <div class="galeryInfoBox">
						
                <ul>
                  <li>Rainbow</li>
                  <li>Clear techflex</li>
                  <li>Rainbow paracord</li>
                  <li>White heatshrinks + 6"(15cm) of coils</li>
                </ul>
                
			</div>
			
		</div>
        
        <div class="galeryBox" style="background-image: url(img/galery/compositionMini6.jpg);">
		
		    <div class="loupeIko" onclick="galeryOnOff('open',6)">
			SHOW
			</div>
			
		    <div class="galeryInfoBox">
						
                <ul>
                  <li>Domino</li>
                  <li>White techflex</li>
                  <li>Black paracord</li>
                  <li>White &amp; Black heatshrinks</li>
                </ul>
                
			</div>
			
		</div>
        
        <div class="galeryBox" style="background-image: url(img/galery/compositionMini7.jpg);">
		
		    <div class="loupeIko" onclick="galeryOnOff('open',7)">
			SHOW
			</div>
			
		    <div class="galeryInfoBox">
						
                <ul>
                  <li>Purple one</li>
                  <li>Purple techflex</li>
                  <li>Black paracord</li>
                  <li>Purple heatshrinks</li>
                </ul>
                
			</div>
			
		</div>
        
        <div class="galeryBox" style="background-image: url(img/galery/compositionMini8.jpg);">
		
		    <div class="loupeIko" onclick="galeryOnOff('open',8)">
			SHOW
			</div>
			
		    <div class="galeryInfoBox">
						
                <ul>
                  <li>Flamaster</li>
                  <li>Neon green techflex</li>
                  <li>Red paracord</li>
                  <li>Red heatshrinks</li>
                </ul>
                
			</div>
			
		</div>
		
	</div>
	
	<div class="deliverBox">
	
		<div>
			<div class="deliver icon">   
			</div> 
			<span>International tracked parcel by Polish Post: 4,00€</span>
		</div>

        <div>
			<div class="payPal icon">   
			</div> 
			<span>Payment via PayPal (account balauce or credit/debit card)</span>
		</div>	

        <div>
			<div class="clock icon">   
			</div> 
			<span>ETA - 10days for EU, 14days worldwide</span>
		</div>			
	
	</div>
	
	<div class="instagramBox">

	    
	   <i class="icon-instagram"><a href="https://www.instagram.com/keebcables/"></a></i>
	    <div>
			For pictures from backstage and <br/> more great photos visit us on Instagram.
		</div>

	</div>
	

	<div class="footer">
	
        ©2018 Keebcables 
        | <a href="https://m.me/100001905762430" title="Contact us by Messenger">Messenger</a> 
        | <a href="https://www.reddit.com/user/Pitrek7" title="Contact us by Reddit">Reddit</a>
		
	</div>

    <div class="mobileInfo">
        
        <span>The mobile version is coming soon, thank you for your understanding</span>
        
    </div>
    
</body>
</html>