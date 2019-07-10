const path = require('path');

module.exports = {

  entry: {
    'background-script': './src/background-script.js',
    'history_page': './src/history_page.js',
    'options': './src/options.js'
  },

  output: {
    path: path.resolve(__dirname, 'extension'),
    filename: (chunkData) => {
      switch (chunkData.chunk.name) {
        case 'options':
        case 'history_page':
          return `./${chunkData.chunk.name}/${chunkData.chunk.name}.js`;

        default:
          return `./${chunkData.chunk.name}.js`;
      }
    }
  },

  mode: 'development',
  watch: true,

  stats: {
    colors: true
  },

  devtool: false,

};
