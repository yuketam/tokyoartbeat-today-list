import {parseString} from 'xml2js';
import axios from 'axios';

// add local cache

export function getListByRegion(region, callback) {
  const url = `http://www.tokyoartbeat.com/events/xml.php?lang=ja&contentType=${region}`;
  return axios
    .get(url)
    .then(function(response) {
      parseString(response.data, callback);
    })
    .catch(function(err) {
      callback(err);
    });
}
