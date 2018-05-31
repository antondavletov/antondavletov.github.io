$(document).ready(function() {
	
// Modals 
    		$('.popup-btn').on('click', function(event) {
    			event.preventDefault();
    			$('.popup').fadeIn();
    		});
    		$('.popup-close').on('click', function(event) {
    			event.preventDefault();
    			$('.popup').fadeOut();
    		});
	
// Hamburger Menu
	var link = $('.menu-link');
	var link_active = $('.menu-link_active');
	var menu = $('.menu');
	var nav_link = $('.menu a');

	link.click(function(event){
		event.preventDefault();
		link.toggleClass('menu-link_active');
		menu.toggleClass('menu_active');
	});

	menu-link_active.click(function(event){
		event.preventDefault();
		link.removeClass('menu-link_active');
		menu.removeClass('menu_active');
	});
	
	//E-mail Ajax Send
	$("form.callback").submit(function() { 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", 
			data: th.serialize()
		}).done(function() {
			$('.popup').fadeIn();
			setTimeout(function() {
				$('.popup').fadeOut();
				th.trigger("reset");
			}, 4000);
		});
		return false;
	});
	
	//side-bars visible-notvisible

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
