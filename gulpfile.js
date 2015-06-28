/**
 * Created by Maurice on 6/28/2015.
 */

var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('compile', function () {
    return gulp.src('./src/*.jsx')
        .pipe(babel({
            blacklist: [
                'useStrict'
            ]
        }))
        .pipe(gulp.dest('./dist'));
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

gulp.task('default', ['compile','demos:simple', 'watch-js']);
