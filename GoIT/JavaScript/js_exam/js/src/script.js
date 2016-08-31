(function() {

    function getRequest() {
        var key = '3194102-165c070bf25d8e8aa508768e4',
            input = encodeURIComponent(document.body.querySelector('.form__input').value);

        var xhr = new XMLHttpRequest();
        // xhr.open('GET', 'http://api.pixplorer.co.uk/image?amount=7', true);
        xhr.open('GET', 'https://pixabay.com/api/?key='+ key +'&q='+ input +'&image_type=photo&per_page=7', true);
        xhr.send();
        xhr.onreadystatechange = function() {
            if (this.readyState != 4) return;

            // document.querySelector('.grid').childNodes.innerHTML = "";

            var templateHTML = _.template(document.getElementById('template').innerHTML);
            var grid = document.querySelector('.grid');
            console.log(grid);
            var data = JSON.parse(xhr.responseText);

            var tmpl = templateHTML({
                data: data
            });

            grid.innerHTML = tmpl;

//////////////////////////////////
///////////// Masonry  //////////
////////////////////////////////
            var elem = document.querySelector('.grid');
            imagesLoaded(elem, function () {

                var msnry = new Masonry( elem, {
                    itemSelector: '.grid-item',
                    columnWidth: '.grid-sizer',
                    percentPosition: true
                });
            });

            if (this.status != 200) {
                alert( 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался') );
                return;
            }
        };
    }

    getRequest();

    document.querySelector('.form__submit').addEventListener('click', function () {
        getRequest();
    });

})();
