let currentDay = document.getElementById("currentDay")
currentDay.innerText = moment().format("MMM Do YY");
let blockcontainer = document.getElementById("blocks")
let times = [9, 10, 11, 12, 1, 2, 3, 4, 5]

for (let i = 0; i < times.length; i++) {
    let block = document.createElement("div")
    block.innerHTML = `<span>${times[i]}${times[i] > 0 && times[i] < 6 ? "pm" : "am"}</span>
    <textarea></textarea>
    <button type="button"><i class="far fa-save"></i></button>`
    blockcontainer.append(block)
}