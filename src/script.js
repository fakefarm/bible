$(document).ready(function(){

  $('#bible-search').submit(function(e){
    e.preventDefault();
    var url = "https://www.bible.com/bible/59/gen.9.json"

    $.ajax({
      url: url,
      dataType: "JSONP",
      jsonpCallback: callbackkkk,
      success: function() {
        debugger;
      }
    })

    function callbackkkk() {
      // debugger;
    }
  });
});
