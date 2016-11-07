// var container = document.getElementById('container');
var list = ["test 1","test 2","test 3","test 4","test 5 "];

for(var x in list){
  var counter = x;
  console.log(counter);
}

for(var x of list){
  var count = x;
  console.log(count);
}
