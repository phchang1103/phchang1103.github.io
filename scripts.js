
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

var pdHover = function() {

	$('#pdBrowser li').mouseover( function(){
		var id = $(this).attr('id');
		$('#tag'+id).animate({opacity : 1, marginTop: -104}, 300);
		$('#tag'+id).css('visibility', 'visible');

	});

	$('#pdBrowser li').mouseleave( function(){
		var id = $(this).attr('id');
		$('#tag'+id).animate({opacity : 0, marginTop: -84, 'visibility': 'hidden'}, 300);
});

}

var pdScroll = function() {
  var i = 0;
  $("#more").on('click', function() {
    $('.item').animate({'height': '+=555px'}, 600, 'linear');
    i++;
    var j = i*6 +1
        x = i+1;
    setInterval(function() {
      if(j< x*6-1) {
        var k = j+1
            l = j+2;
        $('#'+j).css('display', 'inline-block');
        $('#'+k).css('display', 'inline-block');
        $('#'+l).css('display', 'inline-block');
        $('#'+j).animate({'padding-top': '0px', opacity: 1}, 600, 'linear');
        $('#'+k).animate({'padding-top': '0px', opacity: 1}, 600, 'linear');
        $('#'+l).animate({'padding-top': '0px', opacity: 1}, 600, 'linear');
        j = j + 3;
      }
    }, 500);
    if (i == 2) {$('#more').css('visibility', 'hidden');}
  });

}

var pdShow = function(i) {
    var i = 1;
    setInterval(function() {
      if(i<5) {
      var j = i+1
          k = i+2;
      $('#'+i).css('display', 'inline-block');
      $('#'+j).css('display', 'inline-block');
      $('#'+k).css('display', 'inline-block');
      $('#'+i).animate({'padding-top': '0px', opacity: 1}, 600, 'linear');
      $('#'+j).animate({'padding-top': '0px', opacity: 1}, 600, 'linear');
      $('#'+k).animate({'padding-top': '0px', opacity: 1}, 600, 'linear');
      i=i+3;
    }
  }, 500);

}

var subOption = function() {
  $('.superOption').on('click', function() {
    var id = $(this).attr('id');
    $('.subCateg1').animate({opacity: 0, 'margin-left': 150, 'z-index': -1 },250, 'linear');
    $('.subCateg2').animate({opacity: 0, 'margin-left': 150, 'z-index': -1 },250, 'linear');
    $('#sub'+id).animate({opacity: 1, 'margin-left': 200, 'z-index': 2}, 500, 'linear');
  });

}


var subClose = function() {
  $('body').on('click', function() {
    $('.subCateg1').animate({opacity: 0, 'margin-left': 200, 'z-index': -1 },250, 'linear');
    $('.subCateg2').animate({opacity: 0, 'margin-left': 200, 'z-index': -1 },250, 'linear');
  });
}


$(document).ready(scroll);
$(document).ready(sidenav);
$(document).ready(pdHover);
$(document).ready(pdScroll);
$(document).ready(pdShow);
$(document).ready(subOption);
