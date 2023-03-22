const nxPreset = require('@nrwl/jest/preset').default;
const { pathsToModuleNameMapper } = require('ts-jest');

// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `compilerOptions.paths` option):
const { compilerOptions } = require('./tsconfig.base.json');

module.exports = {
  ...nxPreset,

  collectCoverage: true,
  setupFilesAfterEnv: ['jest-extended/all'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
  coverageReporters: ['json-summary', 'text', 'lcov', 'json', 'html', 'text-summary'],
  coverageThreshold: {
    global: {
      lines: 70,
    },
  },
};
