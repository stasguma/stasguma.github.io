define(
    'Controller',
    ['Model', 'View', 'jQuery', 'lodash'],
    function () {
        return function Controller(model, view) {
            var self = this;

            view.opportunities.addBtn.on('click', addTask);
            view.opportunities.input.keyup(addByKeyUp);
            view.opportunities.tasks.on('click', '.removeBtn', removeTask);
            view.opportunities.tasks.on('click', '.editBtn', editTask);

            function addTask() {
                var newTask = view.opportunities.input.val();
                model.addTask(newTask);
                view.renderTasks(model.data);
                view.opportunities.input.val("");
            }

            function addByKeyUp() {
                if (event.keyCode === 13) {
                    view.opportunities.addBtn.trigger('click');
                }
            }

            function removeTask() {
                var item = $(this).parent().find('span').text();
                model.removeTask(item);
                view.renderTasks(model.data);
            }

            function editTask() {
                var item = $(this).prev().text();

                view.opportunities.input.val(item).focus();

                view.opportunities.addBtn.off('click');
                view.opportunities.addBtn.on('click', function () {

                    var newTask = view.opportunities.input.val();
                    model.editTask(item, newTask);
                    view.renderTasks(model.data);
                    view.opportunities.input.val("");

                    view.opportunities.addBtn.off('click');
                    view.opportunities.addBtn.on('click', addTask);

                });
            }
        };

    }
);
