define(function(require) { 
  var $ = require("jquery");
  var Q = require("q");
  var _ = require("lodash");
  var getTemplates = require("get-templates");

 var player1;  
  var player2;  

// return{
//   shuffleCards: function(){
//     var deferred = Q.defer();

//     $.ajax({
//       url: "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1",
//       deck_count: "GET"
//     }).done(function(data){
//       console.log("data",data);
//       deferred.resolve(data);
//     });
//     return deferred.promise;
//   }

  return {
    shuffleCards: function(data) {
      var queryURL = "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
      $.ajax({
        url: queryURL
      }).done(function(data) {
        console.log(data);
        player1 = data.deck_id;
        console.log(player1);
      });  
              
    },


  drawCards: function(data,callback){


    $.ajax({
      url:"http://deckofcardsapi.com/api/deck/"+player1+"/draw/?count=1"
    }).done(function(data){
      console.log(data);
      var myCards = [];
       for (var i = 0; i < data.cards.length; i++) {
        cardType = data.cards[i].value;
        console.log("cardType",cardType);
        cardImg = data.cards[i].image;
        console.log("cardImg",cardImg);
        var myData = {
        "deckID": data.deck_id,
        "image": data.cards[i].image
        };
        var newMyCards = myCards.push(myData);
         console.log(newMyCards);
         
      console.log(myData);
      }

       var populatedTemplate = getTemplates.shuffleTpl(data);
         var what = $('.something').html(populatedTemplate);
         console.log(what);
       });
  }
};
});
