import * as fetcher from 'lib/fetcher';
import config from 'lib/config';
import analyzer from 'lib/analyzer';


const register = (app) => {

  app.get('/', (req, res) => {
    res.render('index.jade', {
      timestamp: new Date().getTime()
    });
  });

  app.get('/ts', (req, res) => {
    res.render('index-ts.jade', {
      timestamp: new Date().getTime()
    });
  });


  app.get('/data', (req, res) => {

    Promise.all(config.map(area => {
      let areaName = area.area;
      let areaPlaces = area.places;
      return fetcher.getListByRegion(areaName)
        .then(res => {
           return Promise.resolve(analyzer(areaName, areaPlaces, res));
        });
    }))
    .then(results => { // 結果は配列にまとまって帰ってくる ['a', 'b', 'c']
      res.json(results);
    })
    .catch(err => {
      res.status(500).json(err);
    });

  });
};

exports.register = register;
