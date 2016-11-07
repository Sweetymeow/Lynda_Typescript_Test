// sample 1
var array = [123, 'pick up cloth', false];
var todo = {
    id: 123,
    title: 'pick up cloth',
    completed: false
};
// deconstruct syntax
var id = array[0], title = array[1], completed = array[2];
var completed = todo.completed, id = todo.id, title = todo.title, createData = todo.createData;
var _completed = todo._completed, _id = todo._id, _title = todo._title, _createData = todo._createData;
console.log("completed: # " + completed + ", id: # " + id + ", title: # " + title + ", createData: # " + createData);
console.log("_completed: # " + _completed + ", _id: # " + _id + ", title: # " + _title + ", _createData: # " + _createData);
// completed: # false, id: # 123, title: # pick up cloth, createData: # undefined
// _completed: # undefined, _id: # undefined, title: # undefined, _createData: # undefined
// sample 2
var a = 1;
var b = 5;
_a = [b, a], a = _a[0], b = _a[1];
console.log("A: #" + a + ", B: #" + b);
// sample 3
function getTodo(id) {
    var todolist = {
        new_id: 123,
        new_title: 'pick up cloth',
        new_completed: false
    };
    return todolist;
}
// the name HAVE to be the SAME with the name of object
// var {new_completed, new_id, new_title, new_createDate} = getTodo(123);
// console.log(`new_completed: # ${new_completed}, id: # ${new_id}, title: # ${new_title}, createData: # ${new_createDate}`);
// Rename Syntax
var _b = getTodo(123), isCompleted = _b.new_completed, new_id = _b.new_id, new_title = _b.new_title;
console.log("isCompleted: # " + isCompleted + ", id: # " + new_id + ", title: # " + new_title);
// sample 4
function countdown(initial, final, interval) {
    if (final === void 0) { final = 0; }
    if (interval === void 0) { interval = 1; }
    var current = initial;
    while (current > final) {
        console.log("countdown-current: " + current);
        current -= interval;
    }
}
new countdown(5);
//new countdown(-10); // no-result
function countdown_initcheck(_a) {
    var initial = _a.initial, _b = _a.final, final = _b === void 0 ? 0 : _b, _c = _a.interval, interval = _c === void 0 ? 1 : _c, current = _a.initial;
    while (current > final) {
        console.log("Init check / countdown-current: " + current);
        current -= interval;
    }
}
new countdown_initcheck({ initial: 5 });
var _a;
