var gulp = require('gulp'),
    concatCSS = require('gulp-concat-css'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    rename = require('gulp-rename');

gulp.task('css', function() {
   return gulp.src('css/*.css')
   .pipe(concatCSS('style.main.min.css'))
   .pipe( cleanCSS() )
   .pipe(gulp.dest('css/dist'));
});

gulp.task('scripts', function() {
  return gulp.src('js/src/*.js')
    .pipe(concat('script.main.js'))
    .pipe(uglify())
    .pipe(rename('script.main.min.js'))
    .pipe(gulp.dest('js/dist'));
});

gulp.task('default', ['css', 'scripts']);
