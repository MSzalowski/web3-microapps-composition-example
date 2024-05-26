export default {
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testRegex: "(src/.*\\.test)\\.(ts|tsx)$",
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
