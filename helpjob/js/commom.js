$( document ).ready(function() {

	var wrapper = $('body');
	var phone = $('.overlayrose');
	// var clouds = $('.clouds');
	var windowWidth = $(window).width();

			wrapper.on('mousemove', function (e) {
				if (windowWidth > 1200){

					var pageX = e.clientX,
							pageY = e.clientY;
					phone.css('transform', 'translateX(' + pageX / 500 + '%) translateY(' + pageY / 500 + '%)');
					// clouds.css('transform', 'translateX(' + pageX / 2000 + '%)');
					wrapper.css({'background-position':"center"+ pageX / 10 +"%"});
				} else {
					return false;
				}
			});


$('.treb-cont').matchHeight();


// // плавный скролл

// 	$('.link-scroll').click(function(){
//         event.preventDefault();
//         var el = $(this).attr('href');
//         $('html, body').animate({
//             scrollTop: $(el).offset().top}, 1000);
//         return false;
//         });

// // плавный скролл закончился




// //burger 
// 	var link = $('.header-burger-button');
// 	var link_active = $('.header-burger-button_active');
// 	var menu = $('.header-burger-menu');

// 	link.click(function(event){
// 		event.preventDefault();
// 		link.toggleClass('header-burger-button_active');
// 		menu.toggleClass('header-burger-menu_active');
// 	});

// 	menu-link_active.click(function(event){
// 		event.preventDefault();
// 		link.removeClass('header-burger-button_active');
// 		menu.removeClass('header-burger-menu');
// 	});
	
// 	//E-mail Ajax Send
// 	$("form.callback").submit(function() { 
//         var th = $(this);
//         $.ajax({
//             type: "POST",
//             url: "../mail.php", 
//             data: th.serialize()
//         }).done(function() {
//                 th.trigger("reset");
//             }, 4000);
//         window.location.href = "thankyou.html"
//         return false;
// 	});
	
	

});
