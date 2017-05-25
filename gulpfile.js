const gulp = require('gulp')
const twig = require('gulp-twig')
const webserver = require('gulp-webserver')

const PATHS = {
  templates: 'src/templates/**/*',
  base: 'src/templates',
  dist: 'dist'
}

gulp.task('twig', () => {
  return gulp.src(PATHS.templates)
    .pipe(twig({ base: PATHS.base }))
    .pipe(gulp.dest(PATHS.dist))
})

gulp.task('webserver', () => {
  gulp.src(PATHS.dist)
    .pipe(webserver({ livereload: true, open: true }))
})

gulp.task('default', ['twig', 'webserver'], () => {
  gulp.watch(PATHS.templates, ['twig'])
})
