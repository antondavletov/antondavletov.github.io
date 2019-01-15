$(document).ready(function() {

	$('input[name="phone"]').mask('+7 (999) 999-99-99');


	var testSlider = $('.test-slider').bxSlider({
		mode: 'fade',
		infiniteLoop: false,
		speed: 0,
		adaptiveHeight: true,
		adaptiveHeightSpeed: 0,
		touchEnabled: false,
		pager: false,
		nextSelector: '.btn-next-container',
		nextText: '<div class="btn-next"><span>Далее</span></div>',
		onSliderLoad: function (currentIndex) {
			// первоначальные стили
			$('.main-progress__text').eq(currentIndex).addClass('main-progress__text_active');
			$('.step__extender-item').eq(currentIndex).addClass('step__extender-item_active');
			$('.step-title__item').eq(currentIndex).addClass('step-title__item-active');
		},
		onSlideAfter: function (slideElement, oldIndex, newIndex) {
			// активация кнопок
			$('.btn-next-container').removeClass('btn-next-container_active');
			$('.btn-next').removeClass('btn-next_active btn-shine');
			$('.step-title__item').eq(oldIndex).removeClass('step-title__item-active');
			$('.step-title__item').eq(newIndex).addClass('step-title__item-active');

			// изменение полосы загрузки

			// изменение шага

			// изменение заголовка в полосе загрузки

			var toTopDoc = window.parent.document.querySelector('.fancybox-slide--iframe');

			// console.log(toTopDoc);

			$(toTopDoc).animate({scrollTop: 0}, 0);

		}
	});

	// testSlider.goToSlide(4);

	var imgradio = $('.imgradio > img');

	
	$('input[name="step1"]').on('change', function(event) {
		event.preventDefault();

		var chosed = $(this); // выбранный чек бокс

		// оставляем инпуты для выбраного типа мебели и замена картинки

		console.log(this);
		var item = $(this).val();
		console.log(item);
		var steps = $('.step2-var');

		switch(item) {
			case 'Кровать' :
				for(i=0; i < imgradio.length; i++) {
					$(imgradio[i]).css('display', 'none');
				}
				imgradio.eq(0).css('display', 'block');
			break;
			case 'Диван' :
				for(i=0; i < imgradio.length; i++) {
					$(imgradio[i]).css('display', 'none');
				}
				imgradio.eq(1).css('display', 'block');
			break;
			case 'Стул' :
				for(i=0; i < imgradio.length; i++) {
					$(imgradio[i]).css('display', 'none');
				}
				imgradio.eq(2).css('display', 'block');
			break;
			case 'Банкеточка' :
				for(i=0; i < imgradio.length; i++) {
					$(imgradio[i]).css('display', 'none');
				}
				imgradio.eq(3).css('display', 'block');
			break;
			case 'Тумбочка' :
				for(i=0; i < imgradio.length; i++) {
					$(imgradio[i]).css('display', 'none');
				}
				imgradio.eq(4).css('display', 'block');
			break;
		}

	});


	var imgradio3 = $('.imgradio-step3 > img');
	var inputstep3 = $('.input[name="step3"]');
	console.log(inputstep3);
	console.log(imgradio3);

	$('input[name="step3"]').on('change', function(event) {
		event.preventDefault();

		var item3 = $(this).val();
		console.log(item3);

		switch(item3) {
			case 'Экокожа' :
				for(i=0; i < imgradio.length; i++) {
					$(imgradio3[i]).css('display', 'none');
				}
				imgradio3.eq(0).css('display', 'block');
			break;
			case 'Велюр' :
				for(i=0; i < imgradio.length; i++) {
					$(imgradio3[i]).css('display', 'none');
				}
				imgradio3.eq(1).css('display', 'block');
			break;
			case 'Антикоготь' :
				for(i=0; i < imgradio.length; i++) {
					$(imgradio3[i]).css('display', 'none');
				}
				imgradio3.eq(2).css('display', 'block');
			break;
		}

	});



	$('.pick-item__input').on('change', function(event) {
		event.preventDefault();
	
		
		var sizes = $('.pick-item__input-val');
		var radioInputs = $('input[name=step2]');

		if(sizes.val() !== '') {

			for(i = 0; i < radioInputs.length; i++) {
					$(radioInputs[i]).checked = false;
					$(radioInputs[i]).prop('disabled', true);
					console.log('закончился цикл радио');
			}

		} else {

				for(i = 0; i < radioInputs.length; i++){
					$(radioInputs[i]).checked = false;
					$(radioInputs[i]).prop('disabled', false);
				}
	
		}

		// sizes.on('click', function () { 
		// 	for(i = 0; i < radioInputs.length; i++) {
		// 		$(radioInputs[i]).checked = false;
		// 		$(radioInputs[i]).prop('disabled', true);
		// 		console.log('закончился цикл радио');
		// }
		//  })

		$('.btn-next-container').addClass('btn-next-container_active');
		$('.btn-next').addClass('btn-next_active btn-shine');
		$('.step-title__item').addClass()
		

	});




	$('form').each(function(index, el) {
		$(el).validate({
			rules:{
				"phone":{ required:true }
			},
			submitHandler: function(form){
				$(form).ajaxSubmit({
					type: 'POST',
					url: 'mail.php',
					success: function() {
						testSlider.goToSlide( $('.step-slide').length - 1 );
						$('.header-line').slideUp(300);
						$('.progress-line').slideUp(300);
					}
				});
			}
		});
	});
});