// More info on Webpack's Node API at: https://webpack.github.io/docs/node.js-api.html
// Allowing console calls below since this is a build file.
/*eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

process.env.NODE_ENV = 'production'; // this assures the Babel dev config (hot reloading) doesn't apply

console.log( 'Generating minified bundle for production via Webpack. This will take a moment...'.blue );

webpack(webpackConfig).run( ( err, stats ) => {
  if (err) { // stop on a fatal error
    console.log( err.bold.red );
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map( error => console.log( error.red ) );
  }

  if (jsonStats.hasWarnings) {
    console.log( 'Webpack generated the following warnings: '.bold.yellow );
    jsonStats.warnings.map( warning => console.log( warning.yellow ) );
  }

  console.log( `Webpack stats: ${stats}` );

  // if got this far, build succeeded
  console.log( 'Your app has been compiled in production mode and written to /dist. It\'s ready for use.'.green );
});