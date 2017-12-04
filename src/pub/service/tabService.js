import  _ from 'lodash';


// クライアントからgoogle calendar apiをたたけば自動で予定をカレンダーに登録できる
// ex https://calendar.google.com/calendar/render?action=TEMPLATE&text=%E9%A3%AF%E6%B2%BC%E8%8B%B1%E6%A8%B9%E3%80%8C%E3%82%A2%E3%83%9E%E3%82%BE%E3%83%B3%20%E3%83%8A%E3%82%A4%E3%83%AB%20%E3%82%BF%E3%82%AF%E3%83%A9%E3%83%9E%E3%82%AB%E3%83%B3%E3%80%8D&location=SNOW%20Contemporary&dates=20170311/20170415&sf=true&output=xml#eventpage_6

let cnt = 0;

const DIRECTIVES = [
  '$http'
];

const tabService = function() {
  function getData() {
    const uri = '/data';
    const params = {
      t: new Date().getTime()
    };

    return $http.get(uri, { params }).then(data => {
      console.log('get data', data);
      return data;
    });
  }

  function getDatat() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: "aba" },
          { id: 11, name: "ggs" },
          { id: 111, name: "gjsa" }
        ]);
      }, 3000);
    });

  }

  function testfunc() {
    cnt++;
    return console.log('this is testfunc, gw,', cnt);
  }

  return {
    getData,
    getDatat,
    testfunc
  };
};

export default {
  tabService: [...DIRECTIVES, tabService]
}
