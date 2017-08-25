'use strict';

const TARGET = process.env.npm_lifecycle_event;
let env = 'build';

switch (TARGET) {
  case 'start':
    env = 'development';
    break;
  case 'ios':
  case 'android':
    env = 'production';
}

module.exports = env;
