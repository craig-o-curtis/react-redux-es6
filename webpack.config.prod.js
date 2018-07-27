import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin'; /* PROD */

/* PROD */
const GLOBALS = {
  'process.env.NODE_ENV' : JSON.stringify('production')
};
/* PROD */

export default {
  debug: true, // displays debug information
  // devtool: 'cheap-module-eval-source-map', /* DEV */
  devtool: 'source-map', /* PROD */
  noInfo: false, // webpack displays names of all files bundling
  entry: './src/index', /* PROD */
  // entry: [ /* DEV */
  //   'eventsource-polyfill', // necessary for hot reloading in IE /* DEV */
  //   'webpack-hot-middleware/client?reload=true', // reloads page if hot reloading fails /* DEV */
  //   './src/index' // pass in app antry point last /* DEV */
  // ], /* DEV */
  target: 'web', // can also specify as 'node'
  output: { // output for dev bundle
    path: __dirname + '/dist', // physical files only output by prod build 'npm run build'; this serves in memory
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    // contentBase: './src' /* DEV */
    contentBase: './dist' /* PROD */
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(), // replace modules without browser refresh /* DEV */
    // new webpack.NoErrorsPlugin() // keeps errors from breaking hot reloading /* DEV */
    new webpack.optimize.OccurrenceOrderPlugin(), /* PROD - optimizes order files bundled in for optimal minification */
    new webpack.DefinePlugin(GLOBALS), /* PROD - define variables for bundles webpack is bundling */
    new ExtractTextPlugin('styles.css'), /* PROD - extracts text into a separate file */
    new webpack.optimize.DedupePlugin(), /* PROD - eliminates duplicate packages */
    new webpack.optimize.UglifyJsPlugin() /* PROD - minifies JS */
  ],
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      // {test: /(\.css)$/, loaders: ['style', 'css']}, /* DEV */
      {test: /(\.css)$/, loader: ExtractTextPlugin.extract("css?sourceMap") }, /* PROD - ?sourceMap query param generates a separate sourcemap file */
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  }
};