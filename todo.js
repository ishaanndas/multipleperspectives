// selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");


// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteVer);




// Functions
function addTodo(event) {
    event.preventDefault();
    //console.log('hello');

    //Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-minus"></i>'
    deleteButton.classList.add('delete-btn');
    todoDiv.appendChild(deleteButton);
    //append to list
    todoList.appendChild(todoDiv);
    //clear value
    todoInput.value = '';

}

function deleteVer(e){
    //console.log(e.target);
    const item = e.target;

    if (item.classList[0] == "delete-btn") {
        const todo = item.parentElement;
        todo.remove();
    }


}