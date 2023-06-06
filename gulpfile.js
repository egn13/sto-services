import gulp from 'gulp'
import { path } from './gulp/config/path.js'
import { plugins } from './gulp/config/plugins.js'

global.app = {
  gulp: gulp,
  path: path,
  plugins: plugins,
}

import { images } from './gulp/tasks/images.js'
import { reset } from './gulp/tasks/reset.js'
import { html } from './gulp/tasks/html.js'
import { server } from './gulp/tasks/server.js'
import { js } from './gulp/tasks/js.js'
import { scss } from './gulp/tasks/scss.js'
import { fonts } from './gulp/tasks/fonts.js'

function watcher() {
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
  gulp.watch(path.watch.fonts, fonts);
}

const mainTask = gulp.series(fonts, gulp.parallel(html, scss, js, images))

const dev = gulp.series(reset, mainTask, gulp.parallel(watcher, server))
const builds = gulp.series(reset, mainTask)

export { dev }
export { builds }

gulp.task('default', dev)