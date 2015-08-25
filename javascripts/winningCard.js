define(function(require) { 
  var $ = require("jquery");
  var Q = require("q");
  var _ = require("lodash");
  var getTemplates = require("get-templates");
  var getData = require("get-data");
  var getData2 = require("get-data-player2");


return {

  winningCard: function(data){
    // var cardType1 = getData.data.cards[i].value;
    // var cardType2 = getData2.data.cards[i].value;
    console.log(getData.drawCardsPlayer1);
    console.log(getData2.drawCardsPlayer2.cardType2);
    if(getData.cardType1 > getData2.cardType2){
      console.log("player1 wins", getData.cardType1);
    } else if(getData.cardType1 < getData2.cardType2){
      console.log("player2 wins", getData2.cardType2);
    }

  }



  }; // end return function//
}); //end define function //