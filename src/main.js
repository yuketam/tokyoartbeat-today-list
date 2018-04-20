import * as fetcher from './fetcher';
import config from './config';
import analyzer from './analyzer';

config.forEach(area => {
  const areaName = area.area;
  const areaPlaces = area.places;
  fetcher.getListByRegion(areaName)
    .then(res => {
       analyzer(areaName, areaPlaces, res);
    })
    .catch(err => {
      console.log('error!', areaName, err);
    });
});
