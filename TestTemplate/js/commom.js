$(document).ready(function() {

	$('header a:contains("left")').click(function(event) {
		event.preventDefault();
		var left = $('.aside-left');
		left.toggleClass('aside-left-visible');
	});

	$('header a:contains("right")').click(function(event) {
		event.preventDefault();
		var right = $('.aside-right');
		right.toggleClass('aside-right-visible');
	});
	// scroll fixed header
	$(window).scroll(function () {
		if ($(this).scrollTop() > 40) {
			$('.header').css('position', 'fixed').fadeIn('fast');
		}
		else {
			$('.header').css('position', 'relative').fadeIn('fast');
		};
	});

});
