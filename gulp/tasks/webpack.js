'use strict';

import gulp from 'gulp';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import webpackConfig from '../webpack.config.js'
import config from '../config';

gulp.task('webpack', () => {
  return gulp.src(`${config.path.js.src}/\*\*.js`)
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest(`${config.path.js.dist}`));
});
