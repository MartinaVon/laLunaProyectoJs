let btnOpenSimulator = document.querySelector(".go-to-simulator-h3")
let simulatorOverlay = document.querySelector(".simulator-overlay")
let greetingContainer = document.querySelector(".get-name-from-popUp")

let spanForClosingSimulator = document.querySelector(".span-for-closing-simulator") 

let btnForTicket1 = document.querySelector(".btn-for-ticket1")
let btnForTicket2 = document.querySelector(".btn-for-ticket2")
let btnForTicket3 = document.querySelector(".btn-for-ticket3")
let containerTicket = document.querySelector(".simulator-choose-ticket") 

let getTicketInfo = document.querySelector(".get-ticket-info")
let containerForm = document.querySelector(".simulator-form-container")

let formSubmit = document.querySelector(".formSubmit")

let simulatorCalendarContainer = document.querySelector(".simulator-calendar-container")

let calendarSubmit = document.querySelector(".calendar-submit")

let resultContainer = document.querySelector(".simulator-result-container")

let formTotalSubmit = document.querySelector(".form-total-submit")
///objeto para las elecciones del checkOut
let ClientTravel = {}


//abrir simulador
btnOpenSimulator.addEventListener("click", ()=>  {
    greetingContainer.textContent = localStorage.getItem("userName")
    simulatorOverlay.style.display = "block"}
    )
//cerrar simulador
spanForClosingSimulator.addEventListener("click", ()=> simulatorOverlay.style.display = "none")

//seleccionar ticket y guardarlo en local storage
const difTickets = ["Standard Ticket", "VIP Ticket", "Exclusive Ticket"]

btnForTicket1.addEventListener("click", ()=>fOpenTicket(difTickets[0]))
btnForTicket2.addEventListener("click", ()=>fOpenTicket(difTickets[1]))
btnForTicket3.addEventListener("click", ()=>fOpenTicket(difTickets[2]))



function fOpenTicket(element) {
    containerForm.style.opacity = "1"
    getTicketInfo.textContent = "You have chosen the " + element
    localStorage.setItem("ticket", element)
    ClientTravel.chosenTicket = localStorage.getItem("ticket")
}

formSubmit.addEventListener("click", ()=> {
    simulatorCalendarContainer.style.opacity = "1"
    simulatorCalendarContainer.scrollIntoView({ behavior: 'smooth' })
    let chosenDestination = document.querySelector('input[name="destination"]:checked').value
    localStorage.setItem("destination", chosenDestination)
    ClientTravel.chosenDestination = localStorage.getItem("destination")
    })

calendarSubmit.addEventListener("click", ()=>{
    resultContainer.style.opacity = "1"
    formTotalSubmit.scrollIntoView({ behavior: 'smooth' })
    let chosenDates = document.querySelector(".form-control").value
    localStorage.setItem("dates", chosenDates)
    ClientTravel.chosenDates = localStorage.getItem("dates")
    console.log(ClientTravel)
    fshowClientTravel()
})



function fshowClientTravel() {
    resultContainer.innerHTML += `<div class="show-client-travel-results"></div>`
    let showClientTravelResults = document.querySelector(".show-client-travel-results")
    showClientTravelResults.innerHTML += `<h6 class="each-client-result">Your travel:</h6>`
    showClientTravelResults.innerHTML += `<p class="each-client-result">Ticket: ${ClientTravel.chosenTicket}}</p>`
    showClientTravelResults.innerHTML += `<p class="each-client-result">Destination: ${ClientTravel.chosenDestination}</p>`
    showClientTravelResults.innerHTML += `<p class="each-client-result">Dates: ${ClientTravel.chosenDates}</p>`
}



formTotalSubmit.addEventListener("click",(event)=> {
    event.preventDefault()
    document.querySelector(".sayGoodbye").style.display = "block"
})

////////calendario con libreria flatpickr

flatpickr("#datepicker");

flatpickr("#datepicker", {
    altInput: true,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d",
    mode: "range",
    minDate: "today",
    dateFormat: "Y-m-d",
    inline: true,
  });

