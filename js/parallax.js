let containerBackground = document.querySelector(".container-for-background")

let moonTitle = document.querySelector(".moon-title")

let moonForExploration = document.querySelector(".moon-exploration___img") 
let explorationFilter = document.querySelector(".moon-exploration__filter")

let imageGalery = document.querySelector(".image-gallery_image-container")

let astronauta = document.querySelector(".astronauta")

let containerImageNASA = document.querySelector(".container-get-image-from-NASA")

 window.addEventListener("scroll", ()=> {
     let value = window.scrollY;
     astronauta.style.bottom = value * -0.9 + "px";
 })


/////Moon titulo
setTimeout(()=>{
    moonTitle.classList.add("show")
}, 20);

let nasaImage = ""
///agregar imagen NASA API
const url = `https://api.nasa.gov/planetary/apod?api_key=ebJ1SEcXtIgpwWOyZ2d3PuknbUAa4WaPMi1YqYVh`
fetch(url)
.then(response => response.json()) // Convertir la respuesta a JSON
.then(data => {

  containerImageNASA.innerHTML += `<h3 class="NASA-image-title">NASA image of the day</h3>`
  containerImageNASA.innerHTML += `<img src="${data.url}" alt="" class="NASA-image">`
  containerImageNASA.innerHTML += `<h3 class="NASA-image-explanation">${data.title}</h3>`
  containerImageNASA.innerHTML += `<h3 class="NASA-image-date">${data.date}</h5>`

  nasaImage = document.querySelector(".NASA-image")
 
})
.catch(error => console.log(error));

/////entrada de elementos
function parallax(dist, element) {
  let distance = window.scrollY
  let maxDistance = dist;
  if (distance > maxDistance){
      element.classList.add("fadeIn")
  }
}

window.addEventListener("scroll", ()=> {
  parallax(400, moonForExploration)
})

window.addEventListener("scroll", ()=> {
  parallax(350, explorationFilter)
})

window.addEventListener("scroll", ()=> {
  parallax(2000, imageGalery)
})


window.addEventListener("scroll", ()=>{
  parallax(900, nasaImage)
})



