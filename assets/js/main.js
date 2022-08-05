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

//Translate handler

const buttonIta = document.getElementById('button-ita');


buttonIta.addEventListener('click', ()=>{
    document.getElementById('carousel-paragraph').style.display="none";
    document.getElementById('carousel-paragraph-ita').style.display="block";
    document.getElementById('repertoire-title').style.display="none";
    document.getElementById('repertoire-title-ita').style.display="block";
    document.getElementById('a-suites').style.display="none";
    document.getElementById('a-suites-ita').style.display="block";
    document.getElementById('partners-title').style.display="none";
    document.getElementById('partners-title-ita').style.display="block";
    buttonIta.style.backgroundColor= "#555";
    buttonIta.style.color= "#FFF";
    buttonEng.style.backgroundColor= "#FFF";
    buttonEng.style.color= "#555";

    

})

const buttonEng = document.getElementById('button-eng');

buttonEng.addEventListener('click', ()=>{
    document.getElementById('carousel-paragraph').style.display="block";
    document.getElementById('carousel-paragraph-ita').style.display="none";
    document.getElementById('repertoire-title').style.display="block";
    document.getElementById('repertoire-title-ita').style.display="none";
    document.getElementById('a-suites').style.display="block";
    document.getElementById('a-suites-ita').style.display="none";
    document.getElementById('partners-title').style.display="block";
    document.getElementById('partners-title-ita').style.display="none";
    buttonIta.style.backgroundColor= "#FFF";
    buttonIta.style.color= "#555";
    buttonEng.style.backgroundColor= "#555";
    buttonEng.style.color= "#FFF";
})





