// IIFE - Immediately Invoked Function Expression
// Becomes global

(function () {

    this.onKeydown = function (evt) {
        var key = evt.keyCode || evt.which;
        if (key === 13) {
            var value = evt.target.value;
            if (value !== '') {
                var item = createTodoItem(value);
                attachTodoItem(item);
                clearTextField(evt.target);
            }
        }
    };

    this.createTodoItem = function (value) {
        var item = document.createElement('li');
        // item.innerText = value;
        item.appendChild(document.createTextNode(value));
        return item;
    };

    this.attachTodoItem = function (item) {
        var ulElement = document.getElementById('listContent');
        ulElement.appendChild(item);
    };

    this.clearTextField = function (elementRef) {
        elementRef.value = '';
    };

    // return this;
})();