define(function(require) {
  var $ = require("jquery");
  var bootstrap = require("bootstrap");
  var hbs = require("hbs");
  var get = require("get-data");
  var get2 = require("get-data-player2");
  var pop = require("pop_dom");
  var win = require("winningCard");


//player 1 //
$(document).on("click",'#shuffleBtnPlayer1',function(data){
    get.shuffleCardsPlayer1();
    get2.shuffleCardsPlayer2();
  });
$(document).on("click",'#drawBtnPlayer1',function(){
    get.drawCardsPlayer1();
    get2.drawCardsPlayer2();

    get.winningCard();

  });


// // player 2 //
// $(document).on("click",'#shuffleBtnPlayer2',function(){
//     get2.shuffleCardsPlayer2();
//   });
// $(document).on("click",'#drawBtnPlayer2',function(){
//     get2.drawCardsPlayer2();
//   });






  });
  
 

