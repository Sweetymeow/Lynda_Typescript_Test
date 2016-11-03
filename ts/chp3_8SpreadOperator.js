function add() {
    var values = Array.prototype.splice.call(arguments, [1]), total = 0;
    for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
        var value = values_1[_i];
        total += value;
    }
    return total;
}
