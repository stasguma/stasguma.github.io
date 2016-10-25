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
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    watch = require('gulp-watch');

gulp.task('html', function () {
    return gulp.src('index.html')
    .pipe(connect.reload());
});

gulp.task('css', function() {
   return gulp.src('css/src/style.scss')
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('css/src'))
   // .pipe(concatCSS('main.css'))
   // .pipe(uncss({
   //      html: ['index.html']
   //  }))
   // .pipe( cleanCSS() )
   // .pipe(rename ('main.min.css') )
   // .pipe(gulp.dest('css/dist'));
   .pipe(connect.reload());
});

gulp.task('scripts', function() {
  return gulp.src('js/src/script.js')
    // .pipe(concat('main.js'))
    // .pipe(uglify())
    // .pipe(rename('main.min.js'))
    .pipe(gulp.dest('js/dist'))
    .pipe(connect.reload());
});

gulp.task('imagemin', function() {
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('img/dist'));
});

gulp.task('connect', function() {
  connect.server({
    // root: 'app',
    livereload: true
  });
});

gulp.task('watch', function () {
        gulp.watch(['index.html', 'css/src/style.scss', 'js/src/script.js'], ['html', 'css', 'scripts']);
});

gulp.task('default', ['connect', 'html', 'css', 'watch']);
