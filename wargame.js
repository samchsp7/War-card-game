var point = 0, bonus = 0, cards = [];
var cardRank = ['2','3','4','5','6','7','8','9','10','Jack','Queen','King','Ace'];
var value = [1,2,3,4,5,6,7,8,9,10,11,12,13];
var cardSuite = ['Hearts','Diamonds','Spades','Clubs'];
var player1Deck = [], player1Points = 0;
var player2Deck = [], player2Points = 0;


//This sets the heirarchy of cards and the base for a point system.


var assignDeck = function(array){ 
        for(var i = 0; i < (array.length); i++){
                if (i % 2 === 0) {
                        player1Deck.push(array[i]);
                } else {
                        player2Deck.push(array[i]);
                }; 
        };
};      


//This block is supposed to shuffle the deck 

var shuffle = function(array) {
        for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        }
        array = array;
        return array;
}

//checks if either player won the game
var winnerCheck = function (playerPoints, computerPoints) {
        if (playerPoints >= 10) {
                alert("Winner, Winner chicken dinner!");
        } else if (computerPoints >= 10) {
                alert("No Chicken dinner for you!");  
        } else {
                return false;
        }
};

//supposed to start the game with all the components
var Game = function () {   
        while (player1Deck[point].value === player2Deck[point].value) {
               point += 2;
                bonus += 2;
                alert('WAR!');
        };                            
        if(player1Deck[point].value > player2Deck[point].value){
                userPoints++;
                userPoints += bonus; 
        } else {
                computerPoints++;
                computerPoints += bonus;
        };
       point++;
        bonus = 0;
};

Game.start