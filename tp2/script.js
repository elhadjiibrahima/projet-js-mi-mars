const body=document.querySelector("body");
const sidebar=body.querySelector(".sidebar");
const toggle=body.querySelector(".toggle");
const searchbnt=body.querySelector(".box-search");
const modeSwitch=body.querySelector(".toggle-switch");
const  modeText=body.querySelector(".mode-text");

   toggle.addEventListener("click",()=>{
       sidebar.classList.toggle("close")
   })
   modeSwitch.addEventListener("click",()=>{
    body.classList.toggle("dark")
})
function createli(classicon,text){
   const li=document.createElement("li");
   const lien=document.createElement("a");
   const icon=document.createElement("i");
   const span=document.createElement("span");
   const ul=document.querySelector(".menu-link")
   ul.appendChild(li);
   li.appendChild(lien);
   lien.appendChild(icon);
   lien.appendChild(span);
   li.setAttribute("class","nav-link");
   icon.setAttribute("class",classicon);
   span.setAttribute("class","text");
   span.innerText=text;
}
createli("bx bx-home-alt-2 icons",`Dashbord`);

const tab=[
    {
        menu:createli(classicon,text),
           
    }
]