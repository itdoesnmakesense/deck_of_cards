define(function(require) {
  var $ = require("jquery");
  var getTemplates = require("get-templates"); 


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
	  		console.log("second card value:",card2.value);
	  		var cardImage = card2.image;
	  		
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
	  		console.log("second card value:",card2.value);
	  		var cardImage = card2.image;
	  		
	  		$('.player2-deck').append("<img id='pcard-back-tie' src='images/playing-card-back.jpg'>");  		
	        $('.player2-deck').append("<img id='pcard-tie' src="+cardImage+">");
	        console.log("drawDeck2 data:", data);
	        

	    });		

	  }
};
  





});