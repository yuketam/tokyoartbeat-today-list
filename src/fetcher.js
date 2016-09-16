import {parseString} from 'xml2js';
import axios from 'axios';

// add local cache

export function getListByRegion(region) {
  const url = `http://www.tokyoartbeat.com/events/xml.php?lang=ja&contentType=${region}`;
  return axios
    .get(url)
    .then(response => {
      return new Promise((resolve, reject) => {
        parseString(response.data, (err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    })
    .catch(err => {
      callback(err);
    });
}
