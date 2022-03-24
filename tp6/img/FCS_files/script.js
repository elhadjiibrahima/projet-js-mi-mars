const img=document.getElementById("image")

fetch("https://api.thecatapi.com/v1/images/search")
  .then(res => res.json())
  .then(data => img.src= data[0].url)