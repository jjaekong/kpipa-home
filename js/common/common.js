$(document).ready(function () {

    $('#skip-navigation a').focusin(function () {
        $("#skip-navigation").addClass("active")
    })

    $('#skip-navigation a').focusout(function () {
        $("#skip-navigation").removeClass("active")
    })

    //헤더메뉴 클릭 시 해당 메뉴 선택효과
    $('.header .nav > ul > li > a').click(function () {
        $('.header .nav > ul > li > a').removeClass('on')
        $(this).addClass('on')
    })

    //상단 헤더메뉴 on/off기능
    $('.menuList li a').click(function () {
        $('.menuList li a').removeClass('on')
        $(this).addClass('on')
    })

    //좌측 서브메뉴 on/off기능
    $('.subMenuList li a').click(function () {
        $('.subMenuList li a').removeClass('on')
        $(this).addClass('on')
    })

    //왼쪽메뉴 접기/열기
    $('.subMenuToggleBtn').click(function () {
        $('.subMenuToggleWrap').hide();
        $('.subMenuOffToggle').show();
        $('.subMenu').addClass('off')
        $('.rightWrap').removeClass('toggleOn')
    })

    $('.subMenuToggleOnbtn').click(function () {
        $('.subMenuOffToggle').hide();
        $('.subMenuToggleWrap').show();
        $('.subMenu').removeClass('off')
        $('.rightWrap').addClass('toggleOn')
    })


    $('.chk_all').on('keypress', function (event) {
        if ($(this).prop('checked')) {
            if (event.which === 13) {
                $('input:checkbox').prop('checked', !$(this).prop('unchecked'));
            }
        } else {
            if (event.which === 13) {
                $('input:checkbox').prop('checked', !$(this).prop('checked'));
            }
        }
    });

    try {

        $(".selectmenu").selectmenu();
        $(".datepicker").datepicker();

    }catch(e) {

    }



    //파일 첨부시 파일명 삽입
    var fileTarget = $('.filebox .upload-hidden');
    fileTarget.on('change', function () { // 값이 변경되면

        try{

            // html 이 다른곳이 있을경우 오류발생하기 때문에 try 로 묶어준다. (기존 작업때문에 남겨둠)
            if (window.FileReader) { // modern browser
                var filename = $(this)[0].files[0].name;
            } else { // old IE
                var filename = $(this).val().split('/').pop().split('\\').pop(); // 파일명만 추출
            }
            // 추출한 파일명 삽입
            $(this).siblings('.upload-name').val(filename);

        }catch(e) {}
    });


    //모달창 닫기
    $('.layerClose').click(function () {
        $('.layerPopupBox').removeClass('active')
    })

    $('.chk_01').on('keypress', function (event) {
        if (event.which === 13) {
            $('#chk_01').prop('checked', !$(this).prop('checked'));
        }
    });

    $('.chk_02').on('keypress', function (event) {
        if (event.which === 13) {
            $('#chk_02').prop('checked', !$(this).prop('checked'));
        }
    });

    $('.chk_03').on('keypress', function (event) {
        if (event.which === 13) {
            $('#chk_03').prop('checked', !$(this).prop('checked'));
        }
    });

    $('.chk_04').on('keypress', function (event) {
        if (event.which === 13) {
            $('#chk_04').prop('checked', !$(this).prop('checked'));
        }
    });

    $('.chk_05').on('keypress', function (event) {
        if (event.which === 13) {
            $('#chk_05').prop('checked', !$(this).prop('checked'));
        }
    });

    $('.chk_06').on('keypress', function (event) {
        if (event.which === 13) {
            $('#chk_06').prop('checked', !$(this).prop('checked'));
        }
    });

    $('.chk_07').on('keypress', function (event) {
        if (event.which === 13) {
            $('#chk_07').prop('checked', !$(this).prop('checked'));
        }
    });

    $('#chkAll').click(function () {
        $('.chk_box').prop('checked', this.checked);
    });

    $('.chk_all').click(function () {
        $('.chk_box').prop('checked', this.checked);
    });

    $('.chk_all1').click(function () {
        $('.chk_box1').prop('checked', this.checked);
    });

    $('#chkAll_01').click(function () {
        $('.listAll_box').prop('checked', this.checked);
    });
    $('#chkAll_02').click(function () {
        $('.listAll_box_02').prop('checked', this.checked);
    });
    $('#chkAll_03').click(function () {
        $('.listAll_box_03').prop('checked', this.checked);
    });
    $('#chkAll_04').click(function () {
        $('.listAll_box_04').prop('checked', this.checked);
    });
    $('#chkAll_05').click(function () {
        $('.listAll_box_05').prop('checked', this.checked);
    });
    $('#chkAll_06').click(function () {
        $('.listAll_box_06').prop('checked', this.checked);
    });
    $('#chkAll_07').click(function () {
        $('.listAll_box_07').prop('checked', this.checked);
    });
    $('#chkAll_08').click(function () {
        $('.listAll_box_08').prop('checked', this.checked);
    });
    $('#chkAll_09').click(function () {
        $('.listAll_box_09').prop('checked', this.checked);
    });
    $('#chkAll_10').click(function () {
        $('.listAll_box_10').prop('checked', this.checked);
    });
    $('#chkAll_11').click(function () {
        $('.listAll_box_11').prop('checked', this.checked);
    });
    $('#chkAll_12').click(function () {
        $('.listAll_box_12').prop('checked', this.checked);
    });

    $('.mail_send').on('keypress', function (event) {
        if (event.which === 13) {
            $('#send').prop('checked', !$(this).prop('checked'));
        }
    });

    $('.no_send').on('keypress', function (event) {
        if (event.which === 13) {
            $('#no_send').prop('checked', !$(this).prop('checked'));
        }
    });


    $('.idSave').on('keypress', function (event) {
        if (event.which === 13) {
            $('#no_send').prop('checked', !$(this).prop('checked'));
        }
    });

    $('.table_chk_all').click(function () {
        $('.table_chk_box').prop('checked', this.checked);
    });
})
