'use strict';

const cardArray =[
	{ name: '1', img : '../assets/1.jpg', },
	{ name: '2', img : '../assets/2.jpg', },
	{ name: '3', img : '../assets/3.jpg', },
	{ name: '4', img : '../assets/4.jpg', },
	{ name: '5', img : '../assets/5.jpg', },
	{ name: '6', img : '../assets/6.jpg', },
	{ name: '7', img : '../assets/7.jpg', },
	{ name: '8', img : '../assets/8.jpg', },
	{ name: '9', img : '../assets/9.jpg', },
	{ name: '10', img : '../assets/10.jpg', },
	{ name: '11', img : '../assets/11.jpg', },
	{ name: '12', img : '../assets/12.jpg', },
	{ name: '1', img : '../assets/1.jpg', },
	{ name: '2', img : '../assets/2.jpg', },
	{ name: '3', img : '../assets/3.jpg', },
	{ name: '4', img : '../assets/4.jpg', },
	{ name: '5', img : '../assets/5.jpg', },
	{ name: '6', img : '../assets/6.jpg', },
	{ name: '7', img : '../assets/7.jpg', },
	{ name: '8', img : '../assets/8.jpg', },
	{ name: '9', img : '../assets/9.jpg', },
	{ name: '10', img : '../assets/10.jpg', },
	{ name: '11', img : '../assets/11.jpg', },
	{ name: '12', img : '../assets/12.jpg', },
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#cardGrid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIDs = []
const cardsWon = []

console.log(cardArray);
console.log(gridDisplay);

function createBoard () {
	for (let i = 0; i < cardArray.length; i++){
		const card = document.createElement('img')
		card.setAttribute('src', '../assets/back.png')
		card.setAttribute('data-id', i)
		card.setAttribute('class', 'card')
		card.addEventListener('click', flipcard);
		
		gridDisplay.append(card)
		//console.log(card, i);
	}
}

createBoard()

function checkMatch() {
	const cards = document.querySelectorAll('img')
	
	console.log(cardsChosen, cardsChosenIDs)
	
	// match
	if (cardsChosen[0] == cardsChosen[1]) {
		cards[cardsChosenIDs[0]].setAttribute('src', '../assets/blank.png')
		cards[cardsChosenIDs[1]].setAttribute('src', '../assets/blank.png')
		cards[cardsChosenIDs[0]].removeEventListener('click', flipcard)
		cards[cardsChosenIDs[1]].removeEventListener('click', flipcard)
		cardsWon.push(cardsChosen)
	} else { // no maatch
		cards[cardsChosenIDs[0]].setAttribute('src', '../assets/back.png')
		cards[cardsChosenIDs[1]].setAttribute('src', '../assets/back.png')
	}
	
	resultDisplay.textContent = cardsWon.length
	
	cardsChosen = []
	cardsChosenIDs = []
	
	if (cardsWon.length == cardArray.length/2) {
		resultDisplay.textContent = 'Alle Paare gefunden'
	}
}

function flipcard() {
	if (cardsChosen.length < 2) {
	const cardId = this.getAttribute('data-id')
	cardsChosen.push(cardArray[cardId].name)
	cardsChosenIDs.push(cardId)
	
	this.setAttribute('src', cardArray[cardId].img)
	
	if (cardsChosen.length === 2) {
		setTimeout( checkMatch, 500)
	}
	}
}
