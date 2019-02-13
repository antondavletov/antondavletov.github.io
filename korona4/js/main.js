$(document).ready(function() {

	$('input[name="phone"]').mask('+7 (999) 999-99-99');

	var testSlider = $('.test-slider').bxSlider({
		mode: 'horizontal',
		infiniteLoop: false,
		speed: 0,
		adaptiveHeight: true,
		adaptiveHeightSpeed: 0,
		touchEnabled: false,
		caption: true,
		pager: false,
		nextSelector: '.btn-next-container',
		nextText: '<div class="btn-next"><span>Далее</span></div>',
		prevSelector: '.btn-prev-container',
		prevText: '<div class="btn-prev"><span> < Назад</span></div>',
		onSliderLoad: function (currentIndex) {
			// первоначальные стили
			$('.main-progress__text').eq(currentIndex).addClass('main-progress__text_active');
			$('.step__extender-item').eq(currentIndex).addClass('step__extender-item_active');
			$('.step-title__item').eq(currentIndex).addClass('step-title__item-active');
			console.log(currentIndex);
			$('.btn-next-container').addClass('btn-next-container_active');
			$('.btn-next').addClass('btn-next_active btn-shine');
		},
		onSlideNext: function () { 	
			testSlider.redrawSlider();
		},
		onSlideBefore: function () { 

		},
		onSlideAfter: function (slideElement, oldIndex, newIndex) {
			/// АКТИВАЦИЯ СЛАЙДЕРА моделей
			// $('.slider-models').css('display', 'none');
			// $('.slider-models').slick('slickGoTo', '0').fadeIn(3000);
			// активация кнопок
			// $('.btn-next-container').removeClass('btn-next-container_active');
			// $('.btn-next').removeClass('btn-next_active btn-shine');
			
			$('.step-title__item').eq(oldIndex).removeClass('step-title__item-active');
			$('.step-title__item').eq(newIndex).addClass('step-title__item-active');
			// изменение полосы загрузки

			// изменение шага

			// изменение заголовка в полосе загрузки

			var toTopDoc = window.parent.document.querySelector('.fancybox-slide--iframe');

			// console.log(toTopDoc);

			$(toTopDoc).animate({scrollTop: 0}, 0);
			

		},
	});

	// testSlider.goToSlide(4);
	
	var stepButton1 = $('.btn-next-container-step1 > .bx-next');
	
	stepButton1.on('touchstart click', function () { 
		$('.slider-models').slick({
			adaptiveHeight: true,
			draggable: false,
			infinite: true,
			arrow: true,
			autoplay: false,
			slidesToShow: 1,
			slidesToScroll: 1,
		});
		$('.slider-models').slick('slickGoTo', 0);
		testSlider.redrawSlider();
		console.log('Кнопка Далее 1ый слад и переход на 2й')
	})

		

// ВЫБОР ТИПА проверка ============================================================
	
		$('input[name="step1"]').on('change', function(event) {
		event.preventDefault();

		var imgradio = $('.imgradio > img');
		var chosed = $(this); // выбранный чек бокс

		// оставляем инпуты для выбраного типа мебели и замена картинки

		var item = $(this).val();

		var krovatSlider = $('.slider-models-krovat');
		var divanSlider = $('.slider-models-divan');
		// var banketkaSlider = $('.slider-models-banketka');
		// var tumbaSlider = $('.slider-models-tumba');
		// var kresloSlider = $('.slider-models-kreslo');
		// var matrasSlider = $('.slider-models-matras');
		// var stulSlider = $('.slider-models-stul');
		// var komodSlider = $('.slider-models-komod');
		// var zerkaloSlider = $('.slider-models-zerkalo');
		// var pufikSlider = $('.slider-models-pufik');

		var krovatS = $('.step2-var-krovat');
		var divanS = $('.step2-var-divan');

		switch(item) {
			case 'Кровать' :
				for(i=0; i < imgradio.length; i++) {
					$(imgradio[i]).css('display', 'none');
				}
				imgradio.eq(0).css('display', 'block');
				krovatSlider.css('display', 'block');
				krovatS.css('display', 'block');
				divanSlider.css('display', 'none');
				divanS.css('display', 'none');
				// tumbaSlider.css('display', 'none');
				// kresloSlider.css('display', 'none');
				// matrasSlider.css('display', 'none');
				// stulSlider.css('display', 'none');
				// komodSlider.css('display', 'none');
				// banketkaSlider.css('display', 'none');
				// zerkaloSlider.css('display', 'none');
				// pufikSlider.css('display', 'none');
			break;
			case 'Диван' :
				for(i=0; i < imgradio.length; i++) {
					$(imgradio[i]).css('display', 'none');
				}
				imgradio.eq(1).css('display', 'block');
				krovatSlider.css('display', 'none');
				krovatS.css('display', 'none');
				divanSlider.css('display', 'block');
				divanS.css('display', 'block');
				// tumbaSlider.css('display', 'none');
				// kresloSlider.css('display', 'none');
				// matrasSlider.css('display', 'none');
				// stulSlider.css('display', 'none');
				// komodSlider.css('display', 'none');
				// banketkaSlider.css('display', 'none');
				// zerkaloSlider.css('display', 'none');
				// pufikSlider.css('display', 'none');
			break;
			case 'Кресло' :
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
			case 'Матрас' :
				for(i=0; i < imgradio.length; i++) {
					$(imgradio[i]).css('display', 'none');
				}
				imgradio.eq(5).css('display', 'block');
			break;
			case 'Стул' :
				for(i=0; i < imgradio.length; i++) {
					$(imgradio[i]).css('display', 'none');
				}
				imgradio.eq(6).css('display', 'block');
			break;
			case 'Комод' :
				for(i=0; i < imgradio.length; i++) {
					$(imgradio[i]).css('display', 'none');
				}
				imgradio.eq(7).css('display', 'block');
			break;
			case 'Зеркало' :
				for(i=0; i < imgradio.length; i++) {
					$(imgradio[i]).css('display', 'none');
				}
				imgradio.eq(8).css('display', 'block');
			break;
			case 'Пуфик' :
				for(i=0; i < imgradio.length; i++) {
					$(imgradio[i]).css('display', 'none');
				}
				imgradio.eq(9).css('display', 'block');
			break;
		}

	});

	// ВЫБОР МОДЕЛИ //#endregion

	$('.slider-models').on('afterChange', function(event, slick, currentSlide, nextSlide){
		console.log(currentSlide);

		var inputValue = $('#modeltypeid');
		var inputValueDiv = $('#modeltypeid2');

		switch(currentSlide) {
			case 0 :
			inputValue.val('Баронеса');
			inputValueDiv.val('Виконт');
			break;
			case 1 :
			inputValue.val('Герцогиня');
			inputValueDiv.val('Виконт2');
			break;
			case 2 :
			inputValue.val('Графиня');
			inputValueDiv.val('Виконт3');
			break;
			case 3 :
			inputValue.val('Династия');
			inputValueDiv.val('Виконт4');
			break;
			case 4 :
			inputValue.val('Императрица');
			inputValueDiv.val('Виконт5');
			break;
			case 5 :
			inputValue.val('Кардинал');
			break;
			case 6 :
			inputValue.val('Княгиня');
			break;
			case 7 :
			inputValue.val('Маркиза');
			break;
			case 8 :
			inputValue.val('Фрейлина');
			break;
		}

		$('.btn-next-container').addClass('btn-next-container_active');
		$('.btn-next').addClass('btn-next_active btn-shine');
	});


	//  кнопки

	var bxPrev2 = $('.btn-prev-container-step2 > .bx-prev');
	var bxPrev3 = $('.btn-prev-container-step3 > .bx-prev');
	// var bxNext2 = $('.bx-next-step2');

	// bxNext2.on('click', function (event) {
	// 	event.preventDefault();
	// 	testSlider.goToSlide(2);
	// 	$('.slider-models').slick('unslick');
	// })
	bxPrev2.on('click touchstart', function(){
		console.log('назад');
		$('.slider-models').slick('unslick');
	});
	bxPrev3.on('click touchstart', function (event) {
		event.preventDefault();
		console.log('размер назад')
		// $('.slider-models').slick();
	})

	// Выбор модели ====================================



	// ВЫБОР МАТЕРИАЛА =================================================

	$('input[name="step3"]').on('change', function(event) {
		event.preventDefault();

		var item3 = $(this).val();
		var imgradio3 = $('.imgradio-step3 > img');
		var inputstep3 = $('.input[name="step3"]');
		console.log(item3);

		switch(item3) {
			case 'Экокожа' :
				for(i=0; i < imgradio3.length; i++) {
					$(imgradio3[i]).css('display', 'none');
				}
				imgradio3.eq(0).css('display', 'block');
			break;
			case 'Велюр' :
				for(i=0; i < imgradio3.length; i++) {
					$(imgradio3[i]).css('display', 'none');
				}
				imgradio3.eq(1).css('display', 'block');
			break;
			case 'Антикоготь' :
				for(i=0; i < imgradio3.length; i++) {
					$(imgradio3[i]).css('display', 'none');
				}
				imgradio3.eq(2).css('display', 'block');
			break;
		}

	});

// ВЫБОР ЦВЕТА =======================================================

	$('input[name="step4"]').on('change', function(event) {
		event.preventDefault();

		var imgradio4 = $('.imgradio-step4 > img');
		var inputstep4 = $('.input[name="step4"]');
		var item4 = $(this).val();

		switch(item4) {
			case 'Красный' :
				for(i=0; i < imgradio4.length; i++) {
					$(imgradio4[i]).css('display', 'none');
				}
				imgradio4.eq(0).css('display', 'block');
			break;
			case 'Оранжевый' :
				for(i=0; i < imgradio4.length; i++) {
					$(imgradio4[i]).css('display', 'none');
				}
				imgradio4.eq(1).css('display', 'block');
			break;
			case 'Желтый' :
				for(i=0; i < imgradio4.length; i++) {
					$(imgradio4[i]).css('display', 'none');
				}
				imgradio4.eq(2).css('display', 'block');
			break;
			case 'Синий' :
				for(i=0; i < imgradio4.length; i++) {
					$(imgradio4[i]).css('display', 'none');
				}
				imgradio4.eq(3).css('display', 'block');
			break;
			case 'Голубой' :
				for(i=0; i < imgradio4.length; i++) {
					$(imgradio4[i]).css('display', 'none');
				}
				imgradio4.eq(4).css('display', 'block');
			break;
			case 'Фиолетовый' :
				for(i=0; i < imgradio4.length; i++) {
					$(imgradio4[i]).css('display', 'none');
				}
				imgradio4.eq(5).css('display', 'block');
			break;
			case 'Черный' :
				for(i=0; i < imgradio4.length; i++) {
					$(imgradio4[i]).css('display', 'none');
				}
				imgradio4.eq(6).css('display', 'block');
			break;
			case 'Белый' :
				for(i=0; i < imgradio4.length; i++) {
					$(imgradio4[i]).css('display', 'none');
				}
				imgradio4.eq(7).css('display', 'block');
			break;
			case 'Бежевый' :
				for(i=0; i < imgradio4.length; i++) {
					$(imgradio4[i]).css('display', 'none');
				}
				imgradio4.eq(8).css('display', 'block');
			break;
		}

	});

// ВЫБОР СВОЕГО РАЗМЕРА И ЦВЕТА ===================================================

	$('.pick-item__input').on('change', function(event) {
		event.preventDefault();
		
		var sizes = $('input[name="step22"]'); //свой вариант размера
		var radioInputs = $('input[name="step2"]');
		var radioInputsColor = $('input[name="step4"]')
		var inputChanges = $('input[name="step44"]'); //свой вариант цвета
		var imgStep = $('.imgradio-step4');
		var inputChanges2 = $('input[name="step55"]'); // свой город
		var radioInputsCity = $('input[name="step5"]');

		console.log(sizes);
		if(inputChanges.val() !== '') {
			console.log('условие цвет');
			for(i = 0; i < radioInputsColor.length; i++) {
					$(radioInputsColor[i]).checked = false;
					$(radioInputsColor[i]).prop('disabled', true);
					$(imgStep).css('opacity', '0');
					
			}
		} else {
				for(i = 0; i < radioInputsColor.length; i++){
					$(radioInputsColor[i]).checked = false;
					$(radioInputsColor[i]).prop('disabled', false);
					$(imgStep).css('opacity', '1');
				}
		}

		// if(inputChanges2.val() !== '') {
		// 	console.log('условие размер');
		// 	for(i = 0; i < inputChanges2.length; i++) {
		// 			$(radioInputsCity[i]).checked = false;
		// 			$(radioInputsCity[i]).prop('disabled', true);
		// 	}
		// } else {
		// 		for(i = 0; i < inputChanges2.length; i++){
		// 			$(radioInputsCity[i]).checked = false;
		// 			$(radioInputsCity[i]).prop('disabled', false);
		// 		}
		// }

		$('.btn-next-container').addClass('btn-next-container_active');
		$('.btn-next').addClass('btn-next_active btn-shine');

	});

	

/// ПРОВЕРКА И ОТПРАВКА ФОРМЫ ================================

	$('.portable-test-wrapper').each(function(index, el) {
		$(el).validate({
			rules:{
				"email": {required:true}
			},
			submitHandler: function(form){
				$(form).ajaxSubmit({
					type: 'POST',
					url: 'mail.php',
					success: function() {
						testSlider.goToSlide( $('.step-slide').length - 1 );
						$('.header-line').slideUp(300);
						$('.progress-line').slideUp(300);
						alert('done!');
					}
				});
			}
		});
	});
});
