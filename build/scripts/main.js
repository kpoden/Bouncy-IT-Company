$(document).ready(function() {


    //**** mobile menu code ****//
    $(".burger-menu").on('click', function() {
        $(".top-menu__nav").toggleClass("mobile-active");
        $(".bg-mobile").toggleClass("bgactive");
        $(".burger-menu").toggleClass("close");
    });

    $(".top-menu__nav").on('click', function(e) {
        if($(".bg-mobile").hasClass("bgactive")) {     
            if ($(e.target).is("a")){             
            } else {
                $('.top-menu__nav').removeClass('mobile-active');
                $('.bg-mobile').removeClass("bgactive");
                $(".burger-menu").removeClass("close");
            }
        }
    });

    $(".featured__image").mouseover(function () {
        $(this).width('50%');

    });
    $(".featured__image").mouseout(function () {
        $(this).width('33.4%');
    });

/* ----- Round Pie Charts init and sizes ----- */

    chartSize = 120;

    function windowSize(){
        if ($(window).width() <= '900'){
            chartSize = 80;
        } else if ($(window).width() <= '1200') {
            chartSize = 100;
        }
        else {
            chartSize = 120;
        }
        return chartSize;
    }

    $(function() {
        $('.chart').easyPieChart({
            scaleColor: false,
            barColor: '#19bd9a',
            trackColor: '#047378',
            size: windowSize()   
            
        });
    });

/* ----- Slick Slider init and settings ----- */

    $('.team-slider-wrap').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: false,
        infinite: true
    });

    $('.testimonials__wrap').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        infinite: true

    });


});