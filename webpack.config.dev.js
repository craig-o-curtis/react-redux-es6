import webpack from 'webpack';
import path from 'path';

export default {
  debug: true, // displays debug information
  devtool: 'cheap-module-eval-source-map',
  noInfo: false, // webpack displays names of all files bundling
  entry: [
    'eventsource-polyfill', // necessary for hot reloading in IE
    'webpack-hot-middleware/client?reload=true', // reloads page if hot reloading fails
    './src/index' // pass in app antry point last
  ],
  target: 'web', // can also specify as 'node'
  output: { // output for dev bundle
    path: __dirname + '/dist', // physical files only output by prod build 'npm run build'; this serves in memory
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './src'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // replace modules without browser refresh
    new webpack.NoErrorsPlugin() // keeps errors from breaking hot reloading
  ],
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /(\.css)$/, loaders: ['style', 'css']},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  }
};