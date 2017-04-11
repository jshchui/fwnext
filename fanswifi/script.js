$(document).ready(function() {
  //Hamburger menu toggling
  $('.hamburger').click(function() {
    $(`.hamburger`).toggleClass('change');
    $('.hamburger').parent().toggleClass('change');
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
      $('#nav-bar').css("-webkit-transform", "translateY(-70px)");
    }
    prevScroll = currentScroll;

    //nav is cleared at the top
    if(currentScroll > 400) {
      $('#nav-bar').css("background-color", "#F2631E");
    } else {
      $('#nav-bar').css("background-color", "transparent");
    }
  });





  // (function($) {
  //   $.fn.visible = function(partial) {
  //       var $t            = $(this),
  //           $w            = $(window),
  //           viewTop       = $w.scrollTop(),
  //           viewBottom    = viewTop + $w.height(),
  //           _top          = $t.offset().top,
  //           _bottom       = _top + $t.height(),
  //           compareTop    = partial === true ? _bottom : _top,
  //           compareBottom = partial === true ? _top : _bottom;
  //     return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  //   };
  // })(jQuery);
  //
  // var win = $(window);
  // var allMods = $(".slide");
  //
  // allMods.each(function(i, el) {
  //   var el = $(el);
  //   if (el.visible(true)) {
  //     el.addClass("already-visible");
  //   }
  // });
  //
  // win.scroll(function(event) {
  //
  //   allMods.each(function(i, el) {
  //     var el = $(el);
  //     if (el.visible(true)) {
  //       el.addClass("come-in");
  //     }
  //   });
  //
  // });
});
