const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/preact",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  features: {
    interactionsDebugger: true,
  },
/*
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
*/
/*
  webpackFinal: async (config) => {
    // ...
    config.resolve.alias = {
      ...config.resolve.alias,
      react: 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat',
    };
    return config;
  },
*/
  webpackFinal: async (config) => {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ];
    return config;
  },
  babel: async options => ({
    ...options,
    presets: [
      [
        "@babel/typescript",
        {
          // jsx: "react",
          jsxPragma: "h",
          // jsxFragmentFactory: "Fragment",
        },
      ]
    ],
  }),
}