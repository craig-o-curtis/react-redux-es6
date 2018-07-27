import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';

/*eslint-disable no-console */

fs.readFile( 'src/index.html', 'utf8', (err, markup) => {
  if ( err ) {
    return console.error( err.red );
  }

  const $ = cheerio.load( markup );

  // since a separate spreadsheet is only utilized for the prod build, need to dynamically
  $('head').prepend( '<link rel="stylesheet" href="styles.css" />' );

  fs.writeFile( 'dist/index.html', $.html(), 'utf8', ( err ) => {
    if ( err ) {
      return console.error( err.red );
    }
    console.info( 'index.html written to /dist'.green );
  } );

} );