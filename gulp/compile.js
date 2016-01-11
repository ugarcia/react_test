module.exports = function () {
    var shims = require('../package.json')['browser'],
        b = browserify()
                .transform(babelify.configure())
                .transform({global: true}, 'browserify-shim'),
        //libs = Object.keys(shims).map(function(shim) {
        //    b.require(shim);
        //    return shims[shim];
        //});
    libs=[];
    return b.add(libs.concat(["app/js/main.js"]))
        .bundle()
        .pipe(vinylSourceStream('app.js'))
        .pipe(gulp.dest('app'));
};