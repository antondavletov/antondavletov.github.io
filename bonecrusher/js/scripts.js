function formPosition(form) {
	var top =  window.pageYOffset || document.documentElement.scrollTop;
	$(form).css({'top':top+20,	 'margin-left':($(window).width()-$(form).outerWidth())/2});								
}

$(function(){

						
	$('.but-zvonok').click(function(){
		formPosition('.popup-zvonok');
		$('.popup-zvonok').fadeIn(800);
		$('.popup_bg').fadeIn(800);
       
	})
    						
						
	$('.but-zakaz').click(function(){
		formPosition('.popup-zakaz');
		$('.popup-zakaz').fadeIn(800);
		$('.popup_bg').fadeIn(800);
       
	})
						
	$('.but-info').click(function(){
		$('.popup-info .info').html( $(this).next('.info').html() );
		formPosition('.popup-info');
		$('.popup-info').fadeIn(800);
		$('.popup_bg').fadeIn(800);
       
	})
	
	$('.popup_bg, .popup .close').click(function(){
		$('.popup').fadeOut(500);
		$('.popup_bg').fadeOut(500);
	})

					
	$('.box3 .nav-tab').click(function(){
       $('.box3 .nav-tab').removeClass('active');
       $(this).addClass('active');
       $('.box3 .tab-item').removeClass('active');
       $('.box3 .tab-item[data-tab='+$(this).attr('data-tab')+']').addClass('active');
	})
					
	$('.box7 .tab-item').click(function(){
       $('.box7 .tab-text').fadeOut(500);
       $('.box7 .tab-text[data-tab='+$(this).attr('data-tab')+']').delay(500).fadeIn(500);
       $('.box7 .tab-item').removeClass('active');
       $(this).addClass('active');
	})
	
					
	$('.box4 .bl_inf .item .plus').click(function(){
       $(this).parents('.item').find('p').slideToggle();
       $(this).toggleClass('active');
	})
    
    $(".sl").slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
	
	
	$("input[name=phone]").mask("+7 (999) 999-99-99");
	
});

 