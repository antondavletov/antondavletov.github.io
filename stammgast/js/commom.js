$(document).ready(function() {

// paricle js

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


//высота блоков цены



var windowWidth = $(window).width();
if (windowWidth > 768){

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

}

//высота блоков цены конец

// плавный скролл

	$('.link-scroll').click(function(){
        event.preventDefault();
        var el = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(el).offset().top}, 1000);
        return false;
        });

// плавный скролл закончился

jQuery (function ($) {  
  $(function() {
    function maskPhone() {
      var country = $('#country option:selected').val();
      switch (country) {
        case "ru":
          $("#phone").mask("+7(999) 999-99-99");
          break;
        case "ua":
          $("#phone").mask("+380(99) 999-99-99");
          break;
        case "by":
          $("#phone").mask("+375(999) 999-99-99");
          break;  
        case "kz":
          $("#phone").mask("+7(999) 999-99-99");
          break;          
      }    
    }
    maskPhone();
    $('#country').change(function() {
      maskPhone();
    });
  });
});

$(function() {

  $('#country').styler();

});
	

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
