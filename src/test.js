import _ from 'lodash';
import * as fetcher from './fetcher';

const config = {
  EbisuDaikanyama: [
    'LOKO GALLERY',
    '東京都写真美術館',
    'WAITINGROOM',
    '青山｜目黒'
  ]
};

const analyzer = (area, data) => {
  let j = 0;
  data.Events.Event.forEach(function(item, i) {

    // var _sample_item = {"$":{"xml:lang":"ja","id":"2016/B8F0","href":"http://www.tokyoartbeat.com/event/2016/B8F0"},"Name":["ナジャ・ソラリ 「nibble, nibble, gnaw」 展"],"Venue":[{"$":{"href":"http://www.tokyoartbeat.com/venue/873C9909"},"Name":["The Container"],"Type":["ギャラリー"],"Address":["〒153-0051 東京都目黒区上目黒1-8-30 ヒルズ代官山 1F"],"Phone":["03-3770-7750"],"Fax":[""],"Access":["東急東横線中目黒駅より徒歩4分"],"Area":[{"_":"恵比寿、代官山","$":{"areaId":"ebisu_nakame_daikan"}}],"OpeningHour":["11:00:00"],"ClosingHour":["21:00:00"],"DaysClosed":[{"$":{"mon":"0","tue":"1","wed":"0","thu":"0","fri":"0","sat":"0","sun":"0","hol":"0"}}],"ScheduleDetails":[""],"ScheduleNote":["土日祝日は10:00から20:00まで"]}],"Media":["2D: イラスト","3D: インスタレーション","その他: メディアアート"],"Description":["日本に滞在経験のある、スイス人メディアアーティスト、ナジャ・ソラリ。音の詩をもとに、ナジャ・ソラリは現代のデジタルとバーチャルな世界を包括する詩を手がけ、ボット生成されたスパムメールやテキストにインスパイアされた、特別なミクスト・メディアインスタレーションをThe Containerにて制作する。"],"Image":[{"$":{"src":"http://www.tokyoartbeat.com/media/event/2016/B8F0-30","width":"30"}},{"$":{"src":"http://www.tokyoartbeat.com/media/event/2016/B8F0-80","width":"80"}},{"$":{"src":"http://www.tokyoartbeat.com/media/event/2016/B8F0-170","width":"170"}}],"Karma":["1.20798"],"Price":[{"_":"無料","$":{"free":"1"}}],"DateStart":["2016-07-18"],"DateEnd":["2016-10-03"],"ScheduleNote":[""],"DaysBeforeEnd":["17"],"PermanentEvent":["0"],"Distance":["0"],"Datum":["tokyo"],"Latitude":["35.6429"],"Longitude":["139.703264"]};
    //
    // if (i === 0) {
    //   console.log(JSON.stringify(item));
    // }
    //console.log("item", item.Venue);
    let name = item.Venue[0].Name[0];
    let hasTarget = config[area].indexOf(name) > -1;
    if (hasTarget) {
      j++;
      console.log("@", _.get(item, 'Venue.0.Name.0'));
      console.log(item.Name[0]);
      console.log("opening party:", _.get(item, 'Party.0'));
      console.log("from", _.get(item, 'DateStart.0'), 'to', _.get(item, 'DateEnd.0'), 'notes', _.get(item, 'ScheduleNote.0'));
      console.log("     ");

      if (j === 1) {
        console.log(JSON.stringify(item))
      }
    }
  });
};

const area = 'EbisuDaikanyama';
fetcher.getListByRegion(area)
  .then((res) => {
    console.log('promise',res);
     analyzer(area, res);
  })
  .catch((err) => {
    console.log(err);
  });
