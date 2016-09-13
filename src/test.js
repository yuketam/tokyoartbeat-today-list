import * as fetcher from './fetcher';

fetcher.getListByRegion('EbisuDaikanyama', function(err, res) {
  console.log(err, res);
})
