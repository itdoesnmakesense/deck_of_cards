define(function(require) {
  var $ = require("jquery");
  var getTemplates = require("get-templates");

  return{
  	Player1: function(p1Cards, p2Cards){
  		console.log("player 1 piles:" , p1Cards, p2Cards);
  		var player1 = $('.player1-deck').attr('id');
  		var pileUrl = "http://deckofcardsapi.com/api/deck/"+player1+"/pile/pilePlayer1/add/?cards="+p1Cards+","+p2Cards;
 
	  	$.ajax({
	        url: pileUrl
	    })
	  	.done(function(data) {
	        console.log("player1 data:", data);
	    });	
  	},
  
  	Player2: function(p1Cards, p2Cards){
  		console.log("player 2 piles:" , p1Cards, p2Cards);
		var player2 = $('.player2-deck').attr('id');
	  	var pileUrl = "http://deckofcardsapi.com/api/deck/"+player2+"/pile/pilePlayer2/add/?cards="+p1Cards+","+p2Cards;

		  	$.ajax({
		        url: pileUrl
		    })
		  	.done(function(data) {
		        console.log("player2 data:", data);
		    });	
	 }

	};

});