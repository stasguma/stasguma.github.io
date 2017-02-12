var gulp = require('gulp'),
	autoprefixer = require('gulp-autoprefixer'),
	cleanCSS = require('gulp-clean-css'),
	connect = require('gulp-connect'),
	imagemin = require('gulp-imagemin'),
	livereload = require('gulp-livereload'),
	pump = require('pump'),
	rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
	watch = require('gulp-watch');


gulp.task('html', function () {
    return gulp.src(['index.html'])
    .pipe(connect.reload());
});

gulp.task('css', function() {
   return gulp.src(['scss/style.scss', 'scss/components/*'])
   .pipe(sass().on('error', sass.logError))
   .pipe(autoprefixer({
            browsers: ['last 5 versions', 'IE >= 9']
    }))
   .pipe(rename ('main.css') )
   .pipe(gulp.dest('dist/css'))
   .pipe( cleanCSS() )
   .pipe(rename ('main.min.css') )
   .pipe(gulp.dest('dist/css'))
   .pipe(connect.reload());
});
gulp.task('css2', function() {
   return gulp.src(['scss/lib/animate.scss'])
   .pipe(sass().on('error', sass.logError))
   .pipe(autoprefixer({
            browsers: ['last 5 versions', 'IE >= 9']
    }))
   .pipe( cleanCSS() )
   .pipe(rename ('animate.min.css') )
   .pipe(gulp.dest('dist/css'));
});

gulp.task('javascript', function() {
  return gulp.src('js/main.js')
    .pipe(uglify())
    .pipe(rename('main.min.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(connect.reload());
});

gulp.task('imagemin', function() {
    gulp.src('img/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

gulp.task('connect', function() {
  connect.server({
    // root: 'app',
    livereload: true
  });
});

gulp.task('watch', function () {
        gulp.watch(['index.html', 'scss/style.scss', 'scss/components/*'], ['html', 'css']);
});

gulp.task('default', ['connect', 'html', 'css', 'watch']);
