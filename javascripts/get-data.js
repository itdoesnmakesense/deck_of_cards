define(function(require) { 
  var $ = require("jquery");
  var Q = require("q");
  var _ = require("lodash");
  var getTemplates = require("get-templates");
  var get2 = require("get-data-player2");

  var player1;  
  var player1Pile;  
  var cardType1;
  var cardCode1;
  

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
    shuffleCardsPlayer1: function(data) {
      var queryURL = "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
      $.ajax({
        url: queryURL
      }).done(function(data) {
        console.log(data);
        player1 = data.deck_id;
        console.log(player1);
      });            
    }, //shuffleCards end bracket //

    drawCardsPlayer1: function(data,callback){
      $.ajax({
        url:"http://deckofcardsapi.com/api/deck/"+player1+"/draw/?count=1"
      }).done(function(data){
        console.log(data);
        var myCards = [];
         for (var i = 0; i < data.cards.length; i++) {
         var cardType1 = data.cards[i].value;
          cardCode1 = data.cards[i].code;
          console.log("card Code", cardCode1);
          console.log("cardType",cardType1);
          cardImg = data.cards[i].image;
         
          }


         var populatedTemplate = getTemplates.shuffleTpl(data);
           var what = $('.player1').html(populatedTemplate);
           console.log(what);
         });
    } //drawCards end bracket//
     

    // pilePlayer1: function(data){
       
    //   $.ajax({
    //     url:"http://deckofcardsapi.com/api/deck/"+player1+"/pile/"+player1+"/add/?cards="+cardCode1
    //   }).done(function(data){
    //     console.log(data);
    //       if(cardType1 > get2.cardType2){
    //           console.log("player1 wins", cardType1);
    //         } else if(cardType1 < get2.cardType2){
    //           console.log("player2 wins", get2.cardType2);
    //         }
    //     var populatedTemplate = getTemplates.pileTpl(data);
    //      var what = $('.deckContent2').html(populatedTemplate);
    //      console.log(what);

    //   });
    // }


  }; // return end bracket// 
}); // define end bracket //
