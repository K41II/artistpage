$(document).ready(function() {
  var lastScrollTop = 0; // Variable to store the last scroll position

  $(window).scroll(function() {
    var scrollPos = $(this).scrollTop();

    // Handle navigation visibility
    if (scrollPos > lastScrollTop) {
      // User is scrolling down
      if (scrollPos > 100) {
        $('.nav').fadeOut("slow");
      }
    } else {
      // User is scrolling up
      $('.nav').fadeIn("slow");
    }

    // Handle button visibility
    if (scrollPos > 300) {
      $('#upArrow').fadeIn("slow");
    } else {
      $('#upArrow').fadeOut("slow");
    }

    // Update lastScrollTop with the current scroll position
    lastScrollTop = scrollPos;
  });

  // Handle button click to scroll to top
  $('#upArrow').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  });
});
