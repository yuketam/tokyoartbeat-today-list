import _ from 'lodash';
import axios from 'axios';
import * as fetcher from './fetcher';
import config from './config';

const getAreaName = (item) => _.get(item, 'fullname_ja');

config.forEach(areaObj => {
  const area = areaObj.area;
  const registeredPlaces = areaObj.places;
  fetcher.getPlaceListByRegion(area)
    .then(res => {
      res.venues.forEach((item, i) => {
        const areaName = getAreaName(item);
        const checked = registeredPlaces.indexOf(areaName) > -1 ? '✔️' : '　';
        console.log(checked, area, '/', areaName);
      });
    })
    .catch(err => {
      console.log('error!', area, err);
    });
});