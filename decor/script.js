(function(d,w){
	w.addEventListener('DOMContentLoaded',function(){
		function byClass(val){return d.getElementsByClassName(val);}
		d.body.addEventListener('click',function(e){
			if(e.target.classList.contains('open_modal')){
    var winTop = $(window).scrollTop();
				$('.overlay').fadeIn(500);
				$(e.target.dataset.modal).fadeIn(1000).addClass('active-modal').css('top', winTop + 25 + 'px' );
				d.body.style.overflow='hidden';
                 //$('body').bind('touchmove', function(e){e.preventDefault()});
				$('.close').css({'display':'flex'});
			}else if(e.target.classList.contains('overlay')||e.target.classList.contains('close')){
				d.body.style.overflowY='visible';
                //$('body').unbind('touchmove');
				$('.modal').fadeOut(500).removeClass('active-modal').css('top', 'initial' );
				$('.overlay').fadeOut(1000);
				$('.close').css({'display':'none'});
			}else if(e.target.classList.contains('prev_step')){
				var step = parseInt(e.target.dataset.step);
				var prev = step - 1;
				$('.step_' + step).hide();
				$('.step_' + prev).show();
			}else if(e.target.classList.contains('next_step')){
				var step = parseInt(e.target.dataset.step);
				var next = step + 1;
				$('.step_' + step).hide();
				$('.step_' + next).show();
			}else if(e.target.classList.contains('n_box')){
				e.target.classList.toggle('active');
			}
		});

		/*$('.open_modal').on('click',function(e){
		    $('body').addClass('ios-device');
		});*/
		$('.close, .overlay').on('click',function(e){
		    $('.modal').removeClass('po-fix');
		});
		$('.data').on('click',function(e){
			e.preventDefault();
			var id=this.dataset.scroll;
			if($(id).length!==0){
				scrollToY($(id).offset().top);
			}
		});
		function scrollToY(num){
			$('html,body').animate({scrollTop:num},1000);
		};

		$('.five_slider').owlCarousel({
			loop:true,dotsEach:true,center:true,autoplay:true,smartSpeed:1000,autoplayTimeout:10000,items:3,mouseDrag:false,touchDrag:true,
			responsive:{
				0:{items:1},750:{items:3}
            }
		});
		$('.second_slider').owlCarousel({
			loop:false,dotsEach:true,center:false,autoplay:false,smartSpeed:1000,autoplayTimeout:10000,items:1,mouseDrag:false,touchDrag:true,animateIn:'fadeIn',animateOut:'fadeOut'
		});
		$('.six_slider').owlCarousel({
			loop:false,
			dotsEach:true,
			center:false,
			autoplay:false,
			smartSpeed:500,
			autoplayTimeout:10000,
			items:1,
			//mouseDrag:false,
			//touchDrag:false,
			animateIn:'fadeIn',
			animateOut:'fadeOut'
		});
		$('.eight_slider').owlCarousel({
			loop:true,
			dotsEach:true,
			center:false,
			//autoplay:true,
			smartSpeed:1000,
			autoplayTimeout:10000,
			items:1,
			mouseDrag:false,
			touchDrag:false
		});

		var dotcount = 0;
		$('.second_slider .owl-dot').each(function(){
			$(this).addClass('dotnumber' + dotcount);
			$(this).attr('data-info', dotcount);
			dotcount++;
		});
		var slidecount = 0;
		$('.second_slider .owl-item').not('.cloned').each(function(){
			$(this).addClass('slidenumber' + slidecount);
			slidecount++;
		});
		$('.second_slider .owl-dot').each(function(){
			var grab = $(this).data('info');
			var slidegrab = $('.slidenumber' + grab + ' .previmg').css('background');
			//$('.dotnumber'+ grab).attr('style', 'background:' + slidegrab);
		});
		var owl = $('.five_slider');
		$('.before').on('click', function(){ owl.trigger('prev.owl'); });
		$('.after').on('click', function(){ owl.trigger('next.owl'); });

		var dotcounts = 1;
		$('.eight_slider .owl-dot').each(function(){
			$(this).addClass('dotnumbers' + dotcounts);
			$(this).attr('data-info', dotcounts);
			dotcounts++;// = dotcounts + 1;
		});
		var slidecounts = 1;
		$('.eight_slider .owl-item').not('.cloned').each(function(){
			$(this).addClass('slidenumbers' + slidecounts);
			slidecounts++; //= slidecounts + 1;
		});
		$('.eight_slider .owl-dot').each(function(){
			var grab = $(this).data('info');
			var slidegrab = $('.slidenumbers'+ grab).children().attr('style');
			$('.dotnumbers'+ grab).text('0' + grab);
		});
		var owls = $('.eight_slider');
		$('.left_arr').on('click', function(){ owls.trigger('prev.owl'); });
		$('.right_arr').on('click', function(){ owls.trigger('next.owl'); });

		var dotcountes = 1;
		$('.six_slider .owl-dot').each(function(){
			$(this).addClass('dotnumberes' + dotcountes);
			$(this).attr('data-info', dotcountes);
			dotcountes++;
		});
		var slidecountes = 1;
		$('.six_slider .owl-item').not('.cloned').each(function(){
			$(this).addClass('slidenumberes' + slidecountes);
			slidecountes++;
		});
		$('.six_slider .owl-dot').each(function(){
			var grab = $(this).data('info');
			var slidegrab = $('.slidenumberes' + grab + ' .avatar').children().attr('style');
			var slidename = $('.slidenumberes' + grab + ' .name').html();
			$('.six_slider .dotnumberes'+ grab).attr('style', slidegrab).html(slidename);
		});

		var owlss = $('.second_slider');
		//$('.second_slider .owl-dots').animate({scrollLeft: ($('.second_slider .owl-dot').outerWidth() + 10) * 5}, 1000);
		$('.prev_bt').on('click',function(){
			var width = $('.second_slider .owl-dot').outerWidth() + 10;
			$('.second_slider .owl-dots').animate({
				scrollLeft: '-=' + width,
			}, 1000);
			owlss.trigger('prev.owl');
		});
		$('.next_bt').on('click',function(){
			var width = $('.second_slider .owl-dot').outerWidth() + 10;
			$('.second_slider .owl-dots').animate({
				scrollLeft: '+=' + width,
			}, 1000);
			owlss.trigger('next.owl');
		});

		var owles = $('.six_slider');
		$('.top').on('click',function(){
			owles.trigger('prev.owl');
			var height = $('.six_slider .owl-dot.active').outerHeight();
			$('.six_slider .owl-dots').animate({
				scrollTop: '-=' + height,
			}, 1000);
		});
		$('.down').on('click',function(){
			owles.trigger('next.owl');
			var height = $('.six_slider .owl-dot.active').outerHeight();
			$('.six_slider .owl-dots').animate({
				scrollTop: '+=' + height,
			}, 1000);
		});

		$('.tab').on('click',function(){
			$('.tab').removeClass('active');
			$('.content').removeClass('active');
			$(this.dataset.tab).addClass('active');
			$(this).addClass('active');
		});

		$('.minimg').on('click',function(){
			$(this).parent().prev().css({'background':$(this).css('background')})
		});
	},false);
	/*$('.close-plus').on('click',function(){
		$(this).click(false);
		$('.plus-overlay').click();
	});
	$('.plus-overlay').on('click',function(){
		$('.plus_text').fadeOut();
		$('.plus-overlay').fadeOut();
	});
	$('.plus').on('click',function(){
		$(this).find('.plus_text').fadeIn();
	});*/
	$('.close-plus').on('click',function(){
		$('.plus_text').fadeOut();
	});
	$('.plus-click').on('click',function(){
		$('.plus_text').fadeOut();
		$(this).parent().find('.plus_text').fadeIn();
	});
     $('.modal_slider_1 .modal-slider-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
      arrows:true,
        fade: true,
      infinite:false,
        asNavFor: '.modal_slider_1 .modal-slider-small'
    });
    $('.modal_slider_1 .modal-slider-small').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.modal_slider_1 .modal-slider-big',
      arrows:false,
      dots: false,
      infinite:false,
      focusOnSelect: true,
      variableWidth: true
    });
     $('.modal_slider_2 .modal-slider-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
      arrows:true,
        fade: true,
      infinite:false,
        asNavFor: '.modal_slider_2 .modal-slider-small'
    });
    $('.modal_slider_2 .modal-slider-small').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.modal_slider_2 .modal-slider-big',
      arrows:false,
      dots: false,
      infinite:false,
      focusOnSelect: true,
      variableWidth: true
    });
     $('.modal_slider_3 .modal-slider-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
      arrows:true,
        fade: true,
      infinite:false,
        asNavFor: '.modal_slider_3 .modal-slider-small'
    });
    $('.modal_slider_3 .modal-slider-small').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.modal_slider_3 .modal-slider-big',
      arrows:false,
      dots: false,
      infinite:false,
      focusOnSelect: true,
      variableWidth: true
    });
     $('.modal_slider_4 .modal-slider-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
      arrows:true,
        fade: true,
      infinite:false,
        asNavFor: '.modal_slider_4 .modal-slider-small'
    });
    $('.modal_slider_4 .modal-slider-small').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.modal_slider_4 .modal-slider-big',
      arrows:false,
      dots: false,
      infinite:false,
      focusOnSelect: true,
      variableWidth: true
    });
     $('.modal_slider_5 .modal-slider-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
      arrows:true,
        fade: true,
      infinite:false,
        asNavFor: '.modal_slider_5 .modal-slider-small'
    });
    $('.modal_slider_5 .modal-slider-small').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.modal_slider_5 .modal-slider-big',
      arrows:false,
      dots: false,
      infinite:false,
      focusOnSelect: true,
      variableWidth: true
    });
     $('.modal_slider_6 .modal-slider-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
      arrows:true,
        fade: true,
      infinite:false,
        asNavFor: '.modal_slider_6 .modal-slider-small'
    });
    $('.modal_slider_6 .modal-slider-small').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.modal_slider_6 .modal-slider-big',
      arrows:false,
      dots: false,
      infinite:false,
      focusOnSelect: true,
      variableWidth: true
    });
})(document,window); 