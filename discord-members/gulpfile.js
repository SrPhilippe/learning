let gulp = require('gulp'),
    sass = require('gulp-sass'),
    csso = require('gulp-csso'),
    prefix = require('gulp-autoprefixer')

gulp.task('default', () => {
    gulp.watch('./app/sass/*.scss', ['css'])
})

gulp.task('css', () => {
    return gulp.src('./app/sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(csso())
        .pipe(prefix({
            browsers: ['last 1 version']
        }))
        .pipe(gulp.dest('./app/dist'))
})
