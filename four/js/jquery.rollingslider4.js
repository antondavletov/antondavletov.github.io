



(function($,window,document,undefined) {
  var argFn = function(ele,obj){
    this.$element = ele,
    this.defaults = {
        showArea:"#JslideWrap",
        prev:"#Jprev",
        next:"#Jnext",
        moveSpeed: 400,
        autoPlay:false,
        stay: 5000
    },
    this.args = $.extend({}, this.defaults, obj);
  };
  $.fn.RollingSlider = function(arg) {
    var tesQ = $('.slide-wrap li');
    var _instance = new argFn(this, arg);
    // Парам объявл функц
    var $showArea = $(_instance.args.showArea),
        $showArea_li = $(_instance.args.showArea+">li"),
        $prev =  $(_instance.args.prev),
        $next =  $(_instance.args.next),
        show_len = $showArea_li.length,
        column = 4,
        direction = "next",
        timer,
        init_arr = [],
        item_arr = [],  // Сохраняет все li
        flag = 1;
        backs = ['red', 'yellow', 'blue'];
    // Стиль хранения li
    function slider() {
      for (var i = 0; i < show_len; i++) {
        var $cur_li = $showArea_li.eq(i); // Текущая картинка
   
        if (i < column) { //Запись информации о начальном состоянии для 5 изображений
          init_arr[i] = {
            left: $cur_li.position().left,
            marginTop: $cur_li.css("margin-top"),
            opacity: $cur_li.css("opacity"),
            transition: $cur_li.css("transition"),
            zIndex: $cur_li.css("z-index"),
            width: $cur_li.width(),
            height: $cur_li.height()
          };
          $cur_li.css("left", init_arr[i].left);
        }
        else {
          $cur_li.css("left", init_arr[column - 1].left)
        }
        item_arr.push($cur_li); 
      }

      if (tesQ.hasClass('first')) {
        $(tesQ).toggleClass('active');
      } else {
        $(tesQ).removeClass('active');
      }
    }
    //Имитировать клики и установить мышь, чтобы покинуть указанную область и возобновить автоматическую карусель
    function simulate() {
      $next.click();
    }
    function autoPlay() {
      timer = setInterval(simulate, _instance.args.stay);
    }
    function clearTimer(ele){
      $(ele).bind("mouseenter",
        function() {
          clearInterval(timer)
        }).bind("mouseleave",
        function() {
          if(_instance.args.autoPlay===true){
            autoPlay();
          }
        });
    }
    // Стрелки
    function arrows() {
      clearTimer(_instance.args.showArea);
      clearTimer(_instance.args.prev);
      clearTimer(_instance.args.next);
      $next.bind("click",function() {
        if (flag) {
          direction = "next";
          flag = 0;
          animation();
        }
      });
      $prev.bind("click",function() {
        if (flag) {
          direction = "prev";
          flag = 0;
          animation();
        }
      });
    }
    //Анимация
    function animation() {
      if (direction == "next") { //След
        for (i = 0; i < column; i++) {
          var prevStyleObj = init_arr[i - 1];
          if (i == 0) {
            item_arr[i].animate({
              opacity: opacity = 0,
            }, _instance.args.moveSpeed);
            tesQ.toggleClass('active');
          } else {
            item_arr[i].css("z-index", prevStyleObj.zIndex).animate({
              left: prevStyleObj.left,
              marginTop: prevStyleObj.marginTop,
              opacity: prevStyleObj.opacity,
              transition: prevStyleObj.transition,
              width: prevStyleObj.width,
              height: prevStyleObj.height
            }, _instance.args.moveSpeed);
          }
        }
        var lastStyleObj = init_arr[column - 1]; // Последний объект стиля
        if (item_arr.length != column) { //Может быть больше чем
          item_arr[column].css({
            left: lastStyleObj.left,
            marginTop: lastStyleObj.marginTop,
            opacity: lastStyleObj.opacity,
            transition: lastStyleObj.transition,
            width: lastStyleObj.width,
            height:lastStyleObj.height,
            "z-index": lastStyleObj.zIndex
          }).fadeIn(_instance.args.moveSpeed,function() {
            flag = 1;
          })
        } else {  // или равен
          item_arr[0].stop().css({
            left: lastStyleObj.left,
            marginTop: lastStyleObj.marginTop,
            opacity: lastStyleObj.opacity,
            transition: lastStyleObj.transition,
            width: lastStyleObj.width,
            height:lastStyleObj.height,
            "z-index": lastStyleObj.zIndex
          }).fadeIn(_instance.args.moveSpeed,function() {
            flag = 1;
          })
        }
        item_arr.push(item_arr.shift());
        // Нужное изображение по требованию
        lazyLoad(4);
      } else {    //Нажать назад
        for (i = 0; i < column; i++) {
          var nextStyleObj = init_arr[i + 1];
          if (i == column - 1) {
            item_arr[i].css("z-index", 0).animate({
              opacity: opacity = 0,
            }, _instance.args.moveSpeed);
            tesQ.addClass('active');
          } else {
            item_arr[i].css("z-index", nextStyleObj.zIndex).animate({
              left: nextStyleObj.left,
              marginTop: nextStyleObj.marginTop,
              opacity: nextStyleObj.opacity,
              transition: nextStyleObj.transition,
              width: nextStyleObj.width,
              height:nextStyleObj.height
            },_instance.args.moveSpeed)
          }
        }
        var firstStyleObj = init_arr[0];
        console.log(firstStyleObj);
        item_arr[item_arr.length - 1].stop().css({
          left: firstStyleObj.left,
          marginTop: firstStyleObj.marginTop,
          opacity: firstStyleObj.opacity,
          transition: firstStyleObj.transition,
          width: firstStyleObj.width,
          height:firstStyleObj.height,
          "z-index": firstStyleObj.zIndex
        }).fadeIn(_instance.args.moveSpeed,function() {
          flag = 1;
        });
        item_arr.unshift(item_arr.pop());
        //Загружает левое по требованию
        lazyLoad(0);
      }
    }
    // Нагрузк по треб
    function lazyLoad(index){
      var $nextOne = item_arr[index].find('img');
      var $realSrc = $nextOne.data('src');
      var hasSrc = item_arr[index].find('img').attr('src');
      if (!hasSrc) {
        $nextOne.attr('src', $realSrc);
      };
    }
    // Инициалиц
    function init() {
      slider();
      arrows();
      if(_instance.args.autoPlay===true){
        autoPlay();
      }
    }
    init();
  }
})($,window,document);