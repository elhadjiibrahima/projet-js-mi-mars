const add=document.querySelector("#add");
const add_tache=document.getElementById("remove");
const container=document.querySelector(".container")
const modal=document.querySelector(".modal")
const tabColor=["#1abc9c","#2ecc71","#34495e","#e67e22","#95a5a6","#c0392b","#bdc3c7","#130f40","#22a6b3"]

console.log(container);
add.addEventListener("click",()=>{
    create_colonne()
})
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
    colonne.setAttribute("class","colonne")
    
    ChangeTitre.setAttribute("placeholder",`Colonne ${i}`)
    colonne.style.backgroundColor=tabColor[randomcolor()]
    // divTitre.innerHTML=`Colonne `
    i++
    divTitre.appendChild(fermerColonne)
    divTitre.appendChild(ChangeTitre)
    colonne.appendChild(divTitre)
    colonne.appendChild(divText)
   container.appendChild(colonne)
   fermerColonne.addEventListener("click",()=>{
       alert("ok")
       container.removeChild(colonne)
   })
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
