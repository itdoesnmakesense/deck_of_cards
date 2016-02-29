define(function(require) { 
 	var $ = require("jquery");
    var q = require("q");
    var getTemplates = require("get-templates");
    // var pilePlayer1 = require("pilePlayer1");
    // var pilePlayer2 = require("pilePlayer2");
    var pile = require("pile");
    var tie = require("tie");
    
    var p1GValue;
    var	p2GValue;
    var remaining;
    var player1;
    var player2;
    var p1CardCode;
    var p2CardCode;

 		
 return { 
 	Player1: function(data,callback){
 		player1 = $('.player1-deck').attr('id');

	    var player1Data = $.ajax({
	        url:"http://deckofcardsapi.com/api/deck/"+player1+"/draw/?count=1"
	    })
      	.then(function(data){
      		for (var i = 0; i < data.cards.length; i++) {

	      		var populatedTemplate = getTemplates.shuffleTpl(data);
		        var player1card = $('.player1-deck').html(populatedTemplate);
		        var player1Value = data.cards[i].value;
		        var cardCode = data.cards[i].code;

		        console.log("player1 data.remaining:",data.remaining);
			        
			        if (player1Value === "10") {
		                player1Value = 10;
		            }
			        else if (player1Value === "JACK") {
		                player1Value = 11;
		            }
		            else if (player1Value === "QUEEN") {
		                player1Value = 12;
		            }
		            else if (player1Value === "KING") {
		                player1Value = 13;
		            }
		            else if (player1Value === "ACE") {
		                player1Value = 14;
		            }
				    
		            remaining = data.remaining;
		            p1GValue = player1Value;
		            p1CardCode = cardCode;
	            	$('.p1Score').html(player1Value);

	            	

           } 
	           	
      	});
		return player1Data;
 		
    }, //player1 close 

 	Player2: function(data,callback){
 		player2 = $('.player2-deck').attr('id');
 		
      	$.ajax({
        	url:"http://deckofcardsapi.com/api/deck/"+player2+"/draw/?count=1"
      	})
      	.then(function(data){
      		for (var i = 0; i < data.cards.length; i++) {
	      		var populatedTemplate = getTemplates.shuffleTpl(data);
	           	var player2card = $('.player2-deck').html(populatedTemplate);
	           	var player2Value = data.cards[0].value;
	           	var cardCode = data.cards[i].code;
	           	

		           	 if (player2Value === "10") {
		                player2Value = 10;
		            }
			        else if (player2Value === "JACK") {
		                player2Value = 11;
		            }
		            else if (player2Value === "QUEEN") {
		                player2Value = 12;
		            }
		            else if (player2Value === "KING") {
		                player2Value = 13;
		            }
		            else if (player2Value === "ACE") {
		                player2Value = 14;
		            }
	            	
		            p2GValue = player2Value;
		            p2CardCode = cardCode;
	            	$('.p2Score').html(player2Value);
	            	
           }         		
      	})
      	.done(function(data){
      		
		  	player1 = '#'+player1;
		  	player2 = '#'+player2;

		  	

		  	if(remaining !== 0){

	      		if(p1GValue > p2GValue){
	      			
	      			pile.Player1(p1CardCode,p2CardCode);
	      			$(player1).addClass('red').height(function(n,c){
	      				return c + 28;
	      			});
	      		}
	      		else if (p2GValue > p1GValue){
	      			pile.Player2(p1CardCode,p2CardCode);
	      			$(player2).addClass('blue').height(function(n,c){
	      				return c + 28;
	      			});
	      		}
	      		else if (p1GValue === p2GValue){
	      			tie.OriginalDeck();

	      			console.log("tie! lets play WAR!");
	      		}
	      	}
	      	else{
	      		alert("game over!");
	      	}

      	});

  	} //player2 close
};//return







}); //end define