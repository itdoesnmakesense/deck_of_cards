define(function(require) {
  var $ = require("jquery");
  var getTemplates = require("get-templates"); 
  var addToPile = require("pile");

  	var player1; 
  	var player2;

  	var p1Cards = [];
  	var p2Cards = [];


	// var p1Card2;

	// var p2Card1;
	// var p2Card2; 
  return{

  	 OriginalDeck: function(){
	 	var player1 = $('.player1-deck').attr('id');
	 	var player2 = $('.player2-deck').attr('id');
	 	var drawDeck1 = "http://deckofcardsapi.com/api/deck/"+player1+"/draw/?count=2";
	 	var drawDeck2 = "http://deckofcardsapi.com/api/deck/"+player2+"/draw/?count=2";
	 	
	 	$.ajax({
		   url: drawDeck1
	    })
	  	.then(function(data) {
	  		//tie cards data
	  		var card1 = data.cards[0];
	  		var card2 = data.cards[1];
	  		//tie card image for second card
	  		var cardImage = card2.image;

	  		

	  		//card codes to add to winner of tie's pile
	  		p1Cards.push(card1.code,card2.code);
	  		// p1Card1 = card1.code;
	  		// p1Card2 = card2.code;

	  		$('.player1-deck').append("<img id='pcard-back-tie' src='images/playing-card-back.jpg'>");
	        $('.player1-deck').append("<img id='pcard-tie' src="+cardImage+">");
	        console.log("drawDeck1 data:", data);
	        
	    });

	    $.ajax({
		   url: drawDeck2
	    })
	  	.then(function(data) {
	  		//tie cards data
	  		var card1 = data.cards[0];
	  		var card2 = data.cards[1];
	  		//tie card image for second card
	  		var cardImage = card2.image;

	  		
	  		
	  		//card codes to add to winner of tie's pile
	  		p2Cards.push(card1.code,card2.code);
	  		// p2Card1 = card1.code;
	  		// p2Card2 = card2.code;

	  		if(p1Cards[1] > p2Cards[1]){
	      			addToPile.Player1(p1Cards, p2Cards);
	      			console.log("p1");
	      			$(player1).addClass('red').height(function(n,c){
	      				return c + 28;
	      			});
	      		}
	      		else if (p2Cards[1] > p1Cards[1]){
	      			addToPile.Player2(p1Cards, p2Cards);
	      			console.log("p2");
	      			$(player2).addClass('blue').height(function(n,c){
	      				return c + 28;
	      			});
	      		}
	      		else if (p1Cards[1] === p2Cards[1]){

	      			console.log("tie! lets play WAR! AGAIN");
	      		}

	  		
	  		
	  		$('.player2-deck').append("<img id='pcard-back-tie' src='images/playing-card-back.jpg'>");  		
	        $('.player2-deck').append("<img id='pcard-tie' src="+cardImage+">");
	        
	    });		
	 }

};
  





});