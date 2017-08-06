#!/usr/bin/env node

'use strict';

const script = require( 'path' ).join( __dirname, '../vendor/sonarlint-cli-2.1.0.566/bin', 'sonarlint' );

let args = process.argv.slice( 2 );
let command;

if ( process.platform === 'win32' ) {
    command = 'cmd.exe';
    args = [ '/c', ( script + '.bat' ) ].concat( args );
} else {
    command = script;
}

const childProcess = require( 'child_process' ).spawn( command, args );

let exitCode = 0;

childProcess.stdout.on( 'data', function ( data ) {
    const output = data.toString();

    let match;

    process.stdout.write( output );

    if( match = /^.*(\d) critical.*$/gm.exec( output ) ) {
        exitCode = match[ 1 ];
    }
} );

childProcess.on( 'error', function( data ) {
    process.stderr.write( data.toString() );
} );

childProcess.on( 'close', function ( code ) {
    if( code === 0 ) {
        process.exit( exitCode );
    }

    process.exit( code );
} );

process.on( 'SIGINT', () => {
    childProcess.kill();
} );

process.stdin.resume();
