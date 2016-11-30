const webpack = require('webpack');

module.exports = {
  entry: {
    bundle: [
      'webpack/hot/dev-server',
      'webpack-hot-middleware/client',
      `${__dirname}/src/index.js`,
    ],
  },
  output: {
    //path: `${__dirname}/static`,
    path: `/`,
    filename: '[name].js',
    publicPath: 'http://localhost:3000/static/',
  },
  resolve: {
    modulesDirectories: [ 'node_modules', __dirname + '/src/js' ],
  },
  watchOptions: {
    poll: true,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
  ],
};
