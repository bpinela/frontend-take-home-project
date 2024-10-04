module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    "^.+\\.tsx?$": ["ts-jest", {
      tsconfig: "./tsconfig.test.json"
    }],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  setupFiles: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@/modules/(.*)$': '<rootDir>/src/modules/$1',
    '^@/state/(.*)$': '<rootDir>/src/state/$1',
    '^@/utils/(.*)$': '<rootDir>/src/utils/$1',
  },
};