$(document).ready(function() {


(function($) {

    $.fn.equalHeights = function() {
        var maxHeight = 0,
            $this = $(this);

        $this.each( function() {
            var height = $(this).innerHeight();

            if ( height > maxHeight ) { maxHeight = height; }
        });

        return $this.css('height', maxHeight);
    };

    // auto-initialize plugin
    $('[data-equal]').each(function(){
        var $this = $(this),
            target = $this.data('equal');
        $this.find(target).equalHeights();
    });

})(jQuery);
$('.test').equalHeights();


	$("body").on("click","a", function (event) {

        //отменяем стандартную обработку нажатия по ссылке

        event.preventDefault();

        //забираем идентификатор бока с атрибута href

        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь

            top = $(id).offset().top;

         

        //анимируем переход на расстояние - top за 1500 мс

        $('body,html').animate({scrollTop: top}, 1500);

    });

    new WOW().init();

			$('.benefits-block-img').hover(function(){
  			$(this).addClass('blink_on');
 			setTimeout(function(){$('.benefits-block-img').removeClass('blink_on')},1000);
			},1000)



	var wrapper = $('.main');
    var phone = $('#circle');

            wrapper.on('mousemove', function (e) {
                var pageX = e.clientX,
                    pageY = e.clientY;
                phone.css('transform', 'translateX(' + pageX / 100 + '%) translateY(' + pageY / 200 + '%)');
            });



            


// var moveForce = 30; // max popup movement in pixels
// var rotateForce = 20; // max popup rotation in deg

// $('.offer').mousemove(function(e) {
//     var docX = $(document).width();
//     var docY = $(document).height();
    
//     var moveX = (e.pageX - docX/2) / (docX/2) * -moveForce;
//     var moveY = (e.pageY - docY/2) / (docY/2) * -moveForce;
    
//     var rotateY = (e.pageX / docX * rotateForce*2) - rotateForce;
//     var rotateX = -((e.pageY / docY * rotateForce*2) - rotateForce);
    
//     $('#circle')
//         .css('left', moveX+'px')
//         .css('top', moveY+'px')
//         .css('transform', 'rotateX('+rotateX+'deg) rotateY('+rotateY+'deg)');
// });
	
// Modals 
    		// $('.popup-btn').on('click', function(event) {
    		// 	event.preventDefault();
    		// 	$('.popup').fadeIn();
    		// });
    		// $('.popup-close').on('click', function(event) {
    		// 	event.preventDefault();
    		// 	$('.popup').fadeOut();
    		// });
	
// Hamburger Menu
	// var link = $('.menu-link');
	// var link_active = $('.menu-link_active');
	// var menu = $('.menu');
	// var nav_link = $('.menu a');

	// link.click(function(event){
	// 	event.preventDefault();
	// 	link.toggleClass('menu-link_active');
	// 	menu.toggleClass('menu_active');
	// });

	// menu-link_active.click(function(event){
	// 	event.preventDefault();
	// 	link.removeClass('menu-link_active');
	// 	menu.removeClass('menu_active');
	// });
	
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

	// $('header a:contains("left")').click(function(event) {
	// 	event.preventDefault();
	// 	var left = $('.aside-left');
	// 	left.toggleClass('aside-left-visible');
	// });

	// $('header a:contains("right")').click(function(event) {
	// 	event.preventDefault();
	// 	var right = $('.aside-right');
	// 	right.toggleClass('aside-right-visible');
	// });
	// scroll fixed header
	// $(window).scroll(function () {
	// 	if ($(this).scrollTop() > 40) {
	// 		$('.header').css('position', 'fixed').fadeIn('fast');
	// 	}
	// 	else {
	// 		$('.header').css('position', 'relative').fadeIn('fast');
	// 	};
	// });

});
