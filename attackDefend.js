"use strict"


function attackDamage(){
	var damageNumber = Math.floor((Math.random() * 20) + 1);
	document.getElementById('attack').innerHTML = "Dealt " + damageNumber + " Damage";
}

function damageBlocked(){
	var blockNumber = Math.floor((Math.random() * 20) + 1);
	document.getElementById('defend').innerHTML = "Blocked " + blockNumber + " Damage";
}