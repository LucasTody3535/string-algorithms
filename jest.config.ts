export default {
    preset: "ts-jest",
    testEnvironment: "node",
    modulePathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/"],
    testMatch: ["**/*.spec.ts"],
    clearMocks: true,
    collectCoverage: false
  };