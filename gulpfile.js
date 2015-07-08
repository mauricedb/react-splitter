/**
 * Created by Maurice on 6/28/2015.
 */

var gulp = require('gulp');
var gutil = require("gulp-util");
var webpack = require("webpack");
var babel = require('gulp-babel');
var config = require('./webpack.config');
var path = require('path');

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

gulp.task('demos:commonJS', function (callback) {
    webpack({
            entry: './demos/commonJS/demo.jsx',
            output: {
                path: path.join(__dirname, 'demos', 'commonJS'),
                filename: 'demo.js'
            },
            module: {
                loaders: [
                    {
                        test: /\.jsx$/,
                        loaders: ['babel-loader']
                    }
                ]
            }

        },
        function (err, stats) {
            if (err) throw new gutil.PluginError("webpack", err);
            gutil.log("[webpack]", stats.toString({
                // output options
            }));
            callback();
        });
});

gulp.task('demos', ['demos:simple', 'demos:commonJS']);

gulp.task('watch-js', function () {
    gulp.watch('./src/*.jsx', ['compile']);
    gulp.watch('./demos/**/*.jsx', ['demos']);

});

gulp.task('default', ['compile', 'demos', 'watch-js']);
