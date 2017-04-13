$(document).ready(function() {
  //var dropdown = false;
  //Hamburger menu toggling
  $('#hamburger').click(function(e) {
    $('#hamburger').parent().toggleClass('change');
    $('#nav-bar').css("background-color", "#F2631E");
    //dropdown = !dropdown;
    console.log("this cannnot be running");
  });
//&& e.target.parentNode.id !== 'hamburger'
  $(document).click(function(e) {
    //console.log( dropdown);
     if($('#click').hasClass('change')) {
      //if(dropdown === true) {
      if (e.target.id != 'hamburger' && e.target.parentNode.id !== 'hamburger' && e.target.id != 'nav-content') {
        $('#hamburger').parent().toggleClass('change');
        console.log('toggle menu');
        //dropdown = false;
      }
    }
  });

  //Scrolling animation and color change
  var prevScroll = 0;
  var currentScroll =0;
  $(window).scroll(function() {
    currentScroll = $(window).scrollTop();

    //nav goes up during downscroll, comes out when upscroll
    if(currentScroll < 900) {
      $('#nav-bar').css("-webkit-transform", 'translateY(0)');
    } else
    if(currentScroll < prevScroll) {
      $('#nav-bar').css("-webkit-transform", 'translateY(0)');
    } else  {
      $('#nav-bar').css("-webkit-transform", "translateY(-70px)");
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
