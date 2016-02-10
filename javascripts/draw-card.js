define(function(require) { 
 	var $ = require("jquery");
    var q = require("q");
    var getTemplates = require("get-templates");

    
    var p1GValue = [1];
    var	p2GValue =[1];
    

 		
 return { 
 	Player1: function(data,callback){
 		var player1 = $('.player1-deck').attr('id');

	    $.ajax({
	        url:"http://deckofcardsapi.com/api/deck/"+player1+"/draw/?count=1"
	    })
	    // .done(function(data){
	    //     var myCards = [];
	    //      	for (var i = 0; i < data.cards.length; i++) {
			  //       var player1Value = data.cards[i].value;
			  //         	cardImg = data.cards[i].image;
	    //       	}
     //    })
      	.then(function(data){
      		for (var i = 0; i < data.cards.length; i++) {
	      		var populatedTemplate = getTemplates.shuffleTpl(data);
		        var player1card = $('.player1-deck').html(populatedTemplate);
		        var player1Value = data.cards[i].value;
		        console.log("player1 data:",data);
			        
			        if (player1Value === "JACK") {
		                // console.log("Jack triggered.")
		                player1Value = 11;
		            }
		            else if (player1Value === "QUEEN") {
		                // console.log("Queen triggered.")
		                player1Value = 12;
		            }
		            else if (player1Value === "KING") {
		                // console.log("King triggered.")
		                player1Value = 13;
		            }
		            else if (player1Value === "ACE") {
		                // console.log("Ace triggered.")
		                player1Value = 14;
		            }
		            console.log("player1Value",player1Value);
				    // p1GValue.pop();
		            p1GValue.push(parseInt(player1Value));
		            // score(player1Value);
	            $('.p1Score').html(player1Value);
           } 
	           	
      	});
 		
    }, //player1 close 

 	Player2: function(data,callback){
 		var player2 = $('.player2-deck').attr('id');
 		
 		
      	$.ajax({
        	url:"http://deckofcardsapi.com/api/deck/"+player2+"/draw/?count=1"
      	})
      	// .done(function(data){
       //  	var myCards = [];
       //   		for (var i = 0; i < data.cards.length; i++) {
       //   			var player2Value = data.cards[i].value;
       //    				cardImg = data.cards[i].image;
       //   		}
       //   })
      	.then(function(data){
      		for (var i = 0; i < data.cards.length; i++) {
	      		var populatedTemplate = getTemplates.shuffleTpl(data);
	           	var player2card = $('.player2-deck').html(populatedTemplate);
	           	var player2Value = data.cards[0].value;
	           	console.log("player2 data:",data);

		           	if (player2Value === "JACK") {
		                // console.log("Jack triggered.")
		                player2Value = 11;
		            }
		            else if (player2Value === "QUEEN") {
		                // console.log("Queen triggered.")
		                player2Value = 12;
		            }
		            else if (player2Value === "KING") {
		                // console.log("King triggered.")
		                player2Value = 13;
		            }
		            else if (player2Value === "ACE") {
		                // console.log("Ace triggered.")
		                player2Value = 14;
		            }
	      		console.log("player2Value",player2Value);
	            	// p2GValue.pop();
		            p2GValue.push(parseInt(player2Value));
	            $('.p2Score').html(player2Value);
           }         		
      	})
      	.done(function(data){
      		
		  	console.log("p1GValue",p1GValue);
		  	console.log("p2GValue",p2GValue);
      		if(p1GValue > p2GValue){
      			console.log("p1 is winner");
      		}
      		else if (p2GValue > p1GValue){
      			console.log("p2 is winner");
      		}
      		else if (p1GValue === p2GValue){
      			console.log("tie no points!");
      		}

      	});

  	} //player2 close
};//return







}); //end define