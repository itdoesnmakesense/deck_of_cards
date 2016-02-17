define(function(require) { 
 	var $ = require("jquery");
    var q = require("q");
    var getTemplates = require("get-templates");

    
    var p1GValue;
    var	p2GValue;
    var remaining;
    var player1;
    var player2;

 		
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
		        console.log("player1 data.remaining:",data.remaining);
			        
			        if (player1Value === "JACK") {
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
				    // p1GValue.pop();
		            // p1GValue.push(parseInt(player1Value));
		            remaining = data.remaining;
		            p1GValue = player1Value;
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
	           	//console.log("player2 data:",data);

		           	if (player2Value === "JACK") {
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
	            	// p2GValue.pop();
		            // p2GValue.push(parseInt(player2Value));
		            p2GValue = player2Value;
	            	$('.p2Score').html(player2Value);
           }         		
      	})
      	.done(function(data){
      		
		  	console.log("p1GValue",p1GValue);
		  	console.log("p2GValue",p2GValue);
		  	player1 = '#'+player1;
		  	player2 = '#'+player2;
		  	

		  	if(remaining !== 0){

	      		if(p1GValue > p2GValue){
	      			console.log("p1 is winner");
	      			$(player1).addClass('red').height(function(n,c){
	      				return c + 28;
	      			});
	      		}
	      		else if (p2GValue > p1GValue){
	      			console.log("p2 is winner");
	      			$(player2).addClass('blue').height(function(n,c){
	      				return c + 28;
	      			});
	      		}
	      		else if (p1GValue === p2GValue){
	      			console.log("tie no points!");
	      		}
	      	}
	      	else{
	      		alert("game over!");
	      	}

      	});

  	} //player2 close
};//return







}); //end define