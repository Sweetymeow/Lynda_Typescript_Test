// var container = document.getElementById('container');
var list = ["test 1", "test 2", "test 3", "test 4", "test 5 "];
// new syntac 
for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
    var item = list_1[_i];
    console.log("" + item);
}
for (var x in list) {
    var counter = x;
    console.log(counter);
}
for (var _a = 0, list_2 = list; _a < list_2.length; _a++) {
    var x = list_2[_a];
    var count = x;
    console.log(count);
}
