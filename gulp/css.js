module.exports = function () {
    return gulp.src(["node_modules/bootstrap/less/bootstrap.less", "app/less/**/*.less"])
        .pipe(less())
        .pipe(concat("app.min.css"))
        .pipe(minifyCss())
        .pipe(gulp.dest("app"));
};