window.addEventListener('DOMContentLoaded', function () {

    (function() {
        'use strict';
        // SLICK SLIDER

        $('#slider').slick({
            arrows: false,
            dots: true,
        });
        // HOVER FUNC FOR HEADER NAV
        var
            dropdown_menu = document.querySelectorAll('.top-row .dropdown'),
            li = document.querySelectorAll('.dropdown__item');

        dropdown_menu.forEach(function (item) {

            item.onmouseover = function (e) {

                var target = e.target;

                if (!target.classList.contains('active') && target.tagName === "A") {
                    target.classList.add('active');
                }

                item.onmouseout = function () {
                    target.classList.remove('active');
                };
            };
        });

        // NAV-BARS MENU
        var
            bars_menu_btn = document.querySelector('.bars-menu__bars'),
            bars_menu_list = document.querySelector('.bars-menu__list'),
            bars_menu = document.querySelector('.bars-menu');

        bars_menu_btn.onclick = function (e) {
            e.preventDefault();

            bars_menu.classList.toggle("clicked");
        };

        // CLICK DROPDOWN MENU FOR INGREDIENTS
        var ingredients_btn = document.querySelectorAll('.ingredients__btn');

        ingredients_btn.forEach(function (item) {

            item.onclick = function (e) {

                var that = this;

                that.classList.toggle("is-active");

                var dd_ingredients = that.parentElement.querySelector('.dd-ingredients');

                if (!dd_ingredients.classList.contains('active')) {
                    dd_ingredients.classList.add('active');
                } else dd_ingredients.classList.remove('active');

            };

        });

        // SCROLL TO FORM
        var
            scrollBtn = document.querySelector('.js-scroll'),
            purchase_block = document.querySelector('.purchase-block');

        scrollBtn.onclick = function (e) {
            e.preventDefault();

            purchase_block.scrollIntoView({
                behavior: 'smooth'
            });
        };

        // INPUT MASK

        $('.js-mask').mask('+380(00)000-00-00');
    }());

    (function() {
        'use strict';

        // TABS
        var
            control_links = document.querySelectorAll('.tabs__control-link'),
            control_items = document.querySelectorAll('.tabs__control-item'),
            tabs_item = document.querySelectorAll('.tabs__item');

        control_links.forEach(function (item) {

            item.onclick = function (e) {
                e.preventDefault();

                var
                    that = this,
                    control_item = that.closest('li'),
                    ctrl_item_indx = Array.prototype.indexOf.call(control_items, control_item);

                control_links.forEach(function (item) {
                    item.classList.remove("active");
                });

                tabs_item.forEach(function (item) {
                    item.classList.remove("active");
                });

                this.classList.add("active");
                tabs_item[ctrl_item_indx].classList.add("active");
            };
        });

        var inputs = document.querySelectorAll(".form__field  input:not([type='checkbox'])");

        inputs.forEach(function (item) {

            item.onfocusout = function () {

                if (item.value !== "") {
                    this.nextElementSibling.style.display = "none";
                } else this.nextElementSibling.style.removeProperty("display");
            };

        });

        // ACCORDION
        var
            questions = document.querySelectorAll('.accordion__question'),
            items = document.querySelectorAll('.accordion__item');

        questions.forEach(function (item) {

            item.onclick = function () {

                var that = this;

                if (that.parentElement.classList.contains("active")) {
                    getSiblingsClose();

                } else {
                    getSiblingsClose();
                    that.parentElement.classList.add("active");
                }

                function getSiblingsClose(el) {
                    items.forEach(function (item) {
                        item.classList.remove("active");
                    });
                }
            };
        });
    }());

    (function() {
        'use strict';
        // YANDEX MAP
        ymaps.ready(init);

        var kyiv_map, hipsweet;

        function init(){
            kyiv_map = new ymaps.Map("map", {
                center: [50.43817083, 30.51634881],
                zoom: 16,
                controls: ["zoomControl"]
            });

            hipsweet = new ymaps.Placemark([50.43817083, 30.51634881],
            {
                hintContent: 'ул. Большая Васильковская, 29',
                balloonContent: 'магазин Hipsweet'
            },
            {
                iconLayout: 'default#image',
                iconImageHref: '../img/marker.png',
                iconImageSize: [42, 59],
                iconImageOffset: [-18, -65]
            });

            kyiv_map.behaviors.disable('scrollZoom');

            kyiv_map.geoObjects.add(hipsweet);
        }

    }());
});
