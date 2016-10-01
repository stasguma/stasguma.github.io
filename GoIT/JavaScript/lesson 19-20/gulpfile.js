var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    concatCSS = require('gulp-concat-css'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    uncss = require('gulp-uncss'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    imagemin = require('gulp-imagemin'),
    spritesmith = require('gulp.spritesmith'),
    watch = require('gulp-watch');

gulp.task('css', function() {
   return gulp.src('css/src/*.scss')
   .pipe(sass().on('error', sass.logError))
   .pipe(concatCSS('main.css'))
   .pipe(gulp.dest('css/dist/'))
   .pipe( cleanCSS() )
   .pipe(rename ('main.min.css') )
   .pipe(gulp.dest('css/dist'));
});

gulp.task('scripts', function() {
  return gulp.src('js/src/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('js/dist'))
    .pipe(uglify())
    .pipe(rename('main.min.js'))
    .pipe(gulp.dest('js/dist'));
});

gulp.task('imagemin', function() {
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('img/dist'));
});

gulp.task('watch', function () {
        gulp.watch(['css/style.scss', 'js/src/*.js'], ['css', 'scripts']);
});

gulp.task('default', ['css', 'scripts', 'imagemin', 'watch']);
