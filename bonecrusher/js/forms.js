$(document).ready(function(){

	


$('body').find('.form_phone').each(function() {
	$(this).validate({
		errorPlacement: function(error, element) {},
		debug: false,
		rules: {
			'phone':{
				required: true,	
				phones: true,				
			},	
		},
		submitHandler: function(form) {
			sendMail(form,'');
		
		}
	});
});
$('body').find('.form_bottom').each(function() {
	$(this).validate({
		errorPlacement: function(error, element) {},
		debug: false,
		rules: {
			'phone':{
				required: true,		
				phones: true,			
			},	
			'email':{
				email: true,					
			},
		},
		submitHandler: function(form) {
			sendMail(form,'');
		
		}
	});
});


jQuery.validator.addMethod(
	"phones", 
	function(value, element) {
		return this.optional(element) || /^\+7\ \([0-9]{3}\)\s[0-9]{3}-[0-9]{2}\-[0-9]{2}/.test(value);
	}, 
	"Неверно указан телефон"
);  


// function sendMail(form, message) {   
//     var ya = $(form).attr('data-ya');
//     $.ajax({
//         type: "POST",
//         url: "send.php",
//         data: $(form).serialize(),
//         beforeSend: function() {
//         },
//         success: function(html) {	
//             //alert(ya);
//             $('.popup').fadeOut(500);
//             $('.popup_bg').fadeIn(800);
//             formPosition('.popup-message'+message);
//             $('.popup-message'+message).fadeIn(500);			
//         }
//     });		
// }
	

	
});
	
