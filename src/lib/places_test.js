import _ from 'lodash';
import axios from 'axios';
import * as fetcher from './fetcher';

const area = 'Kantoothers';

const getAreaName = (item) => {
  return _.get(item, 'fullname_ja');
};

fetcher.getPlaceListByRegion(area)
  .then((res) => {
    console.log('');
    console.log('area name', area);
    console.log('');

    res.venues.forEach((item, i) => {
      console.log('area_id', getAreaName(item));
    });
  })
  .catch((err) => {
    console.log('error!', area, err);
  });
