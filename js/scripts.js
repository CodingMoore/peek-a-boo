$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });

  $("#fade_toggle").click(function() {
    $("p").fadeToggle();
    $("p").fadeToggle();
  });
  $(".click_here").click(function() {
    $(".slideToggle").slideToggle();
    $(".slideToggle").slideToggle();
  });
});