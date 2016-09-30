import _ from 'lodash';
import * as fetcher from './fetcher';

const config = [
  {
    area: 'EbisuDaikanyama',
    places: [
      'LOKO GALLERY',
      '東京都写真美術館',
      'WAITINGROOM',
      '青山｜目黒'
    ]
  },
  {
    area: 'GinzaMarunouchi',
    places: [
      'メゾンエルメス',
      '東京ステーションギャラリー',
      'Akio Nagasawa Gallery'
    ]
  },
  {
    area: 'UenoYanaka',
    places: [
    　'スカイザバスハウス',
    　'東京藝術大学',
    　'東京国立博物館',
    　'HAGISO',
    　'ヒグレ17-15キャス'
    ]
  },
  {
    area: 'KyobashiNihonbashi',
    places: [

    ]
  },
  {
    area: 'OmotesandoAoyama',
    places: [

    ]
  },
  {
    area: 'Shinjuku',
    places: [

    ]
  },
  {
    area: 'Shibuya',
    places: [

    ]
  },
  {
    area: 'RoppongiNogizaka',
    places: [

    ]
  },
  {
    area: 'KiyosumiRyogoku',
    places: [

    ]
  },
  {
    area: 'ShirokaneHiroo',
    places: [

    ]
  }
];

const analyzer = (area, places, data) => {
  let j = 0;
  data.Events.Event.forEach(function(item, i) {

    let name = item.Venue[0].Name[0];
    let hasTarget = places.filter((place) => {
      return name.indexOf(place) > -1;
    }).length;

    if (hasTarget) {
      j++;
      console.log("@", _.get(item, 'Venue.0.Name.0'));
      console.log(item.Name[0]);
      console.log("opening party:", _.get(item, 'Party.0'));
      console.log("from", _.get(item, 'DateStart.0'), 'to', _.get(item, 'DateEnd.0'), 'notes', _.get(item, 'ScheduleNote.0'));
      console.log("     ");

      // if (j === 1) {
      //   console.log(JSON.stringify(item))
      // }
    }
  });
};

config.forEach(area => {
  (function(area) {
    let areaName = area.area;
    let areaPlaces = area.places;
    fetcher.getListByRegion(areaName)
      .then((res) => {
         analyzer(areaName, areaPlaces, res);
      })
      .catch((err) => {
        console.log('error!', areaName, err);
      });
  })(area);
});
