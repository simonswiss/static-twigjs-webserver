const gulp = require('gulp')
const twig = require('gulp-twig')
const webserver = require('gulp-webserver')

const PATHS = {
  watch: 'src/templates/**/*',
  compile: 'src/templates/*.*',
  base: 'src/templates',
  dist: 'dist'
}

gulp.task('twig', () => {
  return gulp.src(PATHS.compile)
    .pipe(twig({ base: PATHS.base }))
    .pipe(gulp.dest(PATHS.dist))
})

gulp.task('webserver', () => {
  gulp.src(PATHS.dist)
    .pipe(webserver({ livereload: true, open: true }))
})

gulp.task('default', ['twig', 'webserver'], () => {
  gulp.watch(PATHS.watch, ['twig'])
})
