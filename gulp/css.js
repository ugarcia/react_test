module.exports = function () {
    return gulp.src(["app/components/bootstrap/less/bootstrap.less", "app/less/**/*.less"])
        .pipe(less())
        .pipe(concat("app.min.css"))
        .pipe(minifyCss())
        .pipe(gulp.dest("app"));
};