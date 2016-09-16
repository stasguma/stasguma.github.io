(function() {
/////////////////////////
///// SLIDER
/////////////////////////
    document.addEventListener('DOMContentLoaded', function () {
        var sliders = document.querySelectorAll('.js_percentage');

        for (var i = 0; i < sliders.length; i++) {
            lory(sliders[i], {
                infinite: 1
            });
        }
    });
    /////////////////////////
    ///////// REQUEST
    /////////////////////////

    function getRequest() {
        var key = '3194102-165c070bf25d8e8aa508768e4',
            input = encodeURIComponent(document.body.querySelector('.form__input').value);

        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://pixabay.com/api/?key='+ key +'&q='+ input +'&image_type=photo&per_page=7&orientation=horizontal&min_height=2000&min_width=3000', true);
        xhr.send();
        xhr.onreadystatechange = function() {
            if (this.readyState != 4) return;

            if (this.status != 200) {
                alert( 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался') );
                return;
            }
            /////////////////////////
            ///////// TEMPLATE
            /////////////////////////

            var templateHTML = _.template(document.getElementById('template').innerHTML);
            var grid = document.querySelector('.grid');
            console.log(grid);
            var data = JSON.parse(xhr.responseText);

            var tmpl = templateHTML({
                data: data
            });

            grid.innerHTML = tmpl;

            ////////////////////////
            /////// Masonry  //////
            //////////////////////
            imagesLoaded(grid, function () {

                var msnry = new Masonry( grid, {
                    itemSelector: '.grid-item',
                    columnWidth: '.grid-sizer',
                    percentPosition: true,
                    gutter: 20
                });
            });


        };
    }

    getRequest();
    //////////////////////////////////
    /////// REQUEST ON BUTTON  //////
    ////////////////////////////////
    document.querySelector('#dalle-form').addEventListener('submit', function (e) {
        e.preventDefault();

        getRequest();

        this.querySelector('.form__input').value = "";

    });

})();
