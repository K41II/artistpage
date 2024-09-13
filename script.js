$(document).ready(function() {
      // Track the scroll event
      $(window).scroll(function() {
        // Get the scroll position from the top of the page
        var scrollPos = $(this).scrollTop();
        
        // Log the scroll position or do something with it
        console.log('Scroll Position: ' + scrollPos);
        
        // Example: Change background color based on scroll position
        if (scrollPos > 100) {
          $('.nav').fadeOut("slow");
        } else {
          $('.nav').fadeIn("slow");
        }
      });
    });
