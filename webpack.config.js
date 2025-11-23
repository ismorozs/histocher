const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    "background-script": "./src/background-script.js",
    popup: "./src/popup/popup-script.js",
    history_page: "./src/history_page/index.js",
    options: "./src/options/options.js",
  },

  output: {
    path: path.resolve(__dirname, "extension"),
    filename: (chunkData) => {
      switch (chunkData.chunk.name) {
        case "options":
        case "popup":
        case "history_page":
          return `./${chunkData.chunk.name}/${chunkData.chunk.name}.js`;

        default:
          return `./${chunkData.chunk.name}.js`;
      }
    },
  },

  mode: "development",
  watch: true,

  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
      },
    ],
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        createCopyPattern("icons"),
        createCopyPattern("options"),
        createCopyPattern("history_page"),
        createCopyPattern("help"),
        createCopyPattern("manifest.json"),
      ],
    }),
  ],

  stats: {
    colors: true,
  },

  devtool: false,
};

function createCopyPattern(endPoint) {
  return {
    from: path.resolve(__dirname, 'src', endPoint),
    to: path.resolve(__dirname, 'extension', endPoint),
    filter: (path) => !path.endsWith('.js'),
  };
}
