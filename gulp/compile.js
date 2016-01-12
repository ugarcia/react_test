module.exports = function () {
    return browserify("app/js/main.js")
        .transform(babelify.configure())
        .transform('browserify-shim')
        .bundle()
        .pipe(vinylSourceStream('app.js'))
        .pipe(gulp.dest('app'));
};
