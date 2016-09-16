import * as fetcher from './fetcher';

fetcher.getListByRegion('EbisuDaikanyama')
  .then((res) => {
    console.log('promise', res);
  })
  .catch((err) => {
    console.log(err);
  });
