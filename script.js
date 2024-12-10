let headCoin = document.querySelector("#heads");
let tailCoin = document.querySelector("#tails");
let result = document.querySelector("#msg");
let userScore = 0;
let compScore = 0;
let choices = ['heads', 'tails']
let screenScore = document.querySelector(".you");
let screenCompScore = document.querySelector(".comp");
headCoin.addEventListener("click", function(e) {
    let i = Math.floor(Math.random()*choices.length);
    let r = choices[i];
    if (r==="heads") {
        result.style.backgroundColor = "green";
        result.innerText = "Congratulations! You won! It was Heads!";
        userScore = userScore + 1;
    } else {
        result.style.backgroundColor = "red";
        result.innerText = "You lost, it was Tails!"
        compScore = compScore + 1;
    }
    updateScores();
});
tailCoin.addEventListener("click", function(e) {
    let i = Math.floor(Math.random()*choices.length);
    let r = choices[i];
    if (r==="tails") {
        result.style.backgroundColor = "green";
        result.innerText = "Congratulations! You won! It was Tails!";
        userScore = userScore + 1;
    } else {
        result.style.backgroundColor = "red";
        result.innerText = "You lost, it was Heads!";
        compScore = compScore + 1;
    }
    updateScores();
});
function updateScores() {
    screenScore.innerText = userScore;
    screenCompScore.innerText = compScore;
}