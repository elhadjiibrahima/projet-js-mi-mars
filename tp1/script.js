const button=document.querySelectorAll("button");
const conte=document.querySelector(".conte");

button[0].addEventListener('click',(e)=>{
        build('btn-vert',`succes`);
});
button[1].addEventListener('click',(e)=>{
    build('btn-rouge',`danger`);
});
button[2].addEventListener('click',(e)=>{
    build('btn-jaune',`warning`);
});
button[3].addEventListener('click',(e)=>{
       build('btn-blue',`info`);
});
function build(cla,message){
    const content=document.createElement("div");
    conte.appendChild(content);
    content.classList.add(cla);
    content.innerHTML=message;
    setTimeout(() => {
        content.innerHTML=``;      
   },5000);
}



