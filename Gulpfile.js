const gulp = require('gulp');
const postcss = require('gulp-postcss');
const nano = require('gulp-cssnano');
const rename = require('gulp-rename');

gulp.task('css', function () {
  return gulp.src('./src/*.css')
    .pipe(
      postcss([
        require('autoprefixer'),
        require('precss')
      ])
    ).pipe(gulp.dest('./dist/'));
});

gulp.task('minify', function () {
  return gulp.src('./src/*.css')
    .pipe(
      postcss([
        require('autoprefixer'),
        require('precss')
      ])
    )
    .pipe(nano())
    .pipe(rename({ suffix: '.min' })
    ).pipe(gulp.dest('./dist/'));
});

gulp.task('compile', ['css', 'minify']);
