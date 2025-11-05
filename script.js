let onePointHome = document.querySelector(".onePointHome");
let twoPointHome = document.querySelector(".twoPointHome");
let threePointHome = document.querySelector(".threePointHome");
let homeTotal = document.querySelector("#homeTotal");

let onePointAway = document.querySelector(".onePointAway");
let twoPointAway = document.querySelector(".twoPointAway");
let threePointAway = document.querySelector(".threePointAway");
let awayTotal = document.querySelector("#awayTotal");

let homeRunningScore = 0;
let awayRunningScore = 0;

function playGame() {

onePointHome.addEventListener('click', addOneHome);
twoPointHome.addEventListener('click', addTwoHome);
threePointHome.addEventListener('click', addThreeHome);
onePointAway.addEventListener('click', addOneAway);
twoPointAway.addEventListener('click', addTwoAway);
threePointAway.addEventListener('click', addThreeAway);

    function addOneHome() {
        homeRunningScore += 1;
        return homeTotal.textContent = homeRunningScore;
    };

    function addTwoHome() {
        homeRunningScore += 2;
        return homeTotal.textContent = homeRunningScore;
    };

    function addThreeHome() {
        homeRunningScore += 3;
        return homeTotal.textContent = homeRunningScore;
    };

    function addOneAway() {
        awayRunningScore += 1;
        return awayTotal.textContent = awayRunningScore;
    };

    function addTwoAway() {
        awayRunningScore += 2;
        return awayTotal.textContent = awayRunningScore;
    };

    function addThreeAway() {
        awayRunningScore += 3;
        return awayTotal.textContent = awayRunningScore;
    };

};

playGame()