var autoplay = function() {

    setInterval ( function() {
      var currentDot = $('.active-dot')
          currentSlide = $('.active-slide')
          nextDot = currentDot.next()
          nextSlide = currentSlide.next()
      if (!nextSlide.length) {
        var nextSlide = $('.slide').first()
            nextDot = $('.dot').first();
        currentSlide.fadeOut(1000, function() {
          $(this).removeClass('active-slide').addClass('slide');
          nextSlide.fadeIn(1000).removeClass('slide').addClass('active-slide');
          });
        currentDot.find('img').attr('src', "slider/dot.png");
        nextDot.find('img').attr("src", "slider/active-dot.png");
        currentDot.removeClass('active-dot').addClass('dot');
        nextDot.removeClass('dot').addClass('active-dot');
      }
      else {
        currentSlide.fadeOut(1000, function() {
          $(this).removeClass('active-slide').addClass('slide');
          nextSlide.fadeIn(1000).removeClass('slide').addClass('active-slide');
          });
        currentDot.find('img').attr('src', "slider/dot.png");
        nextDot.find('img').attr("src", "slider/active-dot.png");
        currentDot.removeClass('active-dot').addClass('dot');
        nextDot.removeClass('dot').addClass('active-dot');
      }
    }, 5000);

}




var clickdot = function(){

//click-dot//

  $('.dot-nav li').on('click', function(){

    var index = $(this).index()
      	currentSlide = $('.active-slide')
	      currentDot = $('.active-dot');

    currentSlide.fadeOut(500, function(){
      currentSlide.removeClass('active-slide').addClass('slide');
      $('.slide').eq(index).fadeIn(500).removeClass('slide').addClass('active-slide');

    });

    currentDot.find('img').attr('src', "slider/dot.png");
    $(this).find('img').attr("src", "slider/active-dot.png");
    currentDot.removeClass('active-dot').addClass('dot');
    $(this).removeClass('dot').addClass('active-dot');

});


}


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

var pdSlide = function() {

var slideCount = 5;
var slideWidth = $('#pdSlider ul li').width() + 86;
var slideHeight = $('#pdSlider ul li').height();
var sliderUlWidth = slideCount * slideWidth ;


	$('#pdSlider').css({ width: slideWidth*3 + 40, height: slideHeight });

  $('#pdSlider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth});

  $('#pdSlider ul.pd li:last-child').prependTo('#pdSlider ul.pd');
  $('#pdSlider ul.tag li:last-child').prependTo('#pdSlider ul.tag');

  function moveLeft() {
      $('#pdSlider ul.pd').animate({left: + slideWidth -30}, 600, function() {
          $('#pdSlider ul.pd li:last-child').prependTo('#pdSlider ul.pd');
          $('#pdSlider ul.pd').css('left', '20px');
      });
			$('#pdSlider ul.tag').animate({left: + slideWidth}, 600, function() {
			    $('#pdSlider ul.tag li:last-child').prependTo('#pdSlider ul.tag');
			    $('#pdSlider ul.tag').css('left', '20px');
      });
  };

  function moveRight() {
		$('#pdSlider ul.pd').animate({left: - slideWidth +30}, 600, function() {
				$('#pdSlider ul.pd li:first-child').appendTo('#pdSlider ul.pd');
				$('#pdSlider ul.pd').css('left', '20px');
		});
		$('#pdSlider ul.tag').animate({left: - slideWidth +25}, 600, function() {
				$('#pdSlider ul.tag li:first-child').appendTo('#pdSlider ul.tag');
				$('#pdSlider ul.tag').css('left', '20px');
    });
  };

  $('.pdLeft').click(function() {
      moveLeft();
  });

  $('.pdRight').click(function() {
      moveRight();
  });

}


var pdHover = function() {

	$('#pdSlider ul.pd li img').mouseover( function(){
		var id = $(this).attr('id');
		$('#pdSlider ul.tag #tag'+id).animate({opacity : 1, bottom : '60px'}, 400);
		$('#pdSlider ul.tag #tag'+id).css('visibility', 'visible');
	});

	$('#pdSlider ul.pd li img').mouseleave( function(){
		var id = $(this).attr('id');
		$('#pdSlider ul.tag #tag'+id).animate({opacity : 0, bottom : '0px'}, 400);
		setTimeout(function() {
			$('#pdSlider ul.tag #tag'+id).css('visibility', 'hidden');
		}, 200);
	});

}


$(document).ready(scroll);
$(document).ready(autoplay);
$(document).ready(clickdot);
$(document).ready(sidenav);
$(document).ready(pdSlide);
$(document).ready(pdHover);
