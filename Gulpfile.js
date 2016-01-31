const gulp = require('gulp');
const postcss = require('gulp-postcss');
const nano = require('gulp-cssnano');
const rename = require('gulp-rename');
const autoprefixer = require('autoprefixer');
const precss = require('precss');

gulp.task('css', function () {
  return gulp.src('./src/*.css')
    .pipe(
      postcss([
        autoprefixer({ browsers: ['last 2 versions'] }),
        precss({})
      ])
    )
    .pipe(gulp.dest('./dist/'));
});

gulp.task('minify', function () {
  return gulp.src('./src/*.css')
    .pipe(
      postcss([
        autoprefixer({ browsers: ['last 2 versions'] }),
        precss({})
      ])
    )
    .pipe(nano())
    .pipe(rename({ suffix: '.min' })
    ).pipe(gulp.dest('./dist/'));
});

gulp.task('compile', ['css', 'minify']);
