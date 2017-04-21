'use strict';

import gulp from 'gulp';
import eslint from 'gulp-eslint';

const eslintOptions = {
  configFile: './.eslintrc'
};

gulp.task('eslint', () => {
  return gulp.src(`${config.path.js.src}`)
    .pipe(eslint(eslintOptions))
    //.pipe(eslint.result( () => {
    //})
    .pipe(eslint.format())
});
