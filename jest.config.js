module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['<rootDir>/src/customer/*/*/*.js'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testPathIgnorePatterns:['/node_modules/','./src/*.js','./src/redux/*.js'],
    transform:{
        '^.+\\.(js|jsx)$':'<rootDir>/node_modules/babel-jest'
    }
}