module.exports = async () => {
  return {
    verbose: true,
    clearMocks: true,
    collectCoverageFrom: [
      'src/component/**/*.{ts,tsx}',
      '!**/node_modules/**'
    ],
    setupFilesAfterEnv: [
      './config/setupTest.js'
    ],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    collectCoverage: true,
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
      '^.+\\.(js|jsx)$': 'babel-jest'
    },
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': './__mocks__/fileMock.js',
      '\\.(css|scss)$': 'identity-obj-proxy'
    },
    snapshotSerializers: [
      './node_modules/enzyme-to-json/serializer'
    ]
  }
}
