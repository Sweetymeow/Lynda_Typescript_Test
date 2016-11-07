// normal javascript
function add() {
    var values = Array.prototype.splice.call(arguments, [0]), total = 0;
    console.log("add values: " + values);
    for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
        var value = values_1[_i];
        total += value;
    }
    return total;
} // convert arguments list into an array of values
function es6Add(action) {
    var newvalues = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        newvalues[_i - 1] = arguments[_i];
    }
    var total = 0;
    console.log("values: " + newvalues);
    for (var _a = 0, newvalues_1 = newvalues; _a < newvalues_1.length; _a++) {
        var value = newvalues_1[_a];
        switch (action) {
            case 'add':
                total += value;
                break;
            case 'subtract':
                total -= value;
                break;
        }
    }
    return total;
}
console.log(add(1, 4, 3, 23, 54, 70));
console.log(es6Add('subtract', 1, 2, 9, 16, 23, 30));
var source = [3, 4, 5];
var target = [1, 2].concat(source, [6, 7]);
console.log(target);
source.push.apply(source, target);
console.log(source); // 10
