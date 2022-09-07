// esmが使われているパッケージを宣言
const esmPackages = [
  'preact',
];

module.exports = {
  moduleFileExtensions: ['js', 'ts', 'json', 'jsx', 'tsx'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transformIgnorePatterns: [
    // esmが使われているパッケージを除いてIgnoreする
    `node_modules/(?!(${esmPackages.join('|')})/)`,
  ],
};
