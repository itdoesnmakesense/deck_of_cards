define(function(require) {
  var $ = require("jquery");
  var getTemplates = require("get-templates"); 
  var addToPile = require("pile");

  	var player1; 
  	var player2;
	var p1CardValue;
	var p2CardValue; 
  return{

  	 OriginalDeck: function(){
	 	var player1 = $('.player1-deck').attr('id');
	 	var player2 = $('.player2-deck').attr('id');
	 	var drawDeck1 = "http://deckofcardsapi.com/api/deck/"+player1+"/draw/?count=2";
	 	var drawDeck2 = "http://deckofcardsapi.com/api/deck/"+player2+"/draw/?count=2";
	 	
	 	$.ajax({
		   url: drawDeck1
	    })
	  	.done(function(data) {
	  		var card1 = data.cards[0];
	  		var card2 = data.cards[1];
	  		var cardImage = card2.image;

	  		p1CardValue = card2.value;
	  		
	  		$('.player1-deck').append("<img id='pcard-back-tie' src='images/playing-card-back.jpg'>");
	        $('.player1-deck').append("<img id='pcard-tie' src="+cardImage+">");
	        console.log("drawDeck1 data:", data);
	        
	    });

	    $.ajax({
		   url: drawDeck2
	    })
	  	.done(function(data) {
	  		var card1 = data.cards[0];
	  		var card2 = data.cards[1];
	  		var cardImage = card2.image;
	  		p2CardValue = card2.value;

	  		console.log("p2CardValue",p2CardValue);
	  		console.log("p1CardValue",p1CardValue);

	  		if(p1CardValue > p2CardValue){
	      			addToPile.Player1(p1CardValue,p2CardValue);
	      			console.log("p1");
	      			$(player1).addClass('red').height(function(n,c){
	      				return c + 28;
	      			});
	      		}
	      		else if (p2CardValue > p1CardValue){
	      			addToPile.Player2(p1CardValue,p2CardValue);
	      			console.log("p2");
	      			$(player2).addClass('blue').height(function(n,c){
	      				return c + 28;
	      			});
	      		}
	      		else if (p1CardValue === p2CardValue){

	      			console.log("tie! lets play WAR!");
	      		}

	  		
	  		
	  		$('.player2-deck').append("<img id='pcard-back-tie' src='images/playing-card-back.jpg'>");  		
	        $('.player2-deck').append("<img id='pcard-tie' src="+cardImage+">");
	        console.log("drawDeck2 data:", data);
	    });		
	 }

};
  





});