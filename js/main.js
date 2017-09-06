// console.log("Up and running!");
// var cardOne = "queen";
// var cardTwo = "king";
// var cardThree = "queen";
// var cardFour = "king";
// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardTwo);

var cards = ["queen" ,"king", "queen" ,"king"];
var cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped queen");

var cardTwo = cards[1];
cardsInPlay.push(cardTwo);
console.log("User flipped king");

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
    result = alert("You found a match!");
} else {
	result = alert("Sorry, try again.");
}
