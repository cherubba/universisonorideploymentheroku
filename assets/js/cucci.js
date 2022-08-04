
const cucciIta ={
    "trad" : "Stefano Cucci, pianista, compositore, direttore di coro e d'orchestra, musicologo, ha al suo attivo un'intensa attività concertistica.La sua scuola di pianoforte, in 40 anni di attività, ha formato allievi che hanno vinto importanti concorsi internazionali. Come pianista ha svolto un'intensa attività cameristica in ensemble e in duo pianistico.Come direttore d'orchestra ha debuttato con la Budapest Chamber Orchestra in un programma dedicato a Vivaldi e si è poi specializzato nella musica contemporanea e storica del XX secolo.Per circa vent'anni è stato assistente musicale di Ennio Morricone preparando importanti cori e orchestre per le sue tournée (La Scala di Milano, l'Accademia Nazionale di Santa Cecilia, la Sinfonica Nazionale Ceca, la Filarmonica di Zagabria, la Sinfonietta di Roma ecc.).Ha ideato e diretto il San Leo Festival dal 1985 al 2020. È docente di lettura della partitura presso il Conservatorio di Frosinone.Dal 2015 è direttore principale di Pentarte Ensemble e dal 1994 del Coro Lirico Sinfonico Romano.Ha recentemente pubblicato per la IWB 'Lontane presenze, l'universo poetico di Ennio Morricone', un libro dedicato alla sua musica assoluta.",
    "tradback" : "Stefano Cucci, pianist, composer, choir and orchestra director, musicologist, has an intense concert activity to his credit. His piano school, in 40 years of activity, has trained students who have won important international competitions. As a pianist he has carried out an intense chamber music activity in ensemble and piano duo. As conductor he made his debut with the Budapest Chamber Orchestra in a program dedicated to Vivaldi and then specialized in contemporary and historical 20th century music.For about twenty years he was the Music Assistant of Ennio Morricone preparing important choirs and orchestras for his tours (La Scala in Milan, the National Academy of Santa Cecilia, the Czech National Symphony, the Zagreb Philharmonic, Rome Sinfonietta etc.). He conceived and directed the San Leo Festival from 1985 to 2020. He is Professor of Score Reading at the Frosinone Conservatory.Since 2015 he has been Chief Conductor of Pentarte Ensemble and since 1994 of the Roman Symphonic Lyric Choir. He recently published for the IWB 'Lontane presenze, the poetic universe of Ennio Morricone' ,a book dedicated to his absolute music."
}

const para = document.getElementById('cucci-paragraph');

const englEl = document.querySelector('.div-trans-button-cucci');

const btnCucci = document.getElementById('cucci-button');
const btnCucci2 = document.getElementById('active-button-cucci');

btnCucci.addEventListener('click', ()=>{
    btnCucci2.classList.remove('active-button-cucci');
    btnCucci.classList.add('active-button-cucci');
    para.textContent=cucciIta.trad;
   
})
btnCucci2.addEventListener('click', ()=>{
    btnCucci.classList.remove('active-button-cucci');
    btnCucci2.classList.add('active-button-cucci');
    para.textContent=cucciIta.tradback
    
})




