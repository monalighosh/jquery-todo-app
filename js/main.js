(function ($){
  "use strict";
  // Click on li to strike text
  $("ul").on("click", "li", function(){
    $(this).toggleClass("strikeTx");
  });

  // Click on icon to delete li
  $("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(500, function(){
      $(this).remove();
    });
    // Stops event bubbling
    e.stopPropagation(); 
  });

  // Add a new task
  $("input[type='text']").on("keypress", function(e){
    if(e.which === 13) {
      // Grabbing new todo text from input
      let todoText = $(this).val();
      $("ul").append(`<li><span>X</span>${todoText}</li>`);
      $(this).val("");
    }
  });
})(jQuery);