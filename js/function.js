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
