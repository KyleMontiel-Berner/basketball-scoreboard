let onePoint = document.querySelector("#onePoint");
let twoPoint = document.querySelector("#twoPoint");
let threePoint = document.querySelector("threePoint");
let homeTotal = document.querySelector("#homeTotal");
let awayTotal = document.querySelector("#awayTotal");

let total = 0;

onePoint.addEventListener('click', addOne);
twoPoint.addEventListener('click', addTwo);
threePoint.addEventListener('click', addThree);



function addOne() {
    homeTotal += 1;
    homeTotal.textContent = total;
}

function addTwo() {
    homeTotal += 2;
    homeTotal.textContent = total;
}

function addThree() {
    homeTotal += 3;
    homeTotal.textContent = total;
}
