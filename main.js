let currentDay = document.getElementById("currentDay")
currentDay.innerText = moment().format("MMM Do YY");
let blockcontainer = document.getElementById("blocks")
let times = [9, 10, 11, 12, 1, 2, 3, 4, 5]

let storage = []
let checkstorage = JSON.parse(localStorage.getItem("time"))
if (checkstorage === null) localStorage.setItem("time", JSON.stringify([]))
else storage = checkstorage
for (let i = 0; i < times.length; i++) {
    let block = document.createElement("div")
    block.innerHTML = `<span>${times[i]}${(times[i] > 0 && times[i] < 6) || times[i] === 12 ? "pm" : "am"}</span>
    <textarea></textarea>
    <button type="button"><i class="far fa-save"></i></button>`
    blockcontainer.append(block)
    let savebutton = block.querySelector("button")
    savebutton.addEventListener("click", () => {

    })
}//If/else statement ternary//*
