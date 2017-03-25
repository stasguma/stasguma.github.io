window.addEventListener('DOMContentLoaded', function () {
    (function() {
        // SCROLL TO TOP ON REFRESH PAGE
        var url = window.location.href;

        if( url.indexOf('#') < 0 ) {
            window.location.replace(url + "#");
        } else {
            window.location.replace(url);
        }
        // setTimeout(function () {
            // window.scrollTo(0, 0);

        // }, 100);

        new WOW().init(); // WOW.js

        var contacts = document.querySelector('.header__contacts');

        contacts.addEventListener('mouseover', function (event) {
            var target = event.target;
            var icon = target.firstElementChild;

            if (icon !== null && icon.tagName === 'I') {

                icon.classList.add("animated", "bounceCustom");

                contacts.addEventListener('mouseout', function () {
                    icon.classList.remove("animated", "bounceCustom");
                });
            }
        });

    }());
});

window.addEventListener('load', function () {
//     (function() {
//         'use strict';
//
//         window.scrollTo(0,0);
//
//     }());

    // ANIMATION ON START
    var
        header_name = document.querySelector('.header__name'),
        header_pos = document.querySelector('.header__position'),
        header_contacts = document.querySelector('.header__contacts'),
        main_wrapper = document.querySelector('.main-wrapper');

    var arr = [document.body, header_name, header_pos, header_contacts, main_wrapper];

    arr.forEach(function (item) {
        item.classList.remove("loading");
    });
});
