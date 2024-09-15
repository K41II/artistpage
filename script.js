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

  var audio = $("#audio-player")[0];
    var playButton = $("#play-pause");
    var seekBar = $("#seek-bar");
    var currentTimeDisplay = $("#current-time");
    var totalTimeDisplay = $("#total-time");

    // Toggle Play/Pause
    playButton.click(function() {
        if (audio.paused) {
            audio.play();
            playButton.text("Pause");
        } else {
            audio.pause();
            playButton.text("Play");
        }
    });

    // Update seek bar as the audio plays
    audio.addEventListener("timeupdate", function() {
        var value = (audio.currentTime / audio.duration) * 100;
        seekBar.val(value);
        currentTimeDisplay.text(formatTime(audio.currentTime));
    });

    // Update the audio's current time when seek bar is changed
    seekBar.on("input", function() {
        var newTime = audio.duration * (seekBar.val() / 100);
        audio.currentTime = newTime;
    });

    // Display total time when metadata is loaded
    audio.addEventListener("loadedmetadata", function() {
        totalTimeDisplay.text(formatTime(audio.duration));
    });

    // Helper function to format time as MM:SS
    function formatTime(seconds) {
        var minutes = Math.floor(seconds / 60);
        var seconds = Math.floor(seconds % 60);
        if (seconds < 10) seconds = "0" + seconds;
        return minutes + ":" + seconds;
    }
});
