$(function (){

    $('#slider').slick({
        arrows: false,
        dots: true
    });
});

$(function (){
    $('.feedback-block__photo-block').each(function() {
        //set size
        var th = $(this).height(),//box height
            tw = $(this).width(),//box width
            im = $(this).children('img'),//image
            ih = im.height(),//inital image height
            iw = im.width();//initial image width
        if (ih>iw) {//if portrait
            im.addClass('ww').removeClass('wh');//set width 100%
        } else {//if landscape
            im.addClass('wh').removeClass('ww');//set height 100%
        }
        //set offset
        var nh = im.height(),//new image height
            nw = im.width(),//new image width
            hd = (nh-th)/2,//half dif img/box height
            wd = (nw-tw)/2;//half dif img/box width
        if (nh<nw) {//if portrait
            im.css({marginLeft: '-'+wd+'px', marginTop: 0});//offset left
        } else {//if landscape
            im.css({marginTop: '-'+hd+'px', marginLeft: 0});//offset top
        }
    });
});

(function() {
    'use strict';

    var scrollItem = document.querySelectorAll('.js-scroll');

    scrollItem.forEach(function (item) {

        item.addEventListener('click', function (e) {
            e.preventDefault();

            var
                data = this.dataset.scrollto,
                scrollTo = document.querySelector("." +  data);

            scrollTo.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

}());

(function() {
    'use strict';
    // ANIMATION OF FORM
    var
        callback_btn = document.querySelector('.callback'),
        overlay_callback = document.querySelector('.overlay-callback'),
        inner_block = document.querySelector('.inner-block'),
        inner_block_hidden = document.querySelector('.inner-block.hidden'),
        overlay_form = document.querySelector('.overlay-form'),
        close_btn = overlay_callback.querySelectorAll('.close-btn'),
        overlay_inputs = document.querySelectorAll('.overlay-form__input');

    callback_btn.addEventListener('click', function () {

        overlay_callback.classList.add('open');
        inner_block.classList.add('anim-top');

    });

    close_btn.forEach(function (item) {

        item.addEventListener('click', function (e) {
            e.preventDefault();

            overlay_callback.classList.remove('open');
            inner_block.classList.remove('anim-top');
            inner_block_hidden.classList.remove('visible');
            inner_block_hidden.classList.add('hidden');

            overlay_inputs.forEach(function (item) {
                item.value = "";
            });

        });
    });
    // CALLBACK FORM SUBMIT
    overlay_form.addEventListener('submit', function (e) {
        e.preventDefault();

        inner_block.classList.remove('anim-top');
        inner_block_hidden.classList.remove('hidden');
        inner_block_hidden.classList.add('visible');

        var $form = $('.overlay-form'),
            data = $form.serialize();

        $.post('./overlay-form.php', data, "json");

    });
}());

(function() {
    'use strict';
    // PRODUCT FORM SUBMIT
    function callback_form() {
        var forms = document.querySelectorAll('.form');

        forms.forEach(function (item) {
            var $that = $(item);

            $that.submit(function (e) {
                e.preventDefault();

                $.ajax({
                    type: "POST",
                    url: "/send.php",
                    data: $that.serialize(),
                    success: function(data) {
                        $that.addClass('success');
                        setTimeout(function(){
                            $that.removeClass("success");
                        }, 3500);
                    }
                });

            });
        });
    }

    callback_form();
    // inputs, label
    var
        label = document.querySelectorAll('.form__field label'),
        input = document.querySelectorAll('.form__field input');

    label.forEach(function (item) {

        item.addEventListener('click', function () {

            this.previousElementSibling.focus();
        });
    });

    input.forEach(function (item) {
        var that = item;

        that.addEventListener('keyup', function () {

            if (that.value !== "") that.nextElementSibling.classList.add('hidden');
            else that.nextElementSibling.classList.remove('hidden');
        });
    });
}());

(function() {
    'use strict';

    var
        navbar_btn = document.querySelector('.menu-bars-btn'),
        overlay_nav_menu = document.querySelector('.overlay-nav-menu'),
        overlay_menu_link = document.querySelectorAll('.overlay-menu__link'),
        close_btn = overlay_nav_menu.querySelector('.close-btn'),
        overlay_menu = document.querySelector('.overlay-menu');

        navbar_btn.addEventListener('click', function (e) {
            e.preventDefault();
            overlay_nav_menu.classList.add('open');
        });

        close_btn.addEventListener('click', function () {
            overlay_nav_menu.classList.remove('open');
        });

        overlay_menu_link.forEach(function (item) {

            item.addEventListener('click', function (e) {
                e.preventDefault();

                setTimeout(function () {
                    overlay_nav_menu.classList.remove('open');
                }, 1000);
            });
        });
}());
// (function() {
//     'use strict';
//
//     REGEXP = {
//     		'first_name': /^[a-zA-Z]+$/,
//     		'email': /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
//     		'mobile_phone': /^((\+|00)33\s?|0)[679](\s?\d{2}){4}$/
//     };
//
//     	$('input[type=text], input[type=email], textarea').on('keyup', function() {
//     		var field = $(this);
//     		var id = field.attr('id');
//     		var value = field.val();
//     		var regexp = REGEXP[id];
//
//     		if (regexp.test(value)) {
//     			field.parent().removeClass('has-error').addClass('has-success');
//     		} else {
//     			field.parent().removeClass('has-success').addClass('has-error');
//     		}
//     	});
// }());

(function() {
    'use strict';

    var
        header_top_row = document.querySelector('.header-top-row'),
        main_title = document.querySelector('.main-title'),
        text_block = document.querySelector('.text-block'),
        scroll_down = document.querySelector('.scroll-down');


    document.addEventListener('DOMContentLoaded', function () {


        main_title.classList.remove('unvis');

        setTimeout(function () {
            document.body.classList.remove('ov-hid');

            header_top_row.classList.remove('unvis');
            text_block.classList.remove('unvis');
            scroll_down.classList.remove('unvis');
        }, 3000);
    });
}());
