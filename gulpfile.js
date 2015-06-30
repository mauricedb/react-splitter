/**
 * Created by Maurice on 6/28/2015.
 */

var gulp = require('gulp');
var gutil = require("gulp-util");
var webpack = require("webpack");
var babel = require('gulp-babel');
var config = require('./webpack.config');

gulp.task("compile", function (callback) {
    // run webpack
    webpack(config,
        function (err, stats) {
            if (err) throw new gutil.PluginError("webpack", err);
            gutil.log("[webpack]", stats.toString({
                // output options
            }));
            callback();
        });
});

gulp.task('demos:simple', function () {
    return gulp.src('./demos/simple/*.jsx')
        .pipe(babel({
            blacklist: [
                //'useStrict'
            ]
        }))
        .pipe(gulp.dest('./demos/simple'));
});

gulp.task('watch-js', function () {
    gulp.watch('./src/*.jsx', ['compile']);
    gulp.watch('./demos/**/*.jsx', ['demos:simple']);

});

gulp.task('default', ['compile', 'demos:simple', 'watch-js']);
