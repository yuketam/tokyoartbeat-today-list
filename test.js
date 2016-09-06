const parseString = require('xml2js').parseString;
const request = require('request');
const fs = require('fs');
const axios = require('axios');

fs.readFile('./test.xml', function(err, data) {
    if (err) {
        throw err;
    }
    parseString(data, function (err, result) {
        console.log(result);
    });
});
