var gulp	 		= require('gulp'),
		path			= require('path'),
		rename		= require('gulp-rename'),
		template	= require('gulp-template'),
		sourcemaps = require('gulp-sourcemaps'),
 		babel = require('gulp-babel'),
		concat = require('gulp-concat'),
		fs				= require('fs'),
		lodash 		= require('lodash')

gulp.task('default', function () {
    return gulp.src('app/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat('all.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});
