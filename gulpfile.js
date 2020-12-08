const gulp = require('gulp')
const terser = require('gulp-terser')
const concat = require('gulp-concat')
const sourcemap = require('gulp-sourcemaps')
const sassCompiler = require('gulp-sass')
sassCompiler.compiler = require('node-sass')


function copyHTML() {
    return gulp.src('src/*.html')
    .pipe(gulp.dest('dist'))
}


function concatJS() {
    return gulp.src('src/scripts/*.js')
    .pipe(sourcemap.init())
    .pipe(concat('main.js'))
    .pipe(terser())
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest('dist/assets/js'))
}


function compileSASS() {
    return gulp.src('src/styles/*.scss')
    .pipe(sourcemap.init())
    .pipe(sassCompiler().on('error', sassCompiler.logError))
    .pipe(sourcemap.write())
    .pipe(concat('main.css'))
    .pipe(gulp.dest('dist/assets/css/'))
}


function customBootstrap() {
    return gulp.src('src/styles/custom/*.scss')
    .pipe(sourcemap.init())
    .pipe(sassCompiler().on('error', sassCompiler.logError))
    .pipe(sourcemap.write())
    .pipe(concat('customBootstrap.css'))
    .pipe(gulp.dest('dist/assets/css/'))
}



exports.default = gulp.parallel(copyHTML, customBootstrap, concatJS, compileSASS);