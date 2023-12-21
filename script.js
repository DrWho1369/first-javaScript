let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let store = count + " - "
    saveEl.textContent += store
    console.log(count)
    count = 0
    countEl.innerText = count
}