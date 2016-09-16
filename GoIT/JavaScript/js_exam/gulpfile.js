var gulp = require('gulp'),
    autoprefixer = require('autoprefixer'),
    concatCSS = require('gulp-concat-css'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    postcss = require('gulp-postcss'),
    pump = require('pump'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    spritesmith = require('gulp.spritesmith'),
    uncss = require('gulp-uncss'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch');


gulp.task('css', function() {
    var processors = [
        autoprefixer({browsers: ['last 4 version']})
    ];

   return gulp.src('css/src/main.scss')
   .pipe(sass().on('error', sass.logError))
   // .pipe(concatCSS('main.css'))
   // .pipe(uncss({
   //      html: ['index.html']
   //  }))
   .pipe(gulp.dest('css/src/'))
   .pipe(postcss(processors))
   .pipe( cleanCSS() )
   .pipe(rename ('main.min.css'))
   .pipe(gulp.dest('css/dist/'));
});

gulp.task('scripts', function() {
  return gulp.src('js/src/*.js')
    // .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(rename('main.min.js'))
    .pipe(gulp.dest('js/dist'));
});

gulp.task('imagemin', function() {
    gulp.src('img/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('img/dist/'));
});

gulp.task('watch', function () {
        gulp.watch('css/style.scss', ['css', 'scripts']);
});

gulp.task('default', ['css', 'scripts', 'imagemin', 'watch']);
