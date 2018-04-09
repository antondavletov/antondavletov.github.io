/* main.js */
'use strict';

$(document).ready(function(){
	$('body').removeClass("bodyload");

	$('.input-phone').mask("+7 (999) 999-99-99");

	$(".go_to").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html, body').animate({ scrollTop: destination }, 600);
		return false;
	});


	function scrollAnimate() {
		$(".animateon").each(function(index, el) {
			if ($(el).offset().top < $(document).scrollTop() + $(window).height() + 100) {
				$(el).addClass("fade");
			} else {
				$(el).removeClass("fade");
			}
		});
	}

	if ($(".animateon").length) {
		$(document).scroll(function(event) {
			scrollAnimate();
		});
		scrollAnimate();
	};

	

	$('.ripplelink').each(function() {
		var $this = $(this);

		var ink, d, x, y;

		setInterval(function() {
			if($this.find(".ink").length === 0){
				$this.prepend("<span class='ink'></span>");
			}

			ink = $this.find(".ink");
			ink.removeClass("animate");

			if(!ink.height() && !ink.width()){
				d = Math.max($this.outerWidth(), $this.outerHeight());
				ink.css({height: d, width: d});
			}

			x = Math.round(Math.random()*ink.width() - ink.width()/2);
			y = Math.round(Math.random()*ink.height() - ink.height()/2);

			ink.css({top: y+'px', left: x+'px'}).addClass("animate");
		}, 3000)
	});



	$.fn.rotator = function (options) {
		var $els = $(this);
		$els.each(function () {
			var $this = $(this);
			var wordsSpeedAttr = $this.attr('data-rotator-words-speed');
			var lettersSpeedAttr = $this.attr('data-rotator-letters-speed');
			var wordsAttr = $this.attr('data-rotator-words');
			var infinitAttr = $this.attr('data-rotator-infinit');
			var settings = $.extend({
      // These are the defaults.
      wordsSpeed: wordsSpeedAttr !== '' && parseInt(wordsSpeedAttr) != NaN ? parseInt(wordsSpeedAttr) : 3000,
      lettersSpeed: lettersSpeedAttr !== '' && parseInt(lettersSpeedAttr) != NaN ? parseInt(lettersSpeedAttr) : 100,
      words: wordsAttr != '' ? wordsAttr.split(',') : [],
      infinit: infinitAttr !== '' && (infinitAttr == 'true' || infinitAttr == 'false') ? infinitAttr : true
  }, options);
			$this.addClass('rotating');

			var words = settings.words;
			var index = 0;
			var letter = 0;
			var rotator = setInterval(function () {
				if (index == words.length) {
					if (settings.infinit == true || settings.infinit == 'true') {
						index = 0;
					} else {
						clearInterval(rotator);
						return;
					}
				}

				var word = words[index];
				var wordLength = word.length;
				$this.text($this.text() + word.charAt(letter));
				letter++;
				if (letter == word.length) {
					var tw = setTimeout(function () {
						var si = setInterval(function () {
							wordLength--;
							if (settings.infinit == true || settings.infinit == 'true' || index !== words.length - 1) {
								$this.text(word.slice(0, wordLength));
							}
							if (wordLength == 0) {
								clearInterval(si);
								index++;
								letter = 0;
								clearTimeout(tw);
							}
						}, settings.lettersSpeed);
					}, settings.wordsSpeed);
				}
			}, settings.lettersSpeed);
		});
	};
	$(function () {
		$('.rotator').rotator();
	});




	// $("#form1,#form2,#form3").submit(function() { 
	// 		var th = $(this);
	// 		var h1page = $('h1').text();
	// 		$('input[name=hidden]').val(h1page);
	// 		$.ajax({
	// 			type: "POST",
	// 			url: "mail.php", 
	// 			data: th.serialize(),
	// 		            beforeSend: function(data) {
	// 		                $('.lity-close').trigger('click', '[data-lity-close]', function(e) {
	// 		                    if ($(e.target).is('[data-lity-close]')) {
	// 		                        close();
	// 		                    }
	// 		                });
	// 		                $('#opoveshenie').fadeIn();
	// 		            },
	// 		            success: function(data) {
	// 		                if (data['error']) {
	// 		                    alert(data['error']);
	// 		                } else {
	// 		                    $(".preloader p").fadeIn();
	// 		                }
	// 		            },
	// 		            error: function(xhr, ajaxOptions, thrownError) {
	// 		                alert(xhr.status);
	// 		                alert(thrownError); alert(13);
	// 		            },
	// 		            complete: function(data) {
	// 		                setTimeout(function() {
	// 		                    $('#opoveshenie').fadeOut();
	// 		                }, 1000);
	// 		            }
	// 		}).done(function() {
	// 			setTimeout(function() {
	// 				th.trigger("reset");
	// 			}, 1000);
	// 		});
	// 		return false;
	// 	});

})