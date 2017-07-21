"use strict"

var damageNumber;
var enemyDefend;

function attackDamage(){
	damageNumber = Math.floor((Math.random() * 20) + 1);
	document.getElementById('attack').innerHTML = "Attacked for " + damageNumber + " damage";
}

function enemyBlocked(){
	enemyDefend = Math.floor((Math.random() * 20) + 1);
	document.getElementById('enemyDefend').innerHTML = "Blocked " + enemyDefend + " damage";
}

function damageDealt(attack, defend){
	var damageCalculate;
	var counterChance = Math.floor((Math.random() * 20) + 1);

	var healthDrop = Math.floor((Math.random() * 10) + 1);

	console.log(counterChance);

	if (attack >= defend){
		damageCalculate = (attack - defend);
		document.getElementById('stats').innerHTML = "Took " + damageCalculate + " damage";
		document.getElementById('counterChance').innerHTML = "";
	}
	else if ((defend / 2) >= attack && counterChance >= defend) {
		document.getElementById('stats').innerHTML = "No damage taken";
		document.getElementById('counterChance').innerHTML = "Counterattack: -" + healthDrop + " health";
	}
	else{
		document.getElementById('stats').innerHTML = "No damage taken";
			document.getElementById('counterChance').innerHTML = "";
	}
}

var enemyDamage;
var blockNumber;

function enemyAttack(){
	enemyDamage = Math.floor((Math.random() * 20) + 1);
	document.getElementById('enemyAttack').innerHTML = "Attacked for " + enemyDamage + " damage";
}
function damageBlocked(){
	blockNumber = Math.floor((Math.random() * 20) + 1);
	document.getElementById('defend').innerHTML = "Blocked " + blockNumber + " damage";
}

function enemyDamageDealt(enemyAttack, playerDefend){
	var enemyDamageCalculate;

	if (enemyAttack >= playerDefend){
		enemyDamageCalculate = (enemyAttack - playerDefend);
		document.getElementById('enemyStats').innerHTML = "Took " + enemyDamageCalculate + " damage";
	}
	else{
		document.getElementById('enemyStats').innerHTML = "No damage taken";	
	}
}