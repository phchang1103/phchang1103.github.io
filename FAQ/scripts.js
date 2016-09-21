
var scroll = function() {

  $(window).scroll(function(){

  if ($(this).scrollTop() > 100 && $(this).width() > 1136){
	    $('header').addClass("headersmall");
      $('#logo').addClass('logosmall');
      $('header nav').css('display', 'none');
      $('#menu').css('display', 'inline-block');
     }
  else if ($(this).width() < 1136) {
      $('header nav').css('display', 'none');
     }
	else {
     $('header').removeClass("headersmall");
     $('#logo').removeClass('logosmall');
     $('header nav').css('display', 'inline-block');
     $('#menu').css('display', 'none');
      	}
   });
}


var sidenav = function() {

     $('#menu').on('click', function() {
       $('#sidenav').css('width', '200px');
       $('#page-mask').css('display', 'block');
     });

     $('#page-mask').on('click', function() {
       $('#sidenav').css('width', '0');
       $('#page-mask').css('display', 'none');
     })

     $('#closemenu').on('click', function() {
       $('#sidenav').css('width', '0');
       $('#page-mask').css('display', 'none');
     });

}

var drawer = function() {
     $('.Q').on('click', function() {
       var targetA = $(this).next();

       if ( targetA.height() == '0' ) {
         $('.A').animate({height: 0}, 100, 'linear');
         $('.A').animate({margin: 0}, 100, 'linear');
         var autoHeight = targetA.css('height', 'auto').height();
         targetA.animate({margin: '23px 0'}, 200, 'linear');
         targetA.height(0).animate({height: autoHeight}, 200, 'linear');
       }
       else {
         $('.A').animate({height: 0}, 100, 'linear');
         $('.A').animate({margin: 0}, 100, 'linear');         
       }



     });
}



$(document).ready(scroll);
$(document).ready(sidenav);
$(document).ready(drawer);
