$(document).ready(function () {

    $(document).on('click', '.leftBtn', function () {
        $('.leftMenu').toggleClass('hide');
        $('.content').toggleClass('leftOff');
        $('.subMenuWrap').toggleClass('left');
        $(this).toggleClass('on');

        $('.subMenuWrap').hasClass('left');
        if($(this).hasClass('on')) {
            $("#contentWrap").focus();
        }
    })

    $(document).on('click', '.leftMenu .dept1 > li > a', function () {


        if ($(this).parents('.leftMenu .dept1 > li').hasClass('on')) {
            $(this).parents('.leftMenu .dept1 > li').removeClass('on');
            $(this).find("span").text("펼치기");

        } else {
            $('.leftMenu .dept1 > li').removeClass('on')
            $(this).parents('.leftMenu .dept1 > li').addClass('on');
            $(this).find("span").text("접기");
        }
    });

    $(document).on('click', '.leftMenu .dept2 > li > a', function () {

        if ($(this).parents('.leftMenu .dept2 > li').hasClass('on')) {
            $(this).parents('.leftMenu .dept2 > li').removeClass('on');
            $(this).find("span").text("펼치기");
        } else {
            $('.leftMenu .dept2 > li').removeClass('on')
            $(this).parents('.leftMenu .dept2 > li').addClass('on');
            $(this).find("span").text("접기");
        }
    });

    $(document).on('click', '.leftMenu .dept3 > li > a', function () {

        if ($(this).parents('.leftMenu .dept3 > li').hasClass('on')) {
            $(this).parents('.leftMenu .dept3 > li').removeClass('on');
            $(this).find("span").text("펼치기");
        } else {
            $('.leftMenu .dept3 > li').removeClass('on')
            $(this).parents('.leftMenu .dept3 > li').addClass('on');
            $(this).find("span").text("접기");
        }
    });

    $(document).on('click', '.leftMenu .dept2 > li > a', function () {

        if ($(this).hasClass('on')) {
            $(this).removeClass('on');
        } else {
            $('.leftMenu .dept2 > li > a').removeClass('on');
            $(this).addClass('on');
        }
    });

    $(document).on('click', '.leftMenu .dept3 > li > a', function () {

        if ($(this).hasClass('on')) {
            $(this).removeClass('on');
        } else {
            $('.leftMenu .dept3 > li > a').removeClass('on');
            $(this).addClass('on');
        }
    });

    $(document).on('click', '.leftMenu .dept4 > li > a', function () {

        if ($(this).hasClass('on')) {
            $(this).removeClass('on');
        } else {
            $('.leftMenu .dept4 > li > a').removeClass('on')
            $(this).addClass('on');
        }
    });

})
