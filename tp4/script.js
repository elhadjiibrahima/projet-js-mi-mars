const minuteur=document.querySelector(".number");
const jour=document.querySelector("#days");
const heure=document.querySelector("#hours");
const minutes=document.querySelector("#minutes");
const second=document.querySelector("#seconds");

let now= new Date(); 
const dateOffSetminutes= now.getTimezoneOffset()

const unJourEnMillisecondes=1000*60*60*24;
const uneHeureEnMillisecondes=1000*60*60;  
const uneMinuteEnMillisecondes=1000*60;  
const uneSecondeEnMillisecondes=1000;


const newYear= new Date('April,3,2022')


getComteur();

function getComteur(){
    let nowDate=Date.now();
    let tempsRestant =newYear-nowDate + dateOffSetminutes *uneMinuteEnMillisecondes;
    //nbre de jours
    let nbrJours= Math.floor(tempsRestant/unJourEnMillisecondes)
// heures
let resteTempsSansJour=tempsRestant -nbrJours*unJourEnMillisecondes
let nbrHeure=Math.floor(resteTempsSansJour/uneHeureEnMillisecondes)
//minutes
let resteTempsSansHeure=resteTempsSansJour -nbrHeure*uneHeureEnMillisecondes
let nbrMinutes=Math.floor(resteTempsSansHeure/uneMinuteEnMillisecondes)
// seconde
let resteTempsSansMinutes=resteTempsSansHeure- nbrMinutes*uneMinuteEnMillisecondes
let nbrSecondes=Math.floor(resteTempsSansMinutes/uneSecondeEnMillisecondes);
//affichage
jour.textContent=nbrJours
heure.textContent=nbrHeure
minutes.textContent=nbrMinutes
second.textContent=nbrSecondes
}

setInterval(getComteur, 1000);