module.exports = function () {
    gulp.watch(["app/js/**/*.js", "app/tpl/**/*.jsx"], ['compile']);
    gulp.watch("app/less/**/*.less", ['css']);
};