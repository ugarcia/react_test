module.exports = function () {
    gulp.src("app/app.js")
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest("build"));
    return gulp.src("app/app.min.css")
        .pipe(gulp.dest("build"));
};