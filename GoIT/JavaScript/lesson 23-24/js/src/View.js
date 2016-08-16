define(
    'View',
    ['Model', 'jQuery', 'lodash'],
    function () {
        return function View(model) {
            var self = this;

            function init() {

                // var data = [];
                var tmpl = _.template($('#template').html());
                $('body').append(tmpl);

                self.opportunities = {
                    input: $('.menu__input-text'),
                    addBtn: $('.menu__btn'),
                    tasks: $('.menu')
                };

                self.renderTasks(model.data);
            }

            self.renderTasks = function (data) {
                var tasksTmpl = _.template($('#list-template').html());
                var tasksInsert = tasksTmpl({data: data});
                self.opportunities.tasks.html(tasksInsert);
            };

            init();

        };

    }
);
