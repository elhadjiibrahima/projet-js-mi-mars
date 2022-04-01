const imge=document.getElementById("image")

const body=document.querySelector("body")
var i =0;

function slideShow() {
    
    imge.src=images[i];
    document.getElementById("imag").src=images[i+1];
    if(i<images.length-2){

        i++;

    }

    else {

        i=0;

    }

    setTimeout("slideShow()" , 5000);

}

window.onload = slideShow;




imge.addEventListener("mouseover",()=>{
    imge.classList.toggle("zoom")
})