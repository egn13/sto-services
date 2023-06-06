import newer from 'gulp-newer'
import notify from 'gulp-notify'
import plumber from 'gulp-plumber'
import browserSync from 'browser-sync'

export const plugins = {
  browserSync: browserSync,
  plumber: plumber,
  notify: notify,
  newer: newer,
} 