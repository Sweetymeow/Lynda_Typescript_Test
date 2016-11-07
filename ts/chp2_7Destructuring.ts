// sample 1
var array = [123, 'pick up cloth', false];
var todo = {
  id : 123,
  title : 'pick up cloth',
  completed : false
};

// deconstruct syntax
var [id, title, completed] = array;
var {completed, id, title, createData} = todo;
var { _completed,  _id,  _title,  _createData} = todo;

console.log(`completed: # ${completed}, id: # ${id}, title: # ${title}, createData: # ${createData}`);
console.log(`_completed: # ${_completed}, _id: # ${_id}, title: # ${_title}, _createData: # ${_createData}`);
// completed: # false, id: # 123, title: # pick up cloth, createData: # undefined
// _completed: # undefined, _id: # undefined, title: # undefined, _createData: # undefined

// sample 2
var a = 1;
var b = 5;
[a,b] = [b,a];
console.log(`A: #${a}, B: #${b}`);

// sample 3
function getTodo(id){
  var todolist = {
    new_id : 123,
    new_title : 'pick up cloth',
    new_completed : false
  }
  return todolist;
}

// the name HAVE to be the SAME with the name of object
// var {new_completed, new_id, new_title, new_createDate} = getTodo(123);
// console.log(`new_completed: # ${new_completed}, id: # ${new_id}, title: # ${new_title}, createData: # ${new_createDate}`);
// Rename Syntax
var {new_completed: isCompleted, new_id, new_title} = getTodo(123);
console.log(`isCompleted: # ${isCompleted}, id: # ${new_id}, title: # ${new_title}`);


// sample 4
function countdown(initial, final = 0, interval =1){
  var current = initial;

  while(current > final){
    console.log(`countdown-current: ${current}`);
    current -= interval;
  }
}
new countdown(5);
//new countdown(-10); // no-result

function countdown_initcheck({
  initial,
  final: final = 0,
  interval: interval = 1,
  initial: current
}){
  while(current > final){
    console.log(`Init check / countdown-current: ${current}`);
    current -= interval;
  }
}
new countdown_initcheck({initial:5});
