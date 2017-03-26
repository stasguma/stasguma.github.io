var gulp = require('gulp'),
	autoprefixer = require('gulp-autoprefixer'),
	cleanCSS = require('gulp-clean-css'),
	concat = require('gulp-concat'),
	connect = require('gulp-connect'),
	critical = require('critical').stream,
	imagemin = require('gulp-imagemin'),
	livereload = require('gulp-livereload'),
	pump = require('pump'),
	rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
	gutil = require('gulp-util');
	watch = require('gulp-watch');


gulp.task('html', function () {
    return gulp.src(['index.html'])
    .pipe(connect.reload());
});

gulp.task('css', function() {
   return gulp.src(['scss/*.scss'])
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

gulp.task('csslibs', function() {
	return gulp.src(['scss/libs/*.scss'])
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer({
		browsers: ['last 5 versions', 'IE >= 9']
	}))
	.pipe(concat('libs.css'))
	.pipe( cleanCSS() )
	.pipe(rename ('libs.min.css') )
	.pipe(gulp.dest('dist/css'));
});

gulp.task('critical', function() {
	return gulp.src('index.html')
		.pipe(critical({
			base: 'C:/Users/Admin/Desktop/github/stasguma.github.io/resume/',
			src: 'index.html',
			css: ['dist/css/main.css'],
			height: 800,
			dest: 'dist/css/critical.css'
			// minify: true
		}))
		.on('error', function(err) { gutil.log(gutil.colors.red(err.message)); })
		.pipe(gulp.dest('dist/css'));
});

gulp.task('javascript', function() {
  return gulp.src('js/script.js')
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
	gulp.watch(['*.html', 'js/script.js'], ['html']);
	gulp.watch('scss/**/*.scss', ['css']);
});

gulp.task('default', ['connect', 'html', 'css', 'watch']);
gulp.task('prod', ['html', 'css', 'javascript', 'imagemin']);
