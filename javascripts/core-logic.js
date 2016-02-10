define(function (require) {
    var $ = require("jquery");
    var q = require("q");
    var getDeck = require("get-deck");
    var drawCard = require("draw-card");
    var score = require("score");

    var cardCount = 52;
    
    return function () {
        // On page load, each player gets assigned a deck, and deck_id is attached to DOM
        getDeck();

        // On click #drawBtn, call drawCard module, which displays card from assigned deck_id
        $(document).on("click",'#drawBtn',function(data){
            $(this).text('Hit');
           
            drawCard.Player1();
            drawCard.Player2();

            cardCount -= 1;
            $('#cardCount').html(cardCount);

    // console.log(drawCard.Player1(player1GValue));
        });

    }; // End of return function
});