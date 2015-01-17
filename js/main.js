function resizeFull() {
  $(".full-height").css("min-height", $(window).height() + "px");
}

$( document ).ready(function() {
  resizeFull();
});

$( window ).resize(function() {
  resizeFull();
});
