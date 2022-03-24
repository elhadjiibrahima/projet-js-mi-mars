
const section=document.querySelector("section")
const aside=document.querySelector("aside")



const API_URL="https://www.themealdb.com/api/json/v1/1/random.php"
fetch(API_URL).then(res=> res.json()).then(data=> {
    console.log(data)

    section.innerHTML=`
    <div class="generer-recette">
    <img src="${data["meals"][0]["strMealThumb"]}" id="image">
    <h2 id="generer">Generer une recette</h2>
    <div class="note">
      <span class="nom" id="nom">${data["meals"][0]["strMeal"]}</span> 
      <i class='bx bxs-heart' id="heart"></i>  
    </div>
</div>
    `
    aside.innerHTML=`
    <div class="caracteristique">
    <h1> ${data["meals"][0]["strMeal"]}</h1>
    <i id="retour" class='bx bx-x'></i>
<img src="${data["meals"][0]["strMealThumb"]}" id="im">
<div id="des">
   <h4>Instruction</h4>
   <span id="">${data["meals"][0]["strInstructions"]}</span>
</div>
</div>
<div class="ingredient">
   <div id="recette">
       <h2>ingredients:</h2>
       <ul>
          ${recup_recette(data["meals"][0])}
       </ul>
   </div>
</div>
    `
 
  





const btn_retour=document.querySelector("#retour")
const btn_heart=document.querySelector("#heart")
const recette=document.querySelector("#recette")
const image=document.querySelector("#image")
const im=document.querySelector("#im")
const nom=document.querySelector("#nom")
const ul =document.querySelector("ul")
const Instruction=document.querySelector("#ins")
const genererateur=document.querySelector("#generer")

console.log(image);



function recup_recette(data){
  let list=""
    for(let i=1;i<=20;i++){
         if(data["strIngredient"+i]){
             list+=`<li>${data["strIngredient"+i]} </li>`
         }
    }
   
 return list
}


   
   
 














genererateur.addEventListener("click",()=>{
    location.reload()
})

btn_retour.addEventListener("click",()=>{
   aside.style.visibility="hidden"
})


btn_heart.addEventListener("click",()=>{
    aside.style.visibility="visible"
 })
})