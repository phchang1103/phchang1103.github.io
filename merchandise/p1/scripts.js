
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

var slider = function() {
    $('#thumbnails ul li').on('click', function() {
      var id = $(this).attr('id');
      $('.active-nail').removeClass('active-nail').addClass('nail');
      $(this).removeClass('nail').addClass('active-nail');
      $('.active-slide').removeClass('active-slide').addClass('slide');
      $('#p'+id).removeClass('slide').addClass('active-slide');
    });
}

var tab = function() {
    $('#tabs li').on('click', function() {
      $('.active-tab').removeClass('active-tab').addClass('tab');
      $(this).removeClass('tab').addClass('active-tab');
      $('#tabInfo').css('border-left',  '1px solid #C0C0C0' );
    });
    $('#tabInfo').on('click', function() {
      $('#tabInfo').css('border-left',  '2px solid black' );
      $('#information').css('display', 'inline');
      $('#style').css('display', 'none');
      $('#notice').css('display', 'none');
      $('#QA').css('display', 'none');
    });
    $('#tabStyle').on('click', function() {
      $('#style').css('display', 'inline');
      $('#information').css('display', 'none');
      $('#notice').css('display', 'none');
      $('#QA').css('display', 'none');
    });
    $('#tabNotice').on('click', function() {
      $('#notice').css('display', 'inline');
      $('#style').css('display', 'none');
      $('#information').css('display', 'none');
      $('#QA').css('display', 'none');
    });
    $('#tabQA').on('click', function() {
      $('#notice').css('display', 'none');
      $('#style').css('display', 'none');
      $('#information').css('display', 'none');
      $('#QA').css('display', 'inline');
    });
}

var QAbutton = function() {
    $('#submit').click(function() {
      var dt = new Date();
      var time =  "(" + dt.getFullYear() + "-" +dt.getMonth() + "-" + dt.getDate() + " " + dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds() + ")";
      $('#QAalert').append(' <div class="Qs"><span id="QAtype" style="font-weight:600;">問題：</span>測試測試~~~一行可以塞底色會隨著行數增加變寬~預設11</div> </br>');
    });
}

//function allowReset() {
    //return window.confirm("Go ahead and clear the form?");
//}
//function allowSend() {
    //return window.confirm("Go ahead and mail this info?");
//}
var form = function() {
$('#comment').keypress( function(event) {
   if (event.which == 13) {
      event.preventDefault();
      var s = $(this).val();
      $(this).val(s+"\n");
   }
})
}

$(document).ready(scroll);
$(document).ready(sidenav);
$(document).ready(slider);
$(document).ready(tab);
$(document).ready(QAbutton);
$(document).ready(form);
