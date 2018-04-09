
/*
	Function url() - Переадресация по URL.
	string @address - URL Адрес куда перенаправить пользователя.
	boolean @method - false открывает в том же окне, true в новом окне, по умолчанию в этом окне.
*/

function url(address, method) {
    switch (method) {
        case true:
            window.open(address, '_blank');
            break;
        case false:
            window.open(address, '_self');
            break;
        default:
            window.open(address, '_self');
            break;
    }
}

/*
	Function setData() - Сохраняет информацию в локальное хранилище.
	string @key - Индификатор сохраняймой информации.
	string, int, boolean @value - Сохраняймое значение.
*/

function setData(key, value) {
    localStorage.setItem(key, value);
    return true;
}

/*
	Function getData() - Выводет информацию из локального хранилища.
	string @key - Индификатор сохраненной информации.
*/

function getData(key) {
    return localStorage.getItem(key);
}

/*
	Function feedback() - Отправка данных с помощью Ajax (POST), с формы обратной связи.
	string @id - Индификатор формы.
*/

function feedback(id) {
	$.post(
        '/feedback'+window.location.search, //Адерес отправки данных методом POST.
        $('#'+id).serializeArray(), //Берем данные с формы.
        function(data) {
            if(data.result){
                try {
                    yaCounter47034639.reachGoal(id);
                } catch (e) {
                    console.log(1);
                }
            	/*if(id=='form4'){
            		$('#'+id).css({'display':'none'});
            		$('#warn').css({'display':'none'});
            		$('#'+id+'text2').css({'display':'inline-block', 'margin':'50px 0;'});
            		$('#'+id+'text2').addClass('box6 boxm elems');
            		$('#'+id+'text2').html('<div style="text-align: center;color: #cf9572;font-family: Bold;line-height: 1;font-size: 30px;">Спасибо, ваша заявка #'+data.data.id+'.</div><br><p style="text-align: center;color: #fff;font-family: Bold;line-height: 1;font-size: 20px;margin:10px 0 40px;">В скором времени мы свяжимся с Вами.</p>');
            	}else{
                	$('#'+id+'text').html('<h3 style="text-align: center;">Спасибо, ваша заявка #'+data.data.id+'.</h3><br><h4 style="text-align: center;margin: 0;padding: 10px 0;">В скором времени мы свяжимся с Вами.</h4>');
                	$('#'+id+'text2').html('<div style="text-align: center;color: #cf9572;font-family: Bold;line-height: 1;font-size: 30px;">Спасибо, ваша заявка #'+data.data.id+'.</div><br><p style="text-align: center;color: #fff;font-family: Bold;line-height: 1;font-size: 20px;margin:10px 0 40px;">В скором времени мы свяжимся с Вами.</p>');
            	}*/

                switch (id) {
                    case 'form1':
                            $('#'+id+'text').html('<div class="remodaltitle"><h3 style="text-align: center;">Спасибо, ваша заявка #'+data.data.id+'.</h3><br><h4 style="text-align: center;margin: 0;padding: 10px 0;">В скором времени мы свяжимся с Вами.</h4></div>');
                        $('.active-modal').addClass('po-fix');
                        break;

                    case 'form2':
                            $('#'+id+'text').html('<div class="remodaltitle"><h3 style="text-align: center;">Спасибо, участие забронировано!</h3><br><h4 style="text-align: center;margin: 0;padding: 10px 0;">В скором времени мы свяжемся с Вами.</h4></div>');
                            $('#'+id+'text2').html('<div style="text-align: center;color: #cf9572;font-family: Bold;line-height: 1;font-size: 30px;">Спасибо, участие забронировано!</div><br><p style="text-align: center;color: #fff;font-family: Bold;line-height: 1;font-size: 20px;margin:10px 0 40px;">В скором времени мы свяжемся с Вами.</p></div>');
                        $('.active-modal').addClass('po-fix');
                        break;

                    case 'form6':
                            $('#'+id+'text').html('<div class="remodaltitle"><h3 style="text-align: center;">Спасибо!</h3><br><h4 style="text-align: center;margin: 0;padding: 10px 0;">В скором времени с Вами свяжутся наши специалисты.</h4></div>');
                            $('#'+id+'text2').html('<div class="remodaltitle"><div style="text-align: center;color: #cf9572;font-family: Bold;line-height: 1;font-size: 30px;">Спасибо!</div><br><p style="text-align: center;color: #fff;font-family: Bold;line-height: 1;font-size: 20px;margin:10px 0 40px;">В скором времени с Вами свяжутся наши специалисты.</p></div>');
                        $('.active-modal').addClass('po-fix');
                        break;

                    case 'form3':
                            $('#'+id+'text').html('<div class="remodaltitle"><h3 style="text-align: center;">Спасибо!</h3><br><h4 style="text-align: center;margin: 0;padding: 10px 0;">В скором времени с Вами свяжутся наши специалисты.</h4>');
                            $('#'+id+'text2').html('<div class="remodaltitle"><div style="text-align: center;color: #cf9572;font-family: Bold;line-height: 1;font-size: 30px;">Спасибо!</div><br><p style="text-align: center;color: #fff;font-family: Bold;line-height: 1;font-size: 20px;margin:10px 0 40px;">В скором времени с Вами свяжутся наши специалисты.</p></div>');
                        $('.active-modal').addClass('po-fix');
                        break;

                    case 'form4':
                            $('#'+id).css({'display':'none'});
                            $('#warn').css({'display':'none'});
                            $('#'+id+'text2').css({'display':'inline-block', 'margin':'50px 0;'});
                            $('#'+id+'text2').addClass('box6 boxm elems');
                            $('#'+id+'text2').html('<div class="remodaltitle"><div style="text-align: center;color: #cf9572;font-family: Bold;line-height: 1;font-size: 30px;">Спасибо!</div><br><p style="text-align: center;color: #fff;font-family: Bold;line-height: 1;font-size: 20px;margin:10px 0 40px;">В скором времени с Вами свяжется наш дизайнер Никита.</p></div>');
                        $('.active-modal').addClass('po-fix');
                        break;

                    case 'form5':
                            $('#'+id+'text').html('<div class="remodaltitle"><h3 style="text-align: center;">Спасибо, участие забронировано!</h3><br><h4 style="text-align: center;margin: 0;padding: 10px 0;">В скором времени мы свяжемся с Вами.</h4></div>');
                            $('#'+id+'text2').html('<div class="remodaltitle"><div style="text-align: center;color: #cf9572;font-family: Bold;line-height: 1;font-size: 30px;">Спасибо, участие забронировано!</div><br><p style="text-align: center;color: #fff;font-family: Bold;line-height: 1;font-size: 20px;margin:10px 0 40px;">В скором времени мы свяжемся с Вами.</p></div>');
                        $('.active-modal').addClass('po-fix');
                        break;

                    case 'AndreyYeleseev':
                            $('#'+id+'text').html('<div class="remodaltitle"><h3 style="text-align: center;">Спасибо!</h3><br><h4 style="text-align: center;margin: 0;padding: 10px 0;">В скором времени с Вами свяжется наш руководитель.</h4></div>');
                        $('.active-modal').addClass('po-fix');
                        break;

                    default:
                            $('#'+id+'text').html('<div class="remodaltitle"><h3 style="text-align: center;">Спасибо!</h3><br><h4 style="text-align: center;margin: 0;padding: 10px 0;">В скором времени с Вами свяжется наш сотрудник.</h4></div>');
                        $('.active-modal').addClass('po-fix');
                        break;
                }
                

            }
            if(!data.result){
                for (var i = data.data.input.length - 1; i >= 0; i--) {
                    $('#'+id+' input[name="FeedbackForm['+data.data.input[i]['key']+']"]').addClass("error");
                }

                $('input.error').click(function(){
                    $(this).removeClass("error");
                });
            }
        }, 'json'
    );
}

function interview(){
    $.post(
        '/interview', //Адерес отправки данных методом POST.
        $('#interview').serializeArray(), //Берем данные с формы.
        function(data) {
            if(data.result){
                try {
                    yaCounter47034639.reachGoal('interview');
                } catch (e) {
                    console.log(1);
                }
                //$("#windows").removeClass("modal_opros");
                $("#windows").addClass("modal_call-back2");
                $("#interviewtext").removeClass("step step_6");
                $("#interviewtext").addClass("box form");
                        $('.active-modal').addClass('po-fix');
                $('#interviewtext').html('<h3 style="text-align: center;">Спасибо, скидка забронирована!</h3><br><h4 style="text-align: center;margin: 0;padding: 10px 0;">Дождитесь нашего звонка или позвоните сами по бесплатному телефону:</h4><h3 style="text-align: center;">8 (800) 200-55-81</h3>');
            }
            if(!data.result){
                for (var i = data.data.input.length - 1; i >= 0; i--) {
                    $('#interview input[name="'+data.data.input[i]['key']+'"]').addClass("error");
                }
                
            }
        }, 'json'
    );
}