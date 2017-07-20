"use strict"

var rarityNumber;
var lootNumber;


function rarityTable(){
	rarityNumber = Math.floor((Math.random() * 10) + 1);

	switch (rarityNumber){

		case 1:
		document.getElementById('reward').innerHTML = rarityNumber + ": Common";
		break;
		case 2:
		document.getElementById('reward').innerHTML = rarityNumber + ": Common";
		break;
		case 3:
		document.getElementById('reward').innerHTML = rarityNumber + ": Uncommon";
		break;
		case 4:
		document.getElementById('reward').innerHTML = rarityNumber + ": Uncommon";
		break;
		case 5:
		document.getElementById('reward').innerHTML = rarityNumber + ": Rare";
		break;
		case 6:
		document.getElementById('reward').innerHTML = rarityNumber + ": Rare";
		break;
		case 7:
		document.getElementById('reward').innerHTML = rarityNumber + ": Legendary";
		break;
		case 8:
		document.getElementById('reward').innerHTML = rarityNumber + ": Legendary";
		break;
		case 9:
		document.getElementById('reward').innerHTML = rarityNumber + ": Exotic";
		break;
		case 10:
		document.getElementById('reward').innerHTML = rarityNumber + ": Exotic";
		break;
	}
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
}

function pointsScored(LootType, rarityLevel){

	

}