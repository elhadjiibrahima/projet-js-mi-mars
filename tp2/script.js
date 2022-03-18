const menu=document.querySelector(".burger");
const barreInfo=document.querySelector(".infos");
const c=document.querySelector(".dash-i");
const d=document.querySelector(".dash-cache");
const a=document.querySelector(".char-i");
const b=document.querySelector(".char-cache");


menu.addEventListener("click",()=>{
    barreInfo.classList.toggle("barre-info")
})

c.addEventListener("click",()=>{
    barreInfo.classList.add("barre-info")
    d.classList.toggle("dash-cacher")


})

a.addEventListener("click",()=>{
    b.classList.toggle("char-cacher")
 })