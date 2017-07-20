"use strict"

function getDirection(){

	var directNumber = Math.floor((Math.random() * 4) + 1);

	switch(directNumber){
		case 1:
		document.getElementById('direction').innerHTML = directNumber + ": North";
		break;

		case 2:
		document.getElementById('direction').innerHTML = directNumber + ": East";
		break;

		case 3:
		document.getElementById('direction').innerHTML = directNumber + ": South";
		break;

		case 4:
		document.getElementById('direction').innerHTML = directNumber + ": West";
		break;

	}
}

function spacesMoved(){
	var spaces = Math.floor((Math.random() * 6) + 1);
	
	if (spaces == 1){
		document.getElementById('movement').innerHTML = "Move " + spaces + " space";
	}
	else{
		document.getElementById('movement').innerHTML = "Move " + spaces + " spaces";
	}

}

function largeBoardBattleSpaces(){
	var spacesToBattle = Math.floor((Math.random() * 20) + 1);
	document.getElementById('largeBattleSpaces').innerHTML = spacesToBattle + " Battle Spaces";
}

function smallBoardBattleSpaces(){
	var spacesToBattle = Math.floor((Math.random() * 12) + 1);
	document.getElementById('smallBattleSpaces').innerHTML = spacesToBattle + " Battle Spaces";
}

function enemySelect(){
	var enemyChoice = Math.floor((Math.random() * 8) + 1);

	switch (enemyChoice){

		case 1:
		document.getElementById('enemy').innerHTML = "No enemy. Move again";
		break;
		case 2:
		document.getElementById('enemy').innerHTML = "Grunt";
		break;
		case 3:
		document.getElementById('enemy').innerHTML = "Dark hound";
		break;
		case 4:
		document.getElementById('enemy').innerHTML = "Acolyte";
		break;
		case 5:
		document.getElementById('enemy').innerHTML = "Knight";
		break;
		case 6:
		document.getElementById('enemy').innerHTML = "Sorcerer";
		break;
		case 7:
		document.getElementById('enemy').innerHTML = "Brute";
		break;
		case 8:
		document.getElementById('enemy').innerHTML = "Unleashed Gorlog";
		break;
	}
}