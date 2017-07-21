function roundNumbers(){
var numberOfRounds = Math.floor((Math.random() * 20) + 1);
document.getElementById('roundNumberText').innerHTML = numberOfRounds + " Rounds";
}