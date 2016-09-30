(function() {
    new WOW().init(); // WOW.js

    document.addEventListener('DOMContentLoaded', function () {

        setTimeout(function () {
            document.body.style.opacity = 1;
        }, 1000);
    });

    var contacts = document.querySelector('.contacts');

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
