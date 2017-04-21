import * as fetcher from 'libs/fetcher';
import config from 'config';
import analyzer from 'libs/analyzer';



// クライアントからgoogle calendar apiをたたけば自動で予定をカレンダーに登録できる
// ex https://calendar.google.com/calendar/render?action=TEMPLATE&text=%E9%A3%AF%E6%B2%BC%E8%8B%B1%E6%A8%B9%E3%80%8C%E3%82%A2%E3%83%9E%E3%82%BE%E3%83%B3%20%E3%83%8A%E3%82%A4%E3%83%AB%20%E3%82%BF%E3%82%AF%E3%83%A9%E3%83%9E%E3%82%AB%E3%83%B3%E3%80%8D&location=SNOW%20Contemporary&dates=20170311/20170415&sf=true&output=xml#eventpage_6


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
