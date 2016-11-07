function totalLength(x, y) {
    var total = x.length + y.length;
    x.slice(0);
    // x.push('abc'); // alert: 'push' doesn't exist on type 'string | any[]'
    if (x instanceof Array) {
        x.push('abc');
    } // declear x is array
    if (x instanceof String) {
        x.substr(1);
    } // declear x is string
    return total;
}
console.log(totalLength([123, 'aoe', 'test', 123], ['test', 'code']));
console.log(totalLength("app is good to use", ''));
console.log(totalLength("app is good to use", ['test', 'code']));
