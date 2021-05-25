const { resolve } = require('path');
const root = resolve(__dirname);
module.exports = {
  rootDir: root,
  testMatch: ['<rootDir>/src/**/*.test.ts', '<rootDir>/src/**/*.test.tsx'],
  setupFiles: [
    '<rootDir>/test-setup.js'
  ],
  moduleNameMapper: {
    '\\.(scss|sass|css)$': '<rootDir>/node_modules/jest-css-modules',
    '@/(.*)': '<rootDir>/src/$1'
  }
}
