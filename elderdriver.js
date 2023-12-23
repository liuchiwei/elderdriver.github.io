document.addEventListener("scroll", function () {
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) /
      (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
    document.getElementById("progress-bar").style.width = scrollPercentage + "%";
  });


  $(function() {
	const videoElement = $('#video').get(0);

	if (!videoElement) {
		console.error("Video element not found");
		return;
	}

	const maxScroll = $(document).height() - $(window).height();

	$(window).scroll(function() {
		const currentScrollPosition = $(document).scrollTop();

		if (videoElement.duration) {
			videoElement.currentTime = videoElement.duration * (currentScrollPosition / maxScroll);
		} else {
			console.warn("Video duration is not available");
		}
	});
});


document.addEventListener('DOMContentLoaded', function () {
    var spotElements = document.querySelectorAll('.spot');

    function checkSpot() {
        var currentPos = window.scrollY;
        var windowHeight = window.innerHeight;

        spotElements.forEach(function (spotElement) {
            var spotOffset = spotElement.offsetTop;

            if (currentPos > spotOffset - windowHeight) {
                spotElement.classList.add('spotted');
            }
        });
    }

    // Check spot on page load
    checkSpot();

    // Check spot on scroll
    window.addEventListener('scroll', checkSpot);
});

