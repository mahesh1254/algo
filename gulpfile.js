var gulp = require('gulp')
var browserSync = require('browser-sync').create()
var sass = require('gulp-sass')

// compiling sass file
gulp.task('compile-sass', function () {
    return gulp.src('src/scss/*.scss') // location of file
        .pipe(sass())
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream())
})
// compiling javascript file
gulp.task('move-js', function () {
    return gulp.src('node_modules/jquery/dist/jquery.min.js')
        .pipe(gulp.dest('src/js'))
        .pipe(browserSync.stream())
})

// run sass
// run server
// watch for any changes in src/scss folder and reload the browser
// watch for html changes
gulp.task('launch-server', ['compile-sass'], function () {
    browserSync.init({
        server: 'src'
    })

    gulp.watch(['src/scss/*.scss'], ['compile-sass']);
    gulp.watch('src/*.html').on('change', browserSync.reload);
})

// run gulp
// launch server and browser
//excute js task
gulp.task('default', ['launch-server', 'move-js'])