const config = {
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  testMatch: ["**/*.test.js"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};

module.exports = config;
