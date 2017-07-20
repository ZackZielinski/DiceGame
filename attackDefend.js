"use strict"

var damageNumber;
var blockNumber;

function attackDamage(){
	damageNumber = Math.floor((Math.random() * 20) + 1);
	document.getElementById('attack').innerHTML = "Dealt " + damageNumber + " Damage";
	return damageNumber;
}

function damageBlocked(){
	blockNumber = Math.floor((Math.random() * 20) + 1);
	document.getElementById('defend').innerHTML = "Blocked " + blockNumber + " Damage";
	return blockNumber;
}

function damageDealt(){
}