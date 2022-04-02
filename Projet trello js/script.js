const tabColor=["#1abc9c","#2ecc71","#34495e","#e67e22","#95a5a6","#c0392b","#bdc3c7","#130f40","#22a6b3"]
const add_col = document.querySelector('.add-colonne');
const add_note = document.querySelector('.add-note');
const header = document.querySelector('header');
const main = document.querySelector('main');
const modal = document.querySelector('.modal');
const form_modal = document.querySelector('form');
const add_tasks = document.querySelector('.add-tasks');
const close_modal = document.querySelector('.close-modal');
const containDeletedTasks = document.querySelector('.contain-deleted-tasks');
const deletedTasks = document.querySelector('.deleted-tasks')
const show_header = document.querySelector('.show-header');
const task_settings = document.querySelectorAll('.task-setting');
const content = document.querySelector('.content');
const date = document.querySelector('.date');
const start= document.querySelector('.start');
const end = document.querySelector('.end');
const task_content = document.querySelector('#content');
const task_date = document.querySelector('#date');
const task_date_end=document.querySelector("#date_end")
const task_start= document.querySelector('#start-time');
const task_end = document.querySelector('#end-time');

// fonction creer colonne 
function createCol() {
    var col = document.createElement('div');
    i = main.childElementCount;
    col.className = "col";
    col.id=i;
    col.style.backgroundColor=tabColor[randomcolor()]
    col.classList.add('color'+(i+1));
    var col_title = document.createElement('div');
    col_title.className="col-title";
    var h2_title = document.createElement('h2');
    h2_title.innerText = 'Colonne '+(i+1);
    h2_title.addEventListener('dblclick',()=>{
        h2_title.innerHTML='';
        var input = document.createElement('input');
        input.type = 'text';
        var button = document.createElement('button');
        button.innerText='OK';
        col_title.appendChild(input);
        col_title.appendChild(button);
        button.addEventListener('click',()=>{
            if (input.value!="") {
                h2_title.innerHTML=input.value;
                col_title.classList.add('has-new-title');
                col_title.removeChild(input);
                col_title.removeChild(button);
            }
        })
        span_title.addEventListener('click',()=>{
            col_title.removeChild(input);
            col_title.removeChild(button);
        })
    })
    var span_title = document.createElement('span');
    span_title.innerText='X'
    span_title.addEventListener('click',e=> {
        if (e.target.parentNode.parentNode!=main.firstChild || main.childElementCount==1) {
            if (confirm('Voulez-vous supprimer la colonne')) {
                e.target.parentNode.parentNode.remove();
            }
        }
        refresh();
    });
    col_title.appendChild(h2_title);
    col_title.appendChild(span_title);
    var task_contain = document.createElement('div');
    task_contain.className = 'task-contain';
    col.appendChild(col_title);
    // task_contain.appendChild(creerCarte())
    col.appendChild(task_contain);
  
    return col;
}

add_col.addEventListener('click',()=>{
    if (main.childElementCount<5) {
            main.appendChild(createCol());
    }
})
main.appendChild(createCol())

// afficher modal
add_note.addEventListener('click',()=>{
    if (main.childNodes.length>=1) {    
        modal.classList.add('active-modal');
        close_modal.addEventListener('click',()=>{
            modal.classList.remove('active-modal');
        })
    }
})

function refresh() {
    const listTitles = document.querySelectorAll('.col-title');
    listTitles.forEach((col_title,i) => {
        let h2_title = col_title.firstChild
        if (!col_title.classList.contains('has-new-title')) {
            col_title.firstChild.innerHTML = 'Colonne '+(i+1); 
            col_title.parentElement.id=i+1;
        }
    }); 
}
// fonction creer tache 
function creerCarte(){
    const btnS=document.createElement("i")
    const btnG=document.createElement("span")
    const btnD=document.createElement("span")
    const carte=document.createElement("div")
    const teax=document.createElement("textarea")
    const vInput=document.createElement("div")
    const vDate=document.createElement("div")
    const vDebut=document.createElement("div")
    const vFin=document.createElement("div")
    ///// attribut
    vInput.setAttribute("class","vinput")
    btnS.setAttribute("class","fa-solid fa-rectangle-xmark iconClose")
      btnD.setAttribute("id","btnD")
      btnG.setAttribute("id","btnG")
     carte.setAttribute("class","carte")
     teax.setAttribute("class","teax")
     // contenu
     btnD.innerHTML="<<"
     btnG.innerHTML=">>"
     vInput.appendChild(vDate)
     vInput.appendChild(vDebut)
     vInput.appendChild(vFin)
     carte.appendChild(btnS)
     carte.appendChild(vInput)
    carte.appendChild(btnD)
    carte.appendChild(teax)
    carte.appendChild(btnG)
    //buttt
    teax.addEventListener("click",()=>{
        carte.classList.add("v")
    })
    vInput.addEventListener("click",()=>{
        carte.classList.remove("v")
    })
    teax.value=task_content.value
    vDate.innerText=task_date.value
    vDebut.innerText=task_start.value
    vFin.innerText=task_end.value
   
    const tabca=[task_date.value,task_start.value,task_end.value,task_date_end.value]
    const terminer=setInterval(() => {
        let comtp=planing(tabca)
        
        if(comtp<=0){
            clearInterval(terminer)
            carte.classList.add("terminer")
            btnD.style.display="none"
            btnG.style.display="none"
            btnS.style.display="none"
        }
        console.log(comtp);
    }, 1000);
    
    btnG.addEventListener("click",(e)=>{
        var column=e.target.parentElement.parentElement.parentElement;
        var n=parseInt(column.id);
        var next_column=document.getElementById(n+1)
        next_column.lastChild.appendChild(e.target.parentElement);
    })
    btnD.addEventListener("click",(e)=>{
        var column=e.target.parentElement.parentElement.parentElement;
        var n=parseInt(column.id);
        var next_column=document.getElementById(n-1)
        next_column.lastChild.appendChild(e.target.parentElement);
    })
    btnS.addEventListener("click",(e)=>{
    //    carte.style.display="none"
    // var column=e.target.parentElement.parentElement.parentElement;
    // var n=parseInt(column.id);
    // var next_column=document.getElementById(n)
    carte.appendChild(e.target.parentElement);

    })
        return carte
}

show_header.addEventListener('click',()=>{
header.classList.toggle('visible-header');
if (header.classList.contains('visible-header')) {
    show_header.innerHTML='Cacher menu';
}else{
    show_header.innerHTML='Afficher menu';
}
})
const date_end=document.querySelector(".date_end")
// fonction validation
function validite(){
    var cptError=0
    var now = new Date();
    if (task_content.value=="") {
        showError(content,task_content,"Veuillez remplir le champ");
        cptError++;
    }
    if (task_date.value==""|| task_date_end.value=="") {
        showError(date,task_date,"Veuillez remplir le champ");
        showError(date_end,task_date_end,"Veuillez remplir le champ");
        cptError++;
    }else{
        var new_date1 = task_date.valueAsNumber+now.getHours()*3600000+now.getMinutes()*60000+now.getSeconds()*1000+now.getMilliseconds();
        var new_date2 = task_date_end.valueAsNumber+now.getHours()*3600000+now.getMinutes()*60000+now.getSeconds()*1000+now.getMilliseconds(); 

        console.log(task_date.valueAsDate);
        console.log(task_date_end.valueAsDate)
        console.log(now);
        console.log(now.getTime());
        if (new_date1<now) {
            showError(date,task_date,"Veuilez saisir une date ultérieure ou égale à celle actuelle");
         cptError++;
        }
        if(new_date2<new_date1){
            showError(date_end,task_date_end,"Veuilez saisir une date ultérieure ou égale à celle de debut");
            cptError++;
        }
    } 

    if (task_start.value=="") {
        showError(start,task_start,"Veuillez remplir le champ");
        cptError++
    }else{
        if (task_start.valueAsNumber/1000<now.getHours()*3600+now.getMinutes()*60+now.getSeconds()) {
            // e.preventDefault();
            showError(start,task_start,"Veuilez saisir une heure de début ultérieure ou égale à celle actuelle");
            cptError++
        }
        if (task_end.value!="" && task_start.value!="") {
           if(task_date.value==task_date_end.value){
            if (task_start.value>task_end.value) {
            
                showError(start,task_start,"Veuillez prendre une heure de début antérieure à celle de fin");
                showError(end,task_end,"Veuillez prendre une heure de fin ultérieure à celle de début");
             cptError++;
            } 
           }
    }
    
}
if (task_end.value=="") {
    showError(end,task_end,"Veuillez remplir le champ");
    cptError++
}

  return cptError===0
}
    

function showError(div,field,message) {
spanError = document.createElement('span');
spanError.innerHTML=message;
div.appendChild(spanError);
}


containDeletedTasks.addEventListener('click',()=>{
deletedTasks.classList.add('actived-deleted-tasks');
const span = document.querySelector('.close-deleted-tasks');
span.addEventListener('click',()=>{
    deletedTasks.classList.remove('actived-deleted-tasks');
})
})

add_tasks.addEventListener("click",()=>{
    if(validite()){
     const first_Col=document.querySelector(".col")
     first_Col.lastElementChild.appendChild(creerCarte())
     modal.classList.remove("active-modal")
     clean()
    }

})



function planing(tab){
   const annee=tab[0].slice(0,4)
   const mois=tab[0].slice(5,7)
   const jour=tab[0].slice(8)
   const heured=tab[1].slice(0,2)
   const mind=tab[1].slice(3)
   const heuref=tab[2].slice(0,2)
   const minf=tab[2].slice(3)
   const anneef=tab[3].slice(0,4)
   const moisf=tab[3].slice(5,7)
   const jourf=tab[3].slice(8)
 
  const date_fin=new Date(anneef,moisf-1,jourf,heuref,minf).getTime()
  const date_debut=new Date(annee,mois-1,jour,heured,mind).getTime()
  const nowDate=Date.now();
  console.log(nowDate);
  console.log(date_debut);
  let delai=date_fin-date_debut
  while(nowDate-date_debut>0 ){
      delai=delai-1000;
  }

  return delai
}

function randomcolor(){
    const len=tabColor.length
    var pos=Math.floor(Math.random()*len)
    if(main.length>0){
    do{
    var pos=Math.floor(Math.random()*len)
    }while(main.lastElementChild.style.backgroundColor==tabColor[pos])

    }
    return pos
}

const backg=document.querySelector("#backg")
const imBackg=document.querySelector(".backg")    
var images = ['img/img1.jpeg','img/img2.jpeg','img/img3.jpeg','img/img4.jpeg','img/img5.jpeg'];
console.log(imBackg)
var j=0
function slideShow() {
    imBackg.src=images[j+1];
    if(j<images.length-2){

        j++;

    }

    else {

        j=0;

    }

    setTimeout("slideShow()" , 10000);

}

window.onload = slideShow;

// const task_settings = document.querySelectorAll('.task-setting');


function clean(){
      task_settings.forEach(element => {
          element.value="";
      });
}