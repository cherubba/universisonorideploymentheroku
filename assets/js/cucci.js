//Translate handler

const cucciButtonIta = document.getElementById('cucci-button');


cucciButtonIta.addEventListener('click', ()=>{
    document.getElementById('cucci-paragraph').style.display="none";
    document.getElementById('cucci-paragraph-ita').style.display="block";
    cucciButtonIta.style.backgroundColor= "#555";
    cucciButtonIta.style.color= "#FFF";
    cucciButtonEng.style.backgroundColor= "#FFF";
    cucciButtonEng.style.color= "#555";
})

const cucciButtonEng = document.getElementById('active-button-cucci');

cucciButtonEng.addEventListener('click', ()=>{
    document.getElementById('cucci-paragraph').style.display="block";
    document.getElementById('cucci-paragraph-ita').style.display="none";
    cucciButtonIta.style.backgroundColor= "#FFF";
    cucciButtonIta.style.color= "#555";
    cucciButtonEng.style.backgroundColor= "#555";
    cucciButtonEng.style.color= "#FFF";
})

