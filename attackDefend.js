"use strict"

var damageNumber;
var blockNumber;

function attackDamage(){
	damageNumber = Math.floor((Math.random() * 20) + 1);
	document.getElementById('attack').innerHTML = "Attacked for " + damageNumber + " damage";
}

function damageBlocked(){
	blockNumber = Math.floor((Math.random() * 20) + 1);
	document.getElementById('defend').innerHTML = "Blocked " + blockNumber + " damage";
}

function damageDealt(attack, defend){
	var damageCalculate;
	var counterChance = Math.floor((Math.random() * 20) + 1);

	var healthDrop = Math.floor((Math.random() * 10) + 1);

	console.log(counterChance);

	if (attack >= defend){
		damageCalculate = (attack - defend);
		document.getElementById('stats').innerHTML = "Took " + damageCalculate + " damage";
	}
	else if ((defend / 2) >= attack && counterChance >= defend) {
		document.getElementById('stats').innerHTML = "No damage taken";
		document.getElementById('counterChance').innerHTML = "Counterattack: -" + healthDrop + " health";
	}
	else{
		document.getElementById('stats').innerHTML = "No damage taken";	
	}
}