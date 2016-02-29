define(function(require) {
  var $ = require("jquery");
  var templates = require("get-templates");

  return{
  	Player1: function(p1, p2){
  		var player1 = $('.player1-deck').attr('id');
  		var pileUrl = "http://deckofcardsapi.com/api/deck/"+player1+"/pile/pilePlayer1/add/?cards="+p1+","+p2;

	  	$.ajax({
	        url: pileUrl
	    })
	  	.done(function(data) {
	        console.log("player1 data:", data);
	    });	
  	},
  
  	Player2: function(p1,p2){
		var player2 = $('.player2-deck').attr('id');
	  	var pileUrl = "http://deckofcardsapi.com/api/deck/"+player2+"/pile/pilePlayer1/add/?cards="+p1+","+p2;

		  	$.ajax({
		        url: pileUrl
		    })
		  	.done(function(data) {
		        console.log("player2 data:", data);
		    });	
	 },

	 Tie: function(){
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
	  		console.log("card1:",card1);
	  		console.log("card2:",card2);
	  		$('.player1-deck').append("<img id='pcard-back-tie' src='images/playing-card-back.jpg'>");
	        console.log("drawDeck1 data:", data);
	    });

	    $.ajax({
		   url: drawDeck2
	    })
	  	.done(function(data) {
	  		var card1 = data.cards[0];
	  		var card2 = data.cards[1];
	  		console.log("card1:",card1);
	  		console.log("card2:",card2);
	  		$('.player2-deck').append("<img id='pcard-back-tie' src='images/playing-card-back.jpg'>");
	        console.log("drawDeck2 data:", data);
	    });		

	  }
};

});