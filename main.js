let currentDay = document.getElementById("currentDay")
currentDay.innerText = moment().format("MMM Do YY");
let blockcontainer = document.getElementById("blocks")
let times = [9, 10, 11, 12, 1, 2, 3, 4, 5]

let storage = []
let checkstorage = JSON.parse(localStorage.getItem("time"))
if (checkstorage === null) localStorage.setItem("time", JSON.stringify([]))
else storage = checkstorage
for (let i = 0; i < times.length; i++) {
    let present=storage.findIndex(a=>a.time===times[i])
    let currenttime=new Date()
    currenttime=currenttime.getHours()
    console.log(currenttime);
// line 16 has an error
    let timeclass= currenttime===times[i]?"present" : currenttime<times[i]?"past":"future"
    let timetext=""
    if(present > -1)timetext=storage[present].text
    let block = document.createElement("div")
    block.innerHTML = `<span>${times[i]}${(times[i] > 0 && times[i] < 6) || times[i] === 12 ? "pm" : "am"}</span>
    <textarea class="${timeclass}">${timetext}</textarea>
    <button type="button" class="saveBtn"><i class="far fa-save"></i></button>`
    block.classList.add("time-block")
    blockcontainer.append(block)
    let savebutton = block.querySelector("button")
    savebutton.addEventListener("click", () => {
        let text = block.querySelector("textarea").value
        let ifexist=storage.findIndex(a=>a.time===times[i])
if(ifexist<0){
        storage.push({
            time: times[i],
            text: text
        })
    }
    else storage[ifexist].text=text
        localStorage.setItem("time", JSON.stringify(storage))
    })
}//If/else statement ternary//*
