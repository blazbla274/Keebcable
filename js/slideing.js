var SelectorColor;
var SelectorColor2;
$(document).ready(function(){
  
  SelectorColor = $("select").css("background-color");
  SelectorColor2 = $(".zwitkiBox > div > .slectorSeparate > select").css("background-color");
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        window.location.hash = hash;
      });
    } 
  });
});

