// esmが使われているパッケージを宣言
const esmPackages = [
  'preact',
];

module.exports = {
  moduleFileExtensions: ['js', 'ts', 'json', 'jsx', 'tsx'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    // '^react$': 'preact/compat',
    // '^react-dom$': 'preact/compat',
    // '^react-dom/test-utils$': 'preact/test-utils',
  },
  transformIgnorePatterns: [
    // esmが使われているパッケージを除いてIgnoreする
    `node_modules/(?!(${esmPackages.join('|')})/)`,
  ],
  setupFiles: ['<rootDir>/setupFile.ts'],
};
