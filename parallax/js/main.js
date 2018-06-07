$(document).ready(() => {

	$(window).scroll(() => {
		var topScroll = $(this).scrollTop();
		
		$(".parallax").css({
			"transition": "none",
			"backgroundPosition": "center " + (topScroll * 0.5) + "px"
		});

		console.log($(".parallax").css("background-position"));
	});

});