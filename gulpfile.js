const gulp = require('gulp');
const browserSync = require('browser-sync').create();

const style = require('./task/style.js');
const mustache = require('./task/mustache.js');
const image = require('./task/image.js');
const dele = require('./task/dele.js');
const changepath = require('./task/changepath.js');
const copybuild = require('./task/copybuild.js');
const copytest = require('./task/copytest.js');
const prettier = require('./task/prettier.js');
const archive = require('./task/archive.js');
const typograf = require('./task/typograf.js');
const sendmail = require('./task/sendmail.js');
const test = require('./task/test.js');

function watcher() {
  gulp.watch(['source/mjml/**/*.mjml', 'source/data/**/*.json'],
    gulp.series(style, mustache));
}

// serve

function serve() {
  browserSync.init({
    server: 'dev',
  });

  browserSync.watch('dev/**/*.*').on('change', browserSync.reload);
}

// command

exports.test = gulp.series(
  test,
);

exports.typograf = gulp.series(
  typograf,
);

exports.image = gulp.series(
  image,
  style,
  mustache,
);

exports.dev = gulp.series(
  style,
  mustache,
  gulp.parallel(
    serve,
    watcher,
  ),
);

exports.build = gulp.series(
  dele,
  copybuild,
  prettier,
  copytest,
  changepath,
  archive,
);

exports.sendmail = gulp.series(
  sendmail,
);
