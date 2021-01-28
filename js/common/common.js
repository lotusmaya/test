/* ---------------------------------
 PageTopButton/SmoothScroll
 --------------------------------- */
$(function(){
    /* smoothScroll */
    $('a[href^="#"]').on('click', function () {
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop: position}, 300, "swing");
        return false;
    });

    /* pageTop */
    var topBtn = $('#pageTop');

    $(window).scroll(function () {
	    if ($(this).scrollTop() > 200) {
		    topBtn.fadeIn();
	    } else {
		    topBtn.fadeOut();
	    }
    });
})

/* ---------------------------------
 Slider
 --------------------------------- */
 $(document).on('ready', function() {
    $(".slider_trigger").slick({
        dots: true,
        infinite: true
    });
});

/* ---------------------------------
 Accordion
 --------------------------------- */
$(function(){
    $('.accordion_trigger').on('click', function(){
        if($(this).hasClass('open')) {
            $(this).removeClass('open').addClass('close');
        }else{
            $(this).removeClass('close').addClass('open');
        }
        $(this).next().slideToggle(200);
    });
});

/* ---------------------------------
 navigation
 --------------------------------- */
$(function() {
    var pageTop = $('html , body');
    var secTopArr = new Array();

    //各セクションのオフセット取得と、aタグの挿入
    $(window).on('load',function(){
        var i = 1;

        $('.sec').each(function (){
            var id = '#sec' + i;

            $(this).attr('id', 'sec' + i);
            secTopArr[i] = $(this).offset().top;
            $('.nav_list').append('<a class="nav' + i + '" href="' + id + '"><p class="balloon"></p></a>');
            i = i + 1;
        });

        //hoverで各セクションのタイトルを表示
        $('.nav_list a').hover(function(){
            var id = $(this).attr('href');
            var title = $(id + ' .hd_title');
            var txt = title.text();

            $(this).find('p').text(txt);
        });

        //スムーススクロール
        $('a[href^="#"]').on('click', function () {
            var href = $(this).attr("href");
            var target = $(href == "#" || href == "" ? 'html' : href);
            var position = target.offset().top;

            $("html, body").animate({scrollTop: position}, 300, "swing");
            return false;
        });
    });

    //スクロールイベント
    $(window).scroll(function () {
        for (var i = secTopArr.length; i>0; i--) {
            if ($(window).scrollTop() > secTopArr[i] - 100) {
                $('.nav_list a').removeClass('active');
                $('.nav' + i ).addClass('active');
                break;
            }
        }
    });
});
