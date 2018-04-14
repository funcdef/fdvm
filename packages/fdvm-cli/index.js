#!/usr/bin/env node

const FDVM = require('fdvm-core')
const fs = require('fs')


var program = require('commander');


program
    .version('0.1.0')
    .arguments('<filename>')
    .option('-i --imports [imports]', 'Imports', /^(rust|simple)$/i, 'simple')
    .action(function (file) {
        fileValue = file
    }).parse(process.argv);


if (typeof fileValue === 'undefined') {
    console.error('no filename given!');
    process.exit(1);
}

fs.readFile(fileValue, function (err, data) {
    if (err) {
        return console.log(err);
    }
    FDVM.runWasm(data, { imports: program.imports });
});

