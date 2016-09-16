import {parseString} from 'xml2js';
import axios from 'axios';

// add local cache

const promisedParseString = (data) => {
  return new Promise((resolve, reject) => {
    parseString(data.data, (err, res) => {
      if (err) {
        return reject(err);
      }
      resolve(res);
    });
  });
};

export function getListByRegion(region) {
  const url = `http://www.tokyoartbeat.com/events/xml.php?lang=ja&contentType=${region}`;
  return axios
    .get(url)
    .then(response => promisedParseString(response))
    .catch(err => {
      callback(err);
    });
}
