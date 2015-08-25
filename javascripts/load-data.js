define(function(require) {
  var $ = require("jquery");
  var bootstrap = require("bootstrap");
  var hbs = require("hbs");
  var get = require("get-data");
  var pop = require("pop_dom");



$(document).on("click",'#shuffleBtn',function(){

    get.shuffleCards();
  });
$(document).on("click",'#drawBtn',function(){
    
    get.drawCards();
  });


  });
  
 

