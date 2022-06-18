$(document).ready(function () {

    $(document).on('focusin', '.header .nav > ul > li', function () {
        $(this).children('.depth2').addClass('on');
    });

    $(document).on('focusout', '.depth2 > ul > li:last-child', function () {
        $('.depth2').removeClass('on');
    });

    $(document).on('mouseenter', '.header .nav > ul > li', function () {
        $('.depth2').removeClass('on');
        $(this).children('.depth2').addClass('on');
    });

    $(document).on('focusin', '.header .logo', function () {
        $('.depth2').removeClass('on');
    });

    $(document).on('mouseleave', '.depth2', function () {
        $(this).removeClass('on');
    });

    // 포커스, 호버시 언더라인 색(포커스)
    $(document).on('mouseenter', '.header .nav .depth2 li a', function () {
        $(this).addClass('on');
    });

    $(document).on('mouseleave', '.header .nav .depth2 li a', function () {
        $(this).removeClass('on');
    });

    $(document).on('focusin', '.header .nav .depth2 li a', function () {
        $(this).addClass('on');
    });

    $(document).on('focusout', '.header .nav .depth2 li a', function () {
        $(this).removeClass('on');
    });
});
