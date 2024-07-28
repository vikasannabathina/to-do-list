document.getElementById('add-todo').addEventListener('click', function() {
    var input = document.getElementById('todo-input');
    var todoText = input.value.trim();

    if (todoText !== "") {
        var li = document.createElement('li');
        var span = document.createElement('span');
        span.textContent = todoText;
        var doneButton = document.createElement('button');
        doneButton.textContent = 'Done';
        doneButton.className = 'done-btn';
        doneButton.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(span);
        li.appendChild(doneButton);
        document.getElementById('todo-list').appendChild(li);
        input.value = "";
    }
});
