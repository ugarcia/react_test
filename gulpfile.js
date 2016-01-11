var config = require('./package.json'),
    tasks = require('require-dir')('./gulp');

Object.keys(config.devDependencies).forEach(function(libName) {
    var name = libName
        .replace(/^gulp-/g, '')
        .replace(/-(.{1})/g, function(s, c) {return c.toUpperCase()});
    this[name] = require(libName);
});

Object.keys(tasks).forEach(function(taskName) {
    gulp.task(taskName, tasks[taskName]);
});

gulp.task('default', ['css', 'compile']);
