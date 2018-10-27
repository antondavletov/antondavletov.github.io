$(document).ready(function() {

    $('.faq-block__title').click(function(event) {
		event.preventDefault();
		$(this).toggleClass('faq-block__title_active');

		if ( $(this).hasClass('faq-block__title_active') ) {
			$(this)
				.next('.faq-block__desc')
				.slideDown(300);
		} else {
			$(this)
				.next('.faq-block__desc')
				.slideUp(300);
		};
	});


var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       false,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();
			
			var wrapper = $('.main');
    		var phone = $('#circle');
    		var windowWidth = $(window).width();

            wrapper.on('mousemove', function (e) {
            	if (windowWidth > 1200){

            	$('.benefits-block-img').hover(function(){
  			$(this).addClass('blink_on');
 			setTimeout(function(){$('.benefits-block-img').removeClass('blink_on')},1000);
			},1000)

                var pageX = e.clientX,
                    pageY = e.clientY;
                phone.css('transform', 'translateX(' + pageX / 100 + '%) translateY(' + pageY / 200 + '%)');
            	} else {
            		return false;
            	}
            });


// плавный скролл

	$('.link-scroll').click(function(){
        event.preventDefault();
        var el = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(el).offset().top}, 1000);
        return false;
        });

// плавный скролл закончился


//burger 
	var link = $('.header-burger-button');
	var link_active = $('.header-burger-button_active');
	var menu = $('.header-burger-menu');

	link.click(function(event){
		event.preventDefault();
		link.toggleClass('header-burger-button_active');
		menu.toggleClass('header-burger-menu_active');
	});

	menu-link_active.click(function(event){
		event.preventDefault();
		link.removeClass('header-burger-button_active');
		menu.removeClass('header-burger-menu');
	});
	
	//E-mail Ajax Send
	$("form.callback").submit(function() { 
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "../mail.php", 
            data: th.serialize()
        }).done(function() {
                th.trigger("reset");
            }, 4000);
        window.location.href = "thankyou.html"
        return false;
    });

});
