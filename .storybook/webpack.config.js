const path = require('path');

module.exports = {
  resolve: {
    alias: {
      src: path.resolve(__dirname, '../src/'),
      '@assets': path.resolve(__dirname, '../src/assets'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@config': path.resolve(__dirname, '../src/config'),
      '@pages': path.resolve(__dirname, '../src/pages'),
      '@routes': path.resolve(__dirname, '../src/routes'),
      '@services': path.resolve(__dirname, '../src/services'),
      '@redux': path.resolve(__dirname, '../src/redux'),
      '@utils': path.resolve(__dirname, '../src/utils'),
    },
    extensions: ['.js', '.jsx', '.css', '.png', '.jpg', '.gif', '.svg', '.jpeg'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              modules: 1,
              localIdentName: '[path]-[name]-[local]',
            },
          },
          {
            loader: require.resolve('postcss-loader'),
          },
        ],
        include: path.resolve(__dirname, '../src'),
      },
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 65000,
          },
        },
      },
      {
        test: /\.woff$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            outputPath: 'fonts',
            publicPath: '../fonts',
          },
        },
      },
    ],
  },
};
