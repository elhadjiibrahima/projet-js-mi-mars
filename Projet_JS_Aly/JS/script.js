const body=document.querySelector("body")
const add=document.querySelector("#add");
const add_tache=document.getElementById("remove");
const container=document.querySelector(".container")
const modal=document.querySelector(".modal")
const tabColor=["#1abc9c","#2ecc71","#34495e","#e67e22","#95a5a6","#c0392b","#bdc3c7","#130f40","#22a6b3"]
const hearder=document.querySelector("header")
const addHeader=document.querySelector("#headd")
const corbeille=document.querySelector(".corbeille")
const btnAdd=document.querySelector("#ajouter")
///qwqweq
const tarea=document.getElementById("area")
const date=document.getElementById("date")
const debut=document.getElementById("debut")
const fin=document.getElementById("fin")

corbeille.addEventListener("click",()=>{
    body.classList.toggle("corb")
})
addHeader.addEventListener("click",()=>{
    hearder.classList.toggle("monte")
})

add.addEventListener("click",()=>{
    create_colonne()
   
})

const area=document.getElementById("area")
let i=1
create_colonne()
function create_colonne(){
    let nb=container.children.length
    
    const colonne=document.createElement("div")
    const divTitre=document.createElement("div")
    const divText=document.createElement("div")
    const ChangeTitre=document.createElement("input")
    const fermerColonne=document.createElement("i")
    divTitre.setAttribute("class","nameColonne")
    fermerColonne.setAttribute("class","bx bx-x")
    divText.setAttribute("class","conte")
    colonne.setAttribute("id",`colonne${i}`)
    colonne.setAttribute("class","colonne")
   ChangeTitre.setAttribute("class","inp")
   ChangeTitre.setAttribute("placeholder",`Colonne ${i}`)

   i++
    colonne.style.backgroundColor=tabColor[randomcolor()]
    // divTitre.innerHTML=`Colonne `
    divTitre.appendChild(fermerColonne)
    divTitre.appendChild(ChangeTitre)
    colonne.appendChild(divTitre)
    colonne.appendChild(divText)
    
    

    btnAdd.addEventListener("click",()=>{
        if(tarea.value==="" || date.value=="" ||debut.value=="" || fin.value=="" ){
            alert("erreur")
        }
        else if(debut.value>=fin.value){
             alert("les heures sont invalid")
        }
       else {
     creerCarte()
    }
    })

   container.appendChild(colonne)
   fermerColonne.addEventListener("click",()=>{
       container.removeChild(colonne)
       refreshColonne()
   })
  
 
function creerCarte(){
    const btnG=document.createElement("span")
    const btnD=document.createElement("span")
    const carte=document.createElement("div")
    const teax=document.createElement("textarea")
    const vInput=document.createElement("div")
    const vDate=document.createElement("div")
    const vDebut=document.createElement("div")
    const vFin=document.createElement("div")
    vInput.setAttribute("class","vinput")
    
      btnD.setAttribute("id","btnD")
      btnG.setAttribute("id","btnG")
     carte.setAttribute("class","carte")
     teax.setAttribute("class","teax")
     
     btnD.innerText="<<"
     btnG.innerText=">>"
     vInput.appendChild(vDate)
     vInput.appendChild(vDebut)
     vInput.appendChild(vFin)
     carte.appendChild(vInput)
    carte.appendChild(btnD)
    carte.appendChild(teax)
    carte.appendChild(btnG)
    divText.appendChild(carte)
    teax.innerText=area.value
    vDate.innerText=date.value
    vDebut.innerText=debut.value
    vFin.innerText=fin.value

    carte.addEventListener("click",()=>{
        carte.classList.toggle("v")
    })

}

creerCarte()
}

const fermer=document.querySelector("#fermer")

fermer.addEventListener("click",()=>{
    modal.style.visibility="hidden"
})
add_tache.addEventListener("click",()=>{
    modal.style.visibility="visible"
})



function randomcolor(){
    const len=tabColor.length
    var pos=Math.floor(Math.random()*len)
    if(container.length>0){
    do{
    var pos=Math.floor(Math.random()*len)
    }while(container.lastElementChild.style.backgroundColor==tabColor[pos])

    }
    return pos
}



 function showError(input) {
     alert("errur")

 }
 

 function showSuccess(input) {
     alert("okdo")
    }
 function valid(input1,input2){
    if(input1.value<input2.value){
        return true
    }else
    {
       return false
    }
    return true
}


        