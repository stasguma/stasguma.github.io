define(
    'Model',
    [],
    function () {
        return function Model(data) {
            var self = this;

            self.data = data;

            self.addTask = function(task) {
                if (task.length === 0) {
                    return;
                }

                self.data.push(task);
            };

            self.removeTask = function(task) {
                var index = self.data.indexOf(task);

                if (index === -1) {
                    return;
                }

                self.data.splice(index, 1);
            };

            self.editTask = function (task, newTask) {
                var index = self.data.indexOf(task);

                if (index === -1) {
                    return;
                }

                self.data.splice(index, 1, newTask);
            };

        };

    }
);
