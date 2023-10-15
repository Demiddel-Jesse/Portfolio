'use strict';

const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const gulp = require('gulp');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const cleancss = require('gulp-clean-css');

function buildStyles() {
	return src('scss/*.scss').pipe(sass()).pipe(cleancss()).pipe(dest('dist'));
}

function watchTask() {
	watch(['scss/**/*.scss'], buildStyles);
	watch(['js/*.js'], buildJS);
}

function buildJS() {
	return gulp.src(['js/*.js']).pipe(concat('main.js')).pipe(minify()).pipe(gulp.dest('dist'));
}

exports.default = series(buildStyles, buildJS, watchTask);
exports.build = series(buildJS, buildStyles)