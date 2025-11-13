$(document).ready(function () {

    $('.banner .close').click(function () {
        $('.banner').animate({
            height: 0,
            opacity: 0
        }, 'slow', function () {
            $(this).hide();
        });
    });

    $('.dropdown').click(function (event) {
        $(this).find('.submenu').toggle();
    });

});