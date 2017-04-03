$(document).ready(function() {

  //Hamburger menu toggling
  $('.click').click(function() {
    $(`.click`).toggleClass('change');
  });



  //Scrolling animation and color change
  var prevScroll = 0;
  var currentScroll =0;
  $(window).scroll(function() {
    currentScroll = $(window).scrollTop();

    if(currentScroll < prevScroll) {
      $('#nav-bar').css("-webkit-transform", 'translateY(0)');
    } else  {
      $('#nav-bar').css("-webkit-transform", "translateY(-60px)");
    }
    prevScroll = currentScroll;

    if(currentScroll > 500) {
      $('#nav-bar').css("background-color", "#F2631E");
    } else {
      $('#nav-bar').css("background-color", "transparent");
    }
  });

  


});
