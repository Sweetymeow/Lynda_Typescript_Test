function totalLength(x, y) {
    var total = x.length + y.length;
    x.slice(0);
    if (x instanceof Array) {
        x.push('abc');
    }
    if (x instanceof String) {
        x.substr(1);
    }
    return total;
}
console.log(totalLength([123, 'aoe', 'test', 123], ['test', 'code']));
console.log(totalLength("app is good to use", ''));
console.log(totalLength("app is good to use", ['test', 'code']));
