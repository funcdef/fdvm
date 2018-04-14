#!/usr/bin/env node

const FDVM = require('fdvm-core')
const fs = require('fs')

var args = process.argv.slice(2);
var filename = args[0];

fs.readFile(filename, function (err, data) {
    if (err) {
        return console.log(err);
    }
    FDVM.runWasm(data);
});

