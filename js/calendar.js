////ESTO NO VA, AL FINAL LO HICE CON UNA LIBRERIA



/*let currentMonth = document.querySelector(".current-month");
let calendarDays = document.querySelector(".calendar-days");
let today = new Date();
let date = new Date();
let saveDates = []
currentMonth.textContent = date.toLocaleDateString("en-US", {month :'long', year:'numeric'});
today.setHours(0,0,0,0);
renderCalendar();


function renderCalendar(){
    // ultimo dia del mes anterior (28)(febrero)
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    // cantidad de dias del mes actual (31)
    const totalMonthDay = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
    // dia que comienza la semana (dom, lun, mar) (2 --> martes)ES EL ULTIMO DIA DEL MES ANTERIOR
    const startWeekDay = new Date(date.getFullYear(), date.getMonth(), 0).getDay();

    calendarDays.innerHTML = "";

    let totalCalendarDay = 6*7;
    for (i = 0; i < totalCalendarDay; i++) {
        let day = i-startWeekDay;
        if(i <= startWeekDay) {
            //adding previous month days 
            calendarDays.innerHTML += `<div class="padding-day">${prevLastDay-i}</div>`;
        } else if (i <= startWeekDay + totalMonthDay) {
            //adding this month days
            
            let newDate = new Date(date)
            newDate.setDate(day);
            newDate.setHours(0,0,0,0)
            
            saveDates.push(newDate)

            let dayClass = "month-day" 
            if (today.getDate() === newDate.getDate() && today.getMonth() === newDate.getMonth()) {
                dayClass = "current-day"
            }
            let newDayElement = document.createElement("div");
            newDayElement.textContent = newDate.getDate();
            newDayElement.classList.add(dayClass);
            calendarDays.appendChild(newDayElement);

            if (dayClass === 'month-day') {
                newDayElement.addEventListener('click', () => {
                 console.log(hola)
                });}

        } else {
            //adding next month days
            calendarDays.innerHTML += `<div class="padding-day">${day-totalMonthDay}</div>`;
        }
    } 
}


//botones de next month y prev month. No se puede ir más atras que el mes actual.
document.querySelectorAll(".month-btn").forEach((item)=> {
    item.addEventListener("click", ()=> {
        date = new Date(currentMonth.textContent);
        if (item.classList.contains("prev") && date.getMonth() !== today.getMonth()) {
            date.setMonth(date.getMonth() - 1)
        } else if (item.classList.contains("next")){
            date.setMonth(date.getMonth() + 1)
        }
        currentMonth.textContent = date.toLocaleDateString("en-US", {month: "long", year:"numeric"});
        renderCalendar()
    })
})

// let calendarDecisionsContainer = document.querySelector(".calendar-date-decisions-container")
// let departureDateDecision = document.querySelector(".departure-date-decision")
// let monthDays = document.querySelectorAll(".month-day")
// //////seleccionar fecha de partida////// ver de guardar en local storage

// let selectedDay = null

// monthDays.forEach((item)=>{
//     let dayOfMonth = item.textContent
//     item.addEventListener("click", ()=> {
//         selectedDay = new Date(date.getFullYear(), date.getMonth(), dayOfMonth)
//         selectedDay.setHours(0,0,0,0)
//         console.log(selectedDay)
//         if (item.textContent > today.getDate() && selectedDay === null) {
//             item.style.background = "rgb(36,36,79)"
//             item.style.color = "white"
//             let selectedDepartureDate = item.textContent
//             calendarDecisionsContainer.innerHTML += `<h6 class="departureDateDecision">Departure date: ${selectedDepartureDate} ${currentMonth.textContent}</h6>`
//             calendarDecisionsContainer.innerHTML +=  `<button class="btn-change-departure-date">Change date</button>`
//             selectedDay = item
//         }
//     })
// })


// let btnChangeDepartureDate = document.querySelector(".btn-change-departure-date")

// //esto es porque, como la clase del boton recién se activa en el DOM cuando presiono un dia, no me andaba el evento. Por eso le di la funcionalidad
// //al contenedor padre con el condicional de que se seleccione solo si tiene la clase del boton.
// calendarDecisionsContainer.addEventListener("click", (event) => {
//     if (event.target.classList.contains("btn-change-departure-date")) {
//         if (selectedDay !== null) {
//             selectedDay.style.background = "";
//             selectedDay.style.color = "";
//             calendarDecisionsContainer.innerHTML = "";
//             selectedDay = null;
//           }
//     }
//   })

*/