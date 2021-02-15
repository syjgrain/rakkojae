$(function () {



    var win_w = $(window).width();
    var last = 0;
    var sec_pos = [];
    var base_line = -650;


    $(window).on('resize', function(){
        win_w = $(this).width();
        if(win_w>1000){
            $('.navi_list').removeAttr('style');
            $('.toggle').removeClass('active');
        }
    });


    save_offset_top();

    function save_offset_top() {
        sec_pos = [];

        $('section').each(function () {
            var this_offset = $(this).offset().top;
            sec_pos.push(this_offset);
        });

        last = $('section').last().offset().top + $('section').last().height();
        sec_pos.push(last);
    }

    //------------ scroll 이벤트
    $(window).on('scroll', function () {
        var scroll = $(this).scrollTop();

        $('section').each(function (index) {
            if (scroll >= sec_pos[index] + base_line && scroll < sec_pos[index + 1]) {

                $('section').eq(index).addClass('on');
            }
        });

        if ($(window).scrollTop() > 50) {
            $("#header").addClass("active");
        } else {
            $("#header").removeClass("active");
        }
        if ($(window).scrollTop() > 500) {
            $("#visual").addClass("active");
        } else {
            $("#visual").removeClass("active");
        }

    });

    $('.toggle').on('click', function (e) {
        e.preventDefault();
        $('#header').addClass('active');
        $('.toggle').toggleClass('active');
        $(".navi_list").slideToggle();
        $('.sub_navi').stop().slideUp();


    });

    $('.navi_list > li').on('click', function (e) {
        e.preventDefault();
        $('.sub_navi').stop().slideUp();
        $(this).find('.sub_navi').stop().slideToggle();
    });


});
