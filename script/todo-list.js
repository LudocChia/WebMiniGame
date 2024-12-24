const todoList = JSON.parse(localStorage.getItem('todoItems')) || [];
document.querySelector('.todo__control-input').addEventListener('keydown', handleOneKeyDown);
document.querySelector('.todo__button--add').addEventListener('click', () => {
    addTodo();
});

function handleOneKeyDown(key) {
    if (key === 'Enter') {
        addTodo();
    }
}

function addTodo() {
    const nameInputElement = document.querySelector('.todo__control-input');
    const dateInputElement = document.querySelector('.todo__control-date');

    const name = nameInputElement.value;
    const date = dateInputElement.value;

    // Simple validation: ignore empty name or date if you wish
    if (!name || !date) return;

    // Shorthand Property
    todoList.push({ name, date });
    localStorage.setItem('todoItems', JSON.stringify(todoList));
    renderTodoList();

    // Clear inputs after adding
    nameInput.value = '';
    dateInput.value = '';
}

function renderTodoList() {
    const listElement = document.querySelector('.todo__list');
    listElement.innerHTML = ''; // Clear to re-render

    let todoItemList = '';

    todoList.forEach((todo, index) => {
        const { name, date } = todo;
        // Destructuring
        // const name = todoList.name;
        // const date = todoList.date;
        const todoItemHtml =
            `<div class="todo__item">
                <div class="todo__item-name">${name}</div>       
                <div class="todo__item-date">${date}</div> 
                <button class="todo__button todo__button--delete" class="todo__button--delete"> Delete</button>          
            </div>`

        todoItemList += todoItemHtml;

        listElement.innerHTML = todoItemList;
    });

    document.querySelectorAll('.todo__button--delete')
        .forEach((button, index) => {
            button.addEventListener('click', () => {
                deleteTodoItem(index);
            });
        });
}

function deleteTodoItem(Index) {
    todoList.splice(Index, 1);
    localStorage.setItem('todoItems', JSON.stringify(todoList));
    renderTodoList();
}

renderTodoList();