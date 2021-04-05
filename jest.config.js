// const { resolve } = require('path');
// const root = resolve(__dirname);
module.exports = {
  // rootDir: root,
  setupFiles: [
    '<rootDir>/test-setup.js'
  ],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  }
}
