$(function() {

    // hide the story from view
    $("#story").hide();
    // ---- event handler ---- //
    $("#btn-click").click(function(e) {
      e.preventDefault()
      // grab the values from the input boxes, then append them to the DOM
      $(".type-of-bird").empty().append($("input.type-of-bird").val());
      $(".roommate-name").empty().append($("input.roommate-name").val());
      $(".noun").empty().append($("input.noun").val());
      $(".liquid").empty().append($("input.liquid").val());
      $(".body-part").empty().append($("input.body-part").val());
      
  
      // show the story
      $("#story").show();
  
      // empty the form's values
      $(':input').val('');
  
      // hide the questions
      $("#questions").hide();
  
    });
  
  });

  $("#play-btn").click(function(e) {
    $("#questions").show();
    $("#story").hide();
  });