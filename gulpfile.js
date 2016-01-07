var gulp = require("gulp");
var babel = require("gulp-babel");
var del = require("del");
var concat = require("gulp-concat");

gulp.task("build", function () {
    del.sync(['./build/*']);
    return gulp.src(["app/**/*.js", "!app/components/**/*.js"])
        .pipe(babel())
        .pipe(concat("app.js"))
        .pipe(gulp.dest("build"));
});

gulp.task("default", ["build"]);