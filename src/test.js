import _ from 'lodash';
import * as fetcher from './fetcher';

const config = {
  EbisuDaikanyama: [
    'LOKO GALLERY',
    '東京都写真美術館',
    'WAITINGROOM',
    '青山｜目黒'
  ],
  GinzaMarunouchi: [
    'メゾンエルメス',
    '東京ステーションギャラリー',
    'Akio Nagasawa Gallery'
  ],
  UenoYanaka: [
  　'スカイザバスハウス',
  　'東京藝術大学',
  　'東京国立博物館',
  　'HAGISO',
  　'ヒグレ17-15キャス'
  ]
};

const analyzer = (area, data) => {
  let j = 0;
  data.Events.Event.forEach(function(item, i) {

    let name = item.Venue[0].Name[0];
    let hasTarget = config[area].filter((place) => {
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

for (var area in config) {
  (function(area) {
    fetcher.getListByRegion(area)
      .then((res) => {
         analyzer(area, res);
      })
      .catch((err) => {
        console.log('error!', area, err);
      });
  })(area);
}
