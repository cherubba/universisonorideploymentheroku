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






//oggetto js per la traduzione
const dataIta = {
  "italian" : {
    "description" : 
    "è un progetto musicale che propone un’immagine diversa e, per certi versi, inaspettata della produzione di musica per il cinema del compositore romano. Abituati alle grandi sonorità delle formazioni orchestrali, con cui ripercorriamo la storia di 60 anni di movie music, scoprire la dimensione intima e raffinata di questi arrangiamenti per archi, violino solista e pianoforte è una rivelazione, una finestra su un mondo di atmosfere seduttive, un rincorrersi di contrappunti e di alchimie che solo la mano magica di Ennio Morricone sapeva costruire. Realizzate per e con Marco Serino, storico collaboratore del Maestro, le suite di molti dei capolavori della sua produzione di musica “applicata” rivelano, in maniera più manifesta, le strette interconnessioni con la sua musica “assoluta”. I dettagli, che possono sfuggire all’ascolto della grande orchestra sinfonica, diventano qui ricami con cui Morricone impreziosisce il tessuto armonico e melodico delle sue composizioni.",
    "scores" : "Partiture originali scritte dal Maestro Morricone",
    "suites": "Suite per violino solista, orchestra d’archi pianoforte",
    "partners" : "I nostri Partners",
    "visit" : "Visita la pagina dell'Artista"
   
  },
  "english": {
    "description" : 
    "is a musical project that offers a different and, in some ways, unexpected image of the Roman composer's production of music for the cinema.Accustomed to the great sounds of orchestral ensembles, with which we retrace the history of 60 years of movie music, discovering the intimate and refined dimension of these arrangements for strings, solo violin and piano is a revelation, a window on a world of seductive atmospheres, a succession of counterpoints and alchemies that only Ennio Morricone's magic hand could build.Produced for and with Marco Serino, a historic collaborator of the Maestro, the suites of many of the masterpieces of his 'applied' music production reveal, in a more manifest manner, close interconnections with his 'absolute' music.The details, which may escape when listening to a large symphony orchestra, here become precious elements with which Morricone enriches his compositions.",
    "scores" : "ORIGINAL SCORES WRITTEN BY MAESTRO ENNIO MORRICONE",
    "suites" : "Suites for Solo Violin, String Orchestra and Piano",
    "partners" : "Our Partners",
    "visit" : "Visit Artist Page"

  }
}

//pulsanti traduzione
const langEl = document.querySelector('.div-trans-button');
const btn = document.querySelectorAll('button');
const descr = document.querySelector('.project-descr');
const scores = document.querySelector('.scores');
const suites = document.querySelector('#suites');
const partners = document.querySelector('#partners-title');


btn.forEach(el=>{
  el.addEventListener('click',()=>{
    langEl.querySelector('.active-button').classList.remove('active-button');
    el.classList.add('active-button');

    const attr = el.getAttribute('language');

    descr.textContent = dataIta[attr].description;
    scores.textContent= dataIta[attr].scores;
    suites.textContent = dataIta[attr].suites;
    partners.textContent = dataIta[attr].partners;

  })
})






