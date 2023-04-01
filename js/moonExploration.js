
let cold = document.querySelector(".cold")
let hot = document.querySelector(".hot")

let coldSpan = document.querySelectorAll(".cold-span")
let hotSpan = document.querySelectorAll(".hot-span")
let coldWeatherCard1 = document.querySelector(".cold-weather-card1")

let spanForClosingCard = document.querySelector(".span-for-closing-card")

spanForClosingCard.addEventListener("click", ()=> {
  coldWeatherCard1.style.display = "none"
})

cold.addEventListener("click", ()=> {
  coldWeatherCard1.style.display = "none";
    coldSpan.forEach((elemento)=>  elemento.style.display = "block")
    hotSpan.forEach((elemento)=>  elemento.style.display = "none")
})
hot.addEventListener("click", ()=>{
    coldWeatherCard1.style.display = "none";
    hotSpan.forEach((elemento)=>  elemento.style.display = "block")
    coldSpan.forEach((elemento)=>  elemento.style.display = "none")
    
})

  
  let coldSpan1 = document.querySelector(".cold-span1")
  let coldSpan2 = document.querySelector(".cold-span2")
  let coldSpan3 = document.querySelector(".cold-span3")

  let hotSpan1 = document.querySelector(".hot-span1")
  let hotSpan2 = document.querySelector(".hot-span2")
  let hotSpan3 = document.querySelector(".hot-span3")
  
  let h3s = document.querySelector(".h3s")
  let parag = document.querySelector(".parag")
  let forImage = document.querySelector(".forImage") 
  
  class EachWeather {
    constructor (name, description, image){
        this.name = name;
        this.description = description;
        this.image = new Image();
        this.image.src = image;
    }
  }

  const coldObj1 = new EachWeather("Alaskisan", "blablablablablablablablablabla", "/Assets/img/ALAKSA.jpg")
  const coldObj2 = new EachWeather("Antartisan", "blablablablablablablablablabla", "/Assets/img/ANTARTIDA.webp")
  const coldObj3 = new EachWeather("Pertisan", "blablablablablablablablablabla", "/Assets/img/PERITOMORENO.jpg")

  const hotObj1 = new EachWeather("Vulcanist", "blablablablablablablablablabla", "/Assets/img/volcan.avif")
  const hotObj2 = new EachWeather("Desertist", "blablablablablablablablablabla", "/Assets/img/desierto.jpg")
  const hotObj3 = new EachWeather("Aridist", "blablablablablablablablablabla", "/Assets/img/arido.avif")
  
  const weatherObjects = [coldObj1, coldObj2, coldObj3, hotObj1, hotObj2, hotObj3]


function showPlaces(object) {
  coldWeatherCard1.style.display = "block"
   forImage.innerHTML = ""
   h3s.innerHTML = ""
   parag.innerHTML = ""
     for (const propiedad in object) {
       if (propiedad === "name") {
         h3s.innerHTML = object[propiedad]
       } else if (propiedad === "description") {
         parag.innerHTML = object[propiedad]
       } else if (propiedad === "image") {
        const image = object[propiedad];
        forImage.appendChild(image)
        image.classList.add("image");
      }
    }
}

coldSpan1.addEventListener("click", ()=>showPlaces(weatherObjects[0]))
coldSpan2.addEventListener("click", ()=>showPlaces(weatherObjects[1]))
coldSpan3.addEventListener("click", ()=>showPlaces(weatherObjects[2]))
hotSpan1.addEventListener("click", ()=>showPlaces(weatherObjects[3]))
hotSpan2.addEventListener("click", ()=>showPlaces(weatherObjects[4]))
hotSpan3.addEventListener("click", ()=>showPlaces(weatherObjects[5]))
