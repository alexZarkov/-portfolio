$(document).ready(function () {
    new WOW().init();

    $('html').addClass('js');


    $(".general-slider").owlCarousel({
        navigation: true,
        singleItem: true,
        transitionStyle: "fade",
        navigation: false,
        navigationText: false,
        autoPlay: 5000,
        navigation: true,
        navigationText: false,
        pagination: false
    });


    // $('.clockTimer').myClock({
    //     separTime: ' ',
    //     separDate: ' ',
    //     dateOff: 1,
    //     cookie: 1,
    //     endDate: '2016, 11, 13',
    //     circle: 1
    // });

    var infoDelovoyRazrab = 'Угомонись, Повелитель JS! ';
    var infoDelovoyRazrab2 = 'Консоль только для разработчика!';
    var infoDelovoyRazrab3 = 'Если тебе что-то нужно, обратись ко мне на Вы! Обсудим твой вопрос, странник! Меня можешь найти по адресу: vk.com/volosunovmike';
    console.log('%c%s', 'color: red; font: 2rem/1 Tahoma; text-shadow:0px 1px #000; font-weight:bold', infoDelovoyRazrab);
    console.log('%c%s', 'color: red; font: 2rem/1 Tahoma; text-shadow:0px 1px #000; font-weight:bold', infoDelovoyRazrab2);
    console.log('%c%s', 'color: #000; font: 1rem/1 Tahoma; ', infoDelovoyRazrab3);

    $(".scroll, .main_link, .arrow").click(function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top - 0 + "px"
        }, {
            duration: 700
        });
    });



    $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',
        fixedContentPos: true,
        fixedBgPos: true
    });
    $('.image-link').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom',
        fixedContentPos: true,
        fixedBgPos: true,
        zoom: {
            enabled: true,
            duration: 300,
            easing: 'ease-in-out',
            opener: function (openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });


    $('.btn_buy').on('click', function () {
        currentProduct = $(this).closest('.item').find('.title').text();
        currentProductHair = $(this).closest('.container').find('h2').text();
        if (currentProduct != "") {
            $('.titleProduct').val('Покупка товара: ' + currentProduct);
        } else {
            $('.titleProduct').val('Покупка товара: ' + currentProductHair);
        }
    });
    // $(".fancybox").fancybox();


    $(window).scroll(function () {
        customScroll();
    });
    customScroll();

    function customScroll() {
        if ($(window).scrollTop() > 50) {
            if ($('html').hasClass('mobile')) {
                $("header").addClass('fixedMobile');
            }
            $("header").addClass('fixed');
            $(".scroll_up").addClass('active');
        } else {
            if ($('html').hasClass('mobile')) {
                $("header").removeClass('fixedMobile');
            }
            $("header").removeClass('fixed');
            $(".scroll_up").removeClass('active');
        }
    }

    $('.cmn-toggle-switch').on('click', function () {
        $(this).toggleClass('active');
        $('.nav').toggleClass('active');
        $('header').toggleClass('active');
    });
    $('.nav .menu li a').on('click', function () {
        $('.nav').toggleClass('active');
        $('.cmn-toggle-switch').toggleClass('active');
        $('header').toggleClass('active');
    });

    $(function () {
        $('.scroll_up').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 500);
            return false;
        })
    })



    // scroll + fixed menu
    $(window).scroll(function () {
        if ($(this).scrollTop() > 2000000) {
            $(".header").addClass('fixed');
        } else {
            $(".header").removeClass('fixed');
        }
    });



    //  var controls = {
    //        video: $("#myvideo"),
    //        playpause: $("#playpause")                 
    //    };

    //    var video = controls.video[0];

    //    controls.playpause.click(function(){
    //        if (video.paused) {
    //            video.play();
    //            $(this).text("Pause");    
    //        } else {
    //            video.pause();
    //            $(this).text("Play");
    //        }

    //        $(this).toggleClass("paused"); 
    //    });
    // video.addEventListener("ended", function() {
    // 	video.pause();
    // 	controls.playpause.text("Play");
    // 	controls.playpause.toggleClass("paused");
    // });
    // video.addEventListener("play", function() {
    // 	controls.playpause.text("Pause");
    // 	controls.playpause.toggleClass("paused");
    // });
    // video.addEventListener("pause", function() {
    // 	controls.playpause.text("Play");
    // 	controls.playpause.toggleClass("paused");
    // });
    // controls.video.click(function() {
    // 	controls.togglePlayback();
    // });

    // $('#playpause').click(function(){
    // 	console.log('myvideo click');
    // 	if($('#playpause').text()=='Play') {
    // 		console.log('playpause Play');
    // 		$('#playpause').css('background','url(img/video_n.png)  no-repeat scroll center ');
    // 		$('#playpause').css('background-size','100% 100%;');
    // 	}
    // 	else {
    // 		console.log('playpause Pause');
    // 		$('#playpause').css('background','none')
    // 	}
    // });


    var usernameRequired = "Пожалуйста, введите своё имя",
        usernameMinLength = "Введите верное имя",
        userphoneRequired = "Пожалуйста, введите свой телефон",
        userphoneMinLength = "Введите верный телефон",
        usercommentRequired = "Пожалуйста, введите свой комментарий",
        usercommentMinLength = "Напишите развернутый ответ",
        usermailRequired = "Пожалуйста, введите свой E-mail",
        usermailMinLength = "Введите настоящий E-mail",
        usermailValid = "Пожалуйста, введите настоящий E-mail";
//        errorBox = "#messageBox",
//        wrapperItem = "li";
    $("#mainForm").validate({
        rules: {
            username: {
                required: true,
                minlength: 2
            },
            userphone: {
                required: true,
                minlength: 10
            }
          
        },
        messages: {
            username: {
                required: usernameRequired,
                minlength: usernameMinLength
            },
            userphone: {
                required: userphoneRequired,
                minlength: userphoneMinLength
            },
            usercomment: {
                required: usercommentRequired,
                minlength: usercommentMinLength
            },
            usermail: usermailValid,
        }
//        wrapper: wrapperItem
    });


    maskedInput();

    function maskedInput() {
        $('.inpTel').mask('+38(099) 999 99 99');
    }

   
    
    $('.services .item').addClass('animated');

    $('.services .item.animated').hover(
        function () {
            $(this).addClass('pulse'); // Добавляем класс 
        },
        function () {
            $(this).removeClass('pulse'); // Убираем класс
        }
    )

//    // .ourServices .item 
//$(".services .item").addClass("animated"); 
//// $(".ourServices .item").mouseover(); 
//// $(".ourServices .item").mouseout(); 
//
//$(".services .item").mouseover(function(){ 
//$(this).addClass('pulse' ); 
//console.log('навел', this); 
//}); 
//
//$(".services .item").mouseout(function(){ 
//$(this).removeClass('pulse'); 
//console.log('увел', this); 
//});


    $(".fancybox").fancybox({
        maxWidth: 1000,
        maxHeight: 600,
        fitToView: false,
        width: '90%',
        height: '90%',
        padding: 0,
        overlayShow: false,
        scrolling: 'no'
    })

    ;

$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({ 
disableOn: 700, 
type: 'iframe', 
mainClass: 'mfp-fade', 
removalDelay: 160, 
preloader: false, 
fixedBgPos: true, 
fixedContentPos: true 
});


  $(function() {

    $.fn.myTabs = function(options) {
        options = options || {};
        var ACTIVE_CLASS = options.activeClass || 'active';
        var NAV_SELECTOR = options.navSelector || '.tab-nav li';
        var CONTENT_SELECTOR = options.contentSelector || '.tab-content .content';
        var defaultIndex = typeof options.defaultIndex == 'number' ? options.defaultIndex : 0;


        var lis = this.find(NAV_SELECTOR);
        var contents = this.find(CONTENT_SELECTOR);

        /* init (add active class) */
        if(!lis.hasClass(ACTIVE_CLASS))
            lis.eq(defaultIndex).addClass(ACTIVE_CLASS);
        if(!contents.hasClass(ACTIVE_CLASS))
            contents.eq(defaultIndex).addClass(ACTIVE_CLASS);
        /* *********************** */

        lis.on('click', function() {
            lis.removeClass(ACTIVE_CLASS);
            var _this = $(this);
            _this.addClass(ACTIVE_CLASS);

            contents.removeClass(ACTIVE_CLASS);
            contents.eq($(this).index()).addClass(ACTIVE_CLASS);

        });
    };
       


    $('#tab-container').myTabs({
        activeClass: 'active'
    });

});




});