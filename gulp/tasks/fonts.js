import fonter from 'gulp-fonter'
import ttf2woff2 from 'gulp-ttf2woff2'

export const fonts = () => {
  return app.gulp.src(app.path.src.fonts)
    .pipe(fonter({
      formats: ['ttf']
    }))
    .pipe(ttf2woff2())
    .pipe(app.gulp.dest(app.path.build.fonts))
    .pipe(app.plugins.browserSync.stream())
}