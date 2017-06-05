var gulp         = require('gulp');
var gulpif       = require('gulp-if');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
  return gulp
  	.src('assets/sass/**/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.', {
	  sourceRoot: 'assets/sass/'
	}))
	.pipe(gulp.dest(''));
});
gulp.task('watch', function() {
  gulp.watch(['assets/sass/**/*'], ['sass']);
});
