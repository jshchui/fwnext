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

    //nav goes up during downscroll, comes out when upscroll
    if(currentScroll < prevScroll) {
      $('#nav-bar').css("-webkit-transform", 'translateY(0)');
    } else  {
      $('#nav-bar').css("-webkit-transform", "translateY(-60px)");
    }
    prevScroll = currentScroll;

    //nav is cleared at the top
    if(currentScroll > 300) {
      $('#nav-bar').css("background-color", "#F2631E");
    } else {
      $('#nav-bar').css("background-color", "transparent");
    }
  });
});
