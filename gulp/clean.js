module.exports = function () {
    return gulp.src('build')
        .pipe(vinylPaths(del));
};