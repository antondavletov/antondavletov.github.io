$(document).ready(function(){

	$('input[name="phone"]').mask('+7 (999) 999-99-99');

	var testSlider1 = $('.test-slider-item').bxSlider({
		mode: 'fade',
		infiniteLoop: false,
		speed: 0,
		adaptiveHeight: true,
		adaptiveHeightSpeed: 0,
		touchEnabled: false,
		pager: false,
		nextSelector: '.btn-next-container',
		nextText: '<div class="btn-next btn-next_active">Заказать</div>',
		prevSelector: '.btn-prev-container',
		prevText: '<div class="btn-prev"><span> < Назад</span></div>',
		onSliderLoad: function (currentIndex) {
			// первоначальные стили
			
		},
		onSlideAfter: function (slideElement, oldIndex, newIndex) {
			// активация кнопок
			if (newIndex == 1) {
			$('.btn-next-container').css('display', 'none');
			$('.btn-prev-container').css('display', 'block');
			} else {
				$('.btn-next-container').css('display', 'block');
			$('.btn-prev-container').css('display', 'none');
			}
			// $('.step-title__item').eq(oldIndex).removeClass('step-title__item-active');
			// $('.step-title__item').eq(newIndex).addClass('step-title__item-active');

			// изменение полосы загрузки

			// изменение шага

			// изменение заголовка в полосе загрузки

			// console.log(toTopDoc);

		}
    });
    

});