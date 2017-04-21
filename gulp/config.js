'use strict';

import path from 'path';

const resolvePath = (p) => {
  return path.join(__dirname, '../', p);
};

const config = {
  path: {
    js: {
      src: resolvePath('src'),
      dist: resolvePath('lib')
    }
  },
  eslint: {
    src: [
      resolvePath('src')
    ]
  }
};

export default config;
