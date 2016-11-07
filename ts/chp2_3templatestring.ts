var container = document.getElementById('container');

var todo = {
  id: 123,
  name: "Pick up dry cleaning",
  completed: true
};

console.log(todo.id);

container.innerHTML = ` <div todo='${todo.id}' class="list-group-item}"> <i class="${ todo.completed ? "" : "hidden" } text-success glyphicon glyphicon-ok"></i><span class="name">${todo.name}</span></div>`

/*
* <div todo='[[Todo ID]]' class="list-group-item}">
*    <i class="[[ add 'hidden' class if todo is NOT completed]] text-success glyphicon glyphicon-ok"></i>
*    <span class="name">[[Name]]</span>
* </div>
*/

// var displayName = `Todo #${todo.id}`
// using `#${  + javascript expression + }`
