// normal javascript
function add() {
    var values = Array.prototype.splice.call(arguments, [0]),
        total = 0;

    console.log(`add values: ${values}`);

    for (var value of values) {
        total += value;
    }

    return total;
} // convert arguments list into an array of values

function es6Add(action, ...newvalues){
  var total = 0;

  console.log(`values: ${newvalues}`);

  for (var value of newvalues) {
    switch(action){
      case 'add' :
        total += value;
        break;
      case 'subtract':
        total -= value;
        break;
    }
  }

  return total;
}

console.log( add(1, 4, 3, 23, 54, 70));
console.log( es6Add('subtract', 1, 2, 9, 16, 23, 30) );

var source = [3, 4, 5];
var target = [1, 2, ...source, 6, 7];
console.log(target);
source.push(...target);
console.log( source ); // 10
