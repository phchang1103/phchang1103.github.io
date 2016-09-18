
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

var hover = function() {

    $('#arrow1').hover(
      function(){
        $('#link1').css({'color':'#C30027'});
        $(this).css({'color':'#C30027'});
      },
      function(){
        $('#link1').css({'color':'initial'});
        $(this).css({'color':'#005A87'});
      });
    $('#arrow2').hover(
      function(){
        $('#link2').css({'color':'#C30027'});
        $(this).css({'color':'#C30027'});
      },
      function(){
        $('#link2').css({'color':'initial'});
        $(this).css({'color':'#005A87'});
      });
    $('#arrow3').hover(
      function(){
        $('#link3').css({'color':'#C30027'});
        $(this).css({'color':'#C30027'});
      },
      function(){
        $('#link3').css({'color':'initial'});
        $(this).css({'color':'#005A87'});
      });
    $('#link1').hover(
      function(){
        $('#arrow1').css({'color':'#C30027'});
        $(this).css({'color':'#C30027'});
      },
      function(){
        $('#arrow1').css({'color':'#005A87'});
        $(this).css({'color':'initial'});
      });
    $('#link2').hover(
      function(){
        $('#arrow2').css({'color':'#C30027'});
        $(this).css({'color':'#C30027'});
      },
      function(){
        $('#arrow2').css({'color':'#005A87'});
        $(this).css({'color':'initial'});
      });
    $('#link3').hover(
      function(){
        $('#arrow3').css({'color':'#C30027'});
        $(this).css({'color':'#C30027'});
      },
      function(){
        $('#arrow3').css({'color':'#005A87'});
        $(this).css({'color':'initial'});
      });
}



$(document).ready(scroll);
$(document).ready(sidenav);
$(document).ready(hover);
