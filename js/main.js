
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "Images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "Images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "Images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "Images/king-of-diamonds.png"
}
];

var cardsInPlay = []; 

var checkForMatch = function() {
	if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
    result = alert("You found a match!");
	} else {
	result = alert("Sorry, try again.");
	}
}

var flipCard = function (cardId) {

	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped " + cards[cardId].rank);

	cardsInPlay.push(cards[cardId].cardImage);
	console.log("User flipped " + cards[cardId].cardImage);

    cardsInPlay.push(cards[cardId].suit);
	console.log("User flipped " + cards[cardId].suit);

    checkForMatch();

}

flipCard(0);
flipCard(2);




