const imge=document.getElementById("image")
var images = ['img/img1.jpeg','img/img2.jpeg','img/img3.jpeg','img/img4.jpeg','img/img5.jpeg'];
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