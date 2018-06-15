let gulp = require('gulp'),
    sass = require('gulp-sass'),
    csso = require('gulp-csso'),
    autoprefixer = require('gulp-autoprefixer')

gulp.task('default', () => {
    gulp.watch('./app/**/*.scss', ['compile:sass'])
})

gulp.task('compile:sass', () => {
    gulp.src('./app/sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(csso())
        .pipe(autoprefixer({
            browsers: ['last 1 version']
        }))
        .pipe(gulp.dest('./dist'))
})
