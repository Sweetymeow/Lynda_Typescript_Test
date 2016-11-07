/*
var support = {
    'os_Windows': isSupported('Windows'),
    'os_iOS': isSupported('iOS'),
    'os_Android': isSupported('Android'),
}

function isSupported(os) {
    return Math.random() >= 0.5;
}
*/
var osPrefix = 'os_';
var support = (_a = {},
    _a[osPrefix + 'Windows'] = isSupported('Windows'),
    _a[osPrefix + 'iOS'] = isSupported('iOS'),
    _a[osPrefix + 'Android'] = isSupported('Android'),
    _a
);
function isSupported(os) {
    return Math.random() >= 0.5;
}
var _a;
