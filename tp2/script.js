const body=document.querySelector("body");
const sidebar=body.querySelector(".sidebar");
const toggle=body.querySelector(".toggle");
const searchbnt=body.querySelector(".box-search");
const modeSwitch=body.querySelector(".toggle-switch");
const  modeText=body.querySelector(".mode-text");
const menuLink=body.querySelector("ul")

   toggle.addEventListener("click",()=>{
       sidebar.classList.toggle("close")
   });

//    modeSwitch.addEventListener("click",()=>{
//     body.classList.toggle("dark")
// });


function createli(){
    const li=document.createElement("li");
    const i=document.createElement("i");
    const a=document.createElement("a")
    const span=document.createElement("span")
    const small=document.createElement("small");
    const flechi=document.createElement("i")

    menuLink.appendChild(li);
    li.appendChild(a);
    a.appendChild(i);
    a.appendChild(span)
    a.appendChild(small);
    a.appendChild(flechi)
    span.setAttribute("class","text")
    return li
}

// function createsousmenu

function createsousmenu(parent,index,tab){
  parent.appendChild(createli())
  const sousmenulink=document.createElement("ul");
  for(let i=0;i<tab.length;i++){
      parent.children[index].firstChild.children[i].setAttribute("class",tab[i]);
      if(i==1){
      parent.children[index].firstChild.children[i].innerHTML=tab[i]
      parent.children[index].firstChild.children[i].setAttribute("class","text");
      }
  }
}

function createul(){
    const ul=document.createElement("ul");
    menuLink.appendChild(ul);
}
createsousmenu(menuLink,0,["bx bx-home-alt-2 icons","Dashbord","","bx bxs-chevron-right text"])
// createul();
createsousmenu(menuLink,1,["bx bxs-widget icons","Widgets","new ","bx bxs-chevron-right text"])
document.querySelector(".new").innerHTML="New"

createsousmenu(menuLink,2,["bx bx-layout icons","Layout Option","number","bx bxs-chevron-right text"])
document.querySelector(".number").innerHTML="6"
createsousmenu(menuLink,3,["bx bx-pie-chart-alt-2 icons","Charts","","bx bxs-chevron-right text"])
createul();
createsousmenu(menuLink.querySelector("ul"),0,["bx bx-circle icons","ChartJS","",""])
createsousmenu(menuLink.querySelector("ul"),1,["bx bx-circle icons","Flot","",""])
createsousmenu(menuLink.querySelector("ul"),2,["bx bx-circle icons","Inline","",""])
createsousmenu(menuLink.querySelector("ul"),3,["bx bx-circle icons","uPlot","",""])
createsousmenu(menuLink,5,["bx bxs-bell icons","UI Elements","","bx bxs-chevron-right text"])
createsousmenu(menuLink,6,["bx bx-table icons","Tables","","bx bxs-chevron-right text"])

menuLink.children[3].addEventListener("click",()=>{
    menuLink.children[4].classList.toggle("supprime")
})
