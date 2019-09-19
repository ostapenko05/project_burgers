const {src, dest} = require("gulp");

function copy() {
    return src('/src/css/layout/main.css').pipe(dest('dist'))
}

exports.copy = copy