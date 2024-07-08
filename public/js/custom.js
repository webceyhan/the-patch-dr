/*------------------------------------------
Project:    HandyMan
Author:     P. Roy
URL:        http://www.handyman.proy.info/
Version:    1.0
Last change:    20/02/2015
------------------------------------------*/

/* Smooth Scrolling -------------------- */
$(function () {
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body')
            .stop()
            .animate(
                {
                    scrollTop: $($anchor.attr('href')).offset().top,
                },
                1500,
                'easeInOutExpo'
            );
        event.preventDefault();
    });
});
