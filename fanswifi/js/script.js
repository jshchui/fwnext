$(document).ready(function() {
  //var dropdown = false;
  //Hamburger menu toggling]
  var open = false;
  var prevScroll = 0;
  var currentScroll =0;
  $('#hamburger').click(function(e) {
    $('#hamburger').parent().toggleClass('change');
    ///$('#nav-bar').parent().toggleClass('change');
    if(open == false) {
      $('#nav-bar').css("background-color", "#F2631E");
      open = true;
    } else {
      if(currentScroll > 300) {
        $('#nav-bar').css("background-color", "#F2631E");
        open = false;
      } else {
        $('#nav-bar').css("background-color", "transparent");
        open = false;
      }
    }
    //dropdown = !dropdown;
    console.log("this cannnot be running");
  });
//&& e.target.parentNode.id !== 'hamburger'
  $(document).click(function(e) {
    console.log(e.target);
     if($('#click').hasClass('change')) {
      //if(dropdown === true) {
      if (e.target.id != 'hamburger' && e.target.parentNode.id !== 'hamburger' && e.target.id != 'nav-content' && $(e.target).attr('class') !== "expander")  {
        $('#hamburger').parent().toggleClass('change');
        //$('#nav-bar').parent().toggleClass('change');
        if(open == false) {
          $('#nav-bar').css("background-color", "#F2631E");
          open = true;
        } else {
          if(currentScroll > 300) {
            $('#nav-bar').css("background-color", "#F2631E");
            open = false;
          } else {
            $('#nav-bar').css("background-color", "transparent");
            open = false;
          }
        }
        console.log('toggle menu');
        //dropdown = false;
      }
    }
  });

  $('.expander').click(function(e)  {
    $('.dropdown-content').toggleClass('show');
  });


  //Scrolling animation and color change

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
      //$('#nav-bar').parent().toggleClass('change');
    } else {
      $('#nav-bar').css("background-color", "transparent");
      //$('#nav-bar').parent().toggleClass('change');
    }
  });
});
