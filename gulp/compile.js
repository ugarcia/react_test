module.exports = function () {
    return browserify(["app/js/main.js"])
        //.transform(babelify.configure())
        //.transform('browserify-shim')
        .bundle({debug: true})
        .pipe(vinylSourceStream('app.js'))
        .pipe(gulp.dest('app'));
};