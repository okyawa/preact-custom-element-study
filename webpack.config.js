const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  mode: isProduction ? "production" : "development",
  entry: {
    "video-hls": "./src/index.tsx",
    "product-fom": "./src/product-fom.tsx",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx"],
    alias: {
      react: "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat",
      // test-utilsの下にある必要があります。
    },
  },
  plugins: [
/*
    // 下記のJSXの設定を加えるとエラーになるので、一旦コメントアウト
    [
      "@babel/plugin-transform-react-jsx", {
        "pragma": "h",
        "pragmaFrag": "Fragment",
      }
    ],
*/
    new HtmlWebpackPlugin({
      template: "./demo/index.html",
    }),
  ],
};
