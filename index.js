//document.getElementById("count-el").innerHTML = 6;

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el");

//console.log(countEl)

let count = 0

function increment() {
    count += 1
    countEl.textContent = count;
    console.log(count)
}

function save() {
    let countLabel = count + " - ";
    saveEl.textContent += countLabel; 
    count = 0;
    countEl.innerHTML = count;
    console.log(count);
}