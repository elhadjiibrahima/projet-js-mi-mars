const imge=document.getElementById("image")
var images = ['img/img1.jpg','img/img2.jpg','img/img3.jpg','img/img4.jpeg','img/img5.jpg'];
const body=document.querySelector("body")
var i =0;

function slideShow() {
    
    imge.src=images[i];
    document.getElementById("imag").src=images[i];
    if(i<images.length-1){

        i++;

    }

    else {

        i=0;

    }

    setTimeout("slideShow()" , 3000);

}

window.onload = slideShow;
imge.addEventListener("mouseover",()=>{
    imge.classList.toggle("zoom")
})