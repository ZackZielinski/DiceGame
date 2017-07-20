"use strict"

var damageNumber;
var blockNumber;

function attackDamage(){
	damageNumber = Math.floor((Math.random() * 20) + 1);
	document.getElementById('attack').innerHTML = "Attacked for " + damageNumber + " damage";
	return damageNumber;
}

function damageBlocked(){
	blockNumber = Math.floor((Math.random() * 20) + 1);
	document.getElementById('defend').innerHTML = "Blocked " + blockNumber + " damage";
	return blockNumber;
}

function damageDealt(attack, defend){
	var damageCalculate;

	if (attack > defend || attack === defend){
		damageCalculate = (attack - defend);
	}
	else{
		damageCalculate = 0;
	}
	document.getElementById('stats').innerHTML = "Took " + damageCalculate + " damage"
}