"use strict"

var rarityNumber;
var lootNumber;

function rarityTable(){
	rarityNumber = Math.floor((Math.random() * 10) + 1);

	switch (rarityNumber){

		case 1:
		document.getElementById('reward').innerHTML = "Common";
		break;
		case 2:
		document.getElementById('reward').innerHTML = "Common";
		break;
		case 3:
		document.getElementById('reward').innerHTML = "Uncommon";
		break;
		case 4:
		document.getElementById('reward').innerHTML = "Uncommon";
		break;
		case 5:
		document.getElementById('reward').innerHTML = "Rare";
		break;
		case 6:
		document.getElementById('reward').innerHTML = "Rare";
		break;
		case 7:
		document.getElementById('reward').innerHTML = "Legendary";
		break;
		case 8:
		document.getElementById('reward').innerHTML = "Legendary";
		break;
		case 9:
		document.getElementById('reward').innerHTML = "Exotic";
		break;
		case 10:
		document.getElementById('reward').innerHTML = "Exotic";
		break;
	}
	return rarityNumber;
}

function lootTable(){
	lootNumber = Math.floor((Math.random() * 12) + 1);

	switch (lootNumber){

		case 1:
		document.getElementById('item').innerHTML = "Weapon";
		break;
		case 2:
		document.getElementById('item').innerHTML = "Shield";
		break ;
		case 3:
		document.getElementById('item').innerHTML = "Headgear";
		break;
		case 4:
		document.getElementById('item').innerHTML = "Chestplate";
		break;
		case 5:
		document.getElementById('item').innerHTML = "Gauntlets";
		break;
		case 6:
		document.getElementById('item').innerHTML = "Leggings";
		break;
		case 7:
		document.getElementById('item').innerHTML = "Leggings";
		break;
		case 8:
		document.getElementById('item').innerHTML = "Gauntlets";
		break;
		case 9:
		document.getElementById('item').innerHTML = "Chestplate";
		break;
		case 10:
		document.getElementById('item').innerHTML = "Headgear";
		break;
		case 11:
		document.getElementById('item').innerHTML = "Shield";
		break;
		case 12:
		document.getElementById('item').innerHTML = "Weapon";
		break;
	}
	return lootNumber;
}

function pointsScored(rarityLevel, lootType){
	var points = 0;

	switch (rarityNumber){

		case 1:
		points = 1;
		break;
		case 2:
		points = 1;
		break;
		case 3:
		points = 2;
		break;
		case 4:
		points = 2;
		break;
		case 5:
		points = 3;
		break;
		case 6:
		points = 3;
		break;
		case 7:
		points = 4;
		break;
		case 8:
		points = 4;
		break;
		case 9:
		points = 5;
		break;
		case 10:
		points = 5;
		break;
	}

	switch (lootNumber){

		case 1:
		if (rarityNumber === 9 || rarityNumber === 10){
		document.getElementById('score').innerHTML = (points + (6*3)) +  " Points";
		}
		else{
		document.getElementById('score').innerHTML = (points + 6) +  " Points";
		}
		break;
		case 2:
		if (rarityNumber === 9 || rarityNumber === 10){
		document.getElementById('score').innerHTML = (points + (5*3)) +  " Points";
		}
		else{
		document.getElementById('score').innerHTML = (points + 5) +  " Points";
		}
		break ;
		case 3:
		if (rarityNumber === 9 || rarityNumber === 10){
		document.getElementById('score').innerHTML = (points + (4*3)) +  " Points";
		}
		else{
		document.getElementById('score').innerHTML = (points + 4) +  " Points";
		}
		break;
		case 4:
		if (rarityNumber === 9 || rarityNumber === 10){
		document.getElementById('score').innerHTML = (points + (3*3)) +  " Points";
		}
		else{
		document.getElementById('score').innerHTML = (points + 3) +  " Points";
		}
		break;
		case 5:
		if (rarityNumber === 9 || rarityNumber === 10){
		document.getElementById('score').innerHTML = (points + (2*3)) +  " Points";
		}
		else{
		document.getElementById('score').innerHTML = (points + 1) +  " Points";
		}
		break;
		case 6:
		if (rarityNumber === 9 || rarityNumber === 10){
		document.getElementById('score').innerHTML = (points + (1*3)) +  "P oints";
		}
		else{
		document.getElementById('score').innerHTML = (points + 1) +  " Points";
		}
		break;
		case 7:
		if (rarityNumber === 9 || rarityNumber === 10){
		document.getElementById('score').innerHTML = (points + (1*3)) +  " Points";
		}
		else{
		document.getElementById('score').innerHTML = (points + 1) +  " Points";
		}
		break;
		case 8:
		if (rarityNumber === 9 || rarityNumber === 10){
		document.getElementById('score').innerHTML = (points + (2*3)) +  " Points";
		}
		else{
		document.getElementById('score').innerHTML = (points + 2) +  " Points";
		}
		break;
		case 9:
		if (rarityNumber === 9 || rarityNumber === 10){
		document.getElementById('score').innerHTML = (points + (3*3)) +  " Points";
		}
		else{
		document.getElementById('score').innerHTML = (points + 3) +  " Points";
		}
		break;
		case 10:
		if (rarityNumber === 9 || rarityNumber === 10){
		document.getElementById('score').innerHTML = (points + (4*3)) +  " Points";
		}
		else{
		document.getElementById('score').innerHTML = (points + 4) +  " Points";
		}
		break;
		case 11:
		if (rarityNumber === 9 || rarityNumber === 10){
		document.getElementById('score').innerHTML = (points + (5*3)) +  " Points";
		}
		else{
		document.getElementById('score').innerHTML = (points + 5) +  " Points";
		}
		break;
		case 12:
		if (rarityNumber === 9 || rarityNumber === 10){
		document.getElementById('score').innerHTML = (points + (6*3)) +  " Points";
		}
		else{
		document.getElementById('score').innerHTML = (points + 6) +  " Points";
		}
		break;
	}
}