function resizeFull() {
  var fullHeight = document.getElementsByClassName("full-height");
  var i = 0;
  for (; i < fullHeight.length; i++) {
    fullHeight[i].style.minHeight = window.innerHeight+"px";
  }
}

window.addEventListener("resize", function() {
  resizeFull();
});
resizeFull();

// The slow scrolldown.
/*
 * $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});
*/
