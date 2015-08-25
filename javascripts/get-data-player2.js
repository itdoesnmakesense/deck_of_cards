define(function(require) { 
  var $ = require("jquery");
  var Q = require("q");
  var _ = require("lodash");
  var getTemplates = require("get-templates");

 
  var player2; 
  var player2Pile; 
  var cardType2;
  var cardCode2;    


return{
    shuffleCardsPlayer2: function(data) {
      var queryURL = "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
      $.ajax({
        url: queryURL
      }).done(function(data) {
        console.log(data);
        player2 = data.deck_id;
        console.log(player2);
      });  
              
    },
  drawCardsPlayer2: function(data,callback){
    $.ajax({
      url:"http://deckofcardsapi.com/api/deck/"+player2+"/draw/?count=1"
    }).done(function(data){
      console.log(data);
      var myCards = [];
       for (var i = 0; i < data.cards.length; i++) {
        cardType2 = data.cards[i].value;
        cardCode2 = data.cards[i].code;
        console.log("card Code", cardCode2);
        console.log("cardType",cardType2);
        cardImg = data.cards[i].image;
        //console.log("cardImg",cardImg);
        // var myData = {
        // "deckID": data.deck_id,
        // "image": data.cards[i].image
        // };
        // var newMyCards = myCards.push(myData);
        //  console.log(newMyCards);
         
        //   console.log(myData);
         }

       var populatedTemplate = getTemplates.shuffleTpl(data);
         var what = $('.player2').html(populatedTemplate);
         console.log(what);
       });
  }, //drawCards end bracket//

  pilePlayer2: function(data){
       
      $.ajax({
        url:"http://deckofcardsapi.com/api/deck/"+player2+"/pile/<<pile_name>>/add/?cards="+cardCode2
      }).done(function(data){
        console.log(data);
        var populatedTemplate = getTemplates.shuffleTpl(data);
         var what = $('.player2').html(populatedTemplate);
         console.log(what);

      });
    }//pilePlayer2 end bracket//
}; //return end bracket // 
});








