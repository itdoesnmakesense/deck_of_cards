define(function(require) { 
    var $ = require("jquery");
    var q = require("q");

    return function(){
      var queryURL = "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
      //player1 start deck
      $.ajax({
        url: queryURL
      }).done(function(data) {
        console.log(data);
        var player1 = data.deck_id;
        $('.player1-deck').attr('id', data.deck_id);
        console.log(player1);
        return player1;
      }); 

      //player2 start deck
      $.ajax({
        url: queryURL
      }).done(function(data) {
        console.log(data);
        player2 = data.deck_id;
        $('.player2-deck').attr('id', data.deck_id);
        console.log(player2);
      }); 
    };



}); // define end bracket //
