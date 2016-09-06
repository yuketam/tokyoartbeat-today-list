import {parseString} from 'xml2js';
import request from 'request';
import fs from 'fs';
import path from 'path';
import axios from 'axios';

const target = path.join(__dirname, '../test.xml');
fs.readFile(target, (err, data) => {
    if (err) {
        throw err;
    }
    parseString(data, function (err, result) {
        console.log(result);
    });
});
