requirejs.config({
    baseUrl: 'js/src',
    paths: {
        'jQuery': 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-beta1/jquery.min',
        'lodash': 'https://cdn.jsdelivr.net/lodash/4.13.1/lodash'
    },
    shim: {
        'lodash': {
            exports: 'lodash'
        }
    }
});

require(
    [
        'Model',
        'View',
        'Controller',
        'jQuery',
        'lodash',
    ],
    function (Model, View, Controller) {
            var defaultTasks = ["learn JavaScript", "learn html", "learn css"];
            var model = new Model(defaultTasks);
            var view = new View(model);
            var controller = new Controller(model, view);
    }
);
