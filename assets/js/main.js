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


//Play Stop Video

const videoPlayer = document.getElementById('video-uni');
const videoButton = document.getElementById('video-button');
videoButton.addEventListener('click',()=>{
  if (videoPlayer.paused) {
    videoPlayer.play();
    $("#video-button").hide();
    
  }

})
videoPlayer.addEventListener('click',()=>{
  if (videoPlayer.paused){
    videoPlayer.play();
    $("#video-button").hide();
  } else {
    videoPlayer.pause();
  $("#video-button").show();
  }
})