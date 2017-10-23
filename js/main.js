
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.PNG"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.PNG"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.PNG"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.PNG"
}
];

var cardsInPlay = []; 

var checkForMatch = function() {
	if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
    setTimeout(function() { alert("You found a match!"); }, 200);
	}
	if (cardsInPlay.length === 2 && cardsInPlay[0] !== cardsInPlay[1]) {
    setTimeout(function() { alert("Sorry, try again."); }, 200);
	}
	if (cardsInPlay.length === 4 && cardsInPlay[2] === cardsInPlay[3]) {
    setTimeout(function() { alert("You found a 2nd match!"); }, 200);
	}
	if (cardsInPlay.length === 4 && cardsInPlay[2] !== cardsInPlay[3]) {
    setTimeout(function() { alert("Sorry, try again."); }, 200);
	}

	if (cardsInPlay.length <= 1) {
		result = '';
	}
	if (cardsInPlay.length === 3) {
		result = '';
	}
	// } else {
	// result = alert("Sorry, try again.");
	// }
}

var resetBoard = function () {
	cardsInPlay = [];
	document.getElementById('game-board').innerHTML = '';
	createBoard();



//shuffle below from "Fisher-Yates-Durstenfeld shuffle" - Code Academy

shuffle(cards);
function shuffle(sourceArray) {
    for (var n = 0; n < sourceArray.length - 1; n++) {
        var k = n + Math.floor(Math.random() * (sourceArray.length - n));

        var temp = sourceArray[k];
        sourceArray[k] = sourceArray[n];
        sourceArray[n] = temp;
    }
}

console.log(cards);

}

//shuffle above from "Fisher-Yates-Durstenfeld shuffle" - Code Academy


var flipCard = function () {
    
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped " + cards[cardId].rank);

	// cardsInPlay.push(cards[cardId].cardImage);
	console.log("User flipped " + cards[cardId].cardImage);

    // cardsInPlay.push(cards[cardId].suit);
	console.log("User flipped " + cards[cardId].suit);

    checkForMatch();

}

//below used some code from Stackoverflow to help correct a few errors in my code.

var createBoard = function() {
 	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.PNG");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

resetButton.addEventListener('click', resetBoard)

createBoard();

//above used some code from Stackoverflow to help correct a few errors in my code.



