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

onePointHome.addEventListener('click', () => updateHomePoints(1));
twoPointHome.addEventListener('click', () => updateHomePoints(2));
threePointHome.addEventListener('click', () => updateHomePoints(3));
onePointAway.addEventListener('click', () => updateAwayPoints(1));
twoPointAway.addEventListener('click', () => updateAwayPoints(2));
threePointAway.addEventListener('click', () => updateAwayPoints(3));

    function updateHomePoints(points) {
        homeRunningScore += points;
        return homeTotal.textContent = homeRunningScore;
    };

    function updateAwayPoints(points) {
        awayRunningScore += points
        return awayTotal.textContent = awayRunningScore;
    };
};

playGame()