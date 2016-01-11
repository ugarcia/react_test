module.exports = function () {
    return browserify({
        entries: [
            //"app/js/main.js"
            //"app/js/main.js"
            //"app/js/main.js"
            //"app/js/main.js"
            "app/js/main.js"
        ]
    })
    .transform(babelify.configure())
    .transform({global: true}, 'browserify-shim')
    .bundle()
    .pipe(vinylSourceStream('app.js'))
    .pipe(vinylBuffer())
    .pipe(gulp.dest('app'));
};