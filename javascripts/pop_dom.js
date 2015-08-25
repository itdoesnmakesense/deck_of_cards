define(function(require) {
  var $ = require("jquery");
  var templates = require("get-templates");

  return {
    showShuffleCards: function(data) {

      
      var myCards = [];
      for (var i = 0; i < data.length; i++) {
      var myCardsObj = {
        "Id": deck_id,
        "shuffled": data.shuffled,
        "remaining": data.remaining
     };
    var answer = myCards.push(myCardsObj);
    console.log(answer);
   }
     
     console.log(showShuffleCards);

      // require(['hbs!../templates/shuffle'], function(shuffleTpl) {
      //   var what = $('.something').html(shuffleTpl(myCards));
      //   console.log(what);
      // });
    },
    showDrawCards: function(data) {
      
       require(['hbs!../templates/shuffle'], function(shuffleTpl) {
         var what = $('.something').html(shuffleTpl(newMyCards));
         console.log(what);
       });
    }
   
  };

});

