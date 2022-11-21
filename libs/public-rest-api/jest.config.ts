/* eslint-disable */
export default {
  displayName: 'public-rest-api',
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  collectCoverage: true,
  coverageDirectory: '../../coverage/libs/public-rest-api',
  coverageReporters: ['html', 'json', 'lcov', 'text', 'clover'],
  collectCoverageFrom: ['src/lib/**/*.ts', '!src/lib/**/index.ts'],
};
