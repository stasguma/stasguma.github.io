$(function () {
// =====================
// ======= SLIDER ======
// =====================
    $('.slider-meal').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.nav-menu-slider',
        draggable: false,
        speed: 800
    });

    $('.nav-menu-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-meal',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>'

    });

    // =======================
    // ==== SCROLL TO TOP ====
    // =======================
    
    $(".footer .logo").click(function (e) {
        var $body = $('body');

        $body.animate({scrollTop: 0}, 1200, 'easeOutCubic');
        return false;
    });
});
