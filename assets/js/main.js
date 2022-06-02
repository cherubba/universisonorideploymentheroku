!(function($) {
  "use strict";

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".img-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 600,
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

})(jQuery);

//Mute Video

$('#audio-control').click(function() {
  if( $("#video-uni").prop('muted') ) { 
    $("#video-uni").prop('muted', false);
    $("#volume-mute").hide();
    $("#volume-full").show();
  } else { 
    $("#video-uni").prop('muted', true); 
    $("#volume-full").hide();
    $("#volume-mute").show();
  } 
});

function init(){
  $("#volume-full").hide();
}
init();