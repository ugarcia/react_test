module.exports = function () {
    gulp.watch("app/js/**/*.js", ['compile']);
    gulp.watch("app/less/**/*.less", ['css']);
};