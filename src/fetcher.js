import { parseString } from 'xml2js';
import axios from 'axios';

const promisedParseString = (data) => new Promise((resolve, reject) => {
  parseString(data.data, (err, res) => {
    if (err) {
      return reject(err);
    }
    resolve(res);
  });
});

export function getListByRegion(region) {
  const url = `http://www.tokyoartbeat.com/events/xml.php?lang=ja&contentType=${region}`;
  return axios
    .get(url)
    .then(response => promisedParseString(response));
  }

export function getPlaceListByRegion(region) {
  const url = `http://www.tokyoartbeat.com/api/venues.php?lang=ja&area=${region}`;
  return axios
    .get(url)
    .then(res => new Promise((resolve, reject) => {
      const data = res.data;
      if (data) {
        resolve(data);
      } else {
        reject({status: 500});
      }
    }));
}
