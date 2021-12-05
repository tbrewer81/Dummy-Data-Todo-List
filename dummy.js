   // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
}]

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
    console.log(arrayOfTodos)
}
const cleartodos = () => {
     arrayOfTodos= []
     let todoList = document.getElementById('todo-list').innerHTML = ""
     return todoList
}
const filtertodos = () => {
    const result = arrayOfTodos.filter(checkid); 
    let todoList = document.getElementById('quantitiy').value
    console.log (todoList)
    function checkid(id) {
        return id == todoList;
        
    } 
    console.log (result)
    return result      
}




const populateTodos = () => {
    let todoList = document.getElementById('todo-list');
    let todoTitle = ""
    for (i=0; 1 < arrayOfTodos.length; i++) {
        todoTitle = document.createTextNode(arrayOfTodos[i].title);
        let todoItem = document.createElement("li")
        if (arrayOfTodos[i].completed) {
        todoItem.classList.add("istrue");
        } else {
        todoItem.classList.add("isfalse");
    }
    todoItem.appendChild(todoTitle);
    todoList.appendChild(todoItem);
    }
}

console.log(arrayOfTodos[0].userId) // => 14
console.log(arrayOfTodos[1].userId) // => 20
    // end of for loop
    // end of function