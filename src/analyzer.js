import _ from 'lodash';

const analyzer = (area, places, data) => {
  let j = 0;
  (_.get(data, 'Events.Event') || []).forEach(function(item, i) {
    let name = item.Venue[0].Name[0];
    let hasTarget = places.filter((place) => {
      return name.indexOf(place) > -1;
    }).length;

    if (hasTarget) {
      let place = _.get(item, 'Venue.0.Name.0');
      let name = _.get(item、'Name.0');
      let openingParty = _.get(item, 'Party.0');
      let startDate = _.get(item, 'DateStart.0');
      let endDate = _.get(item, 'DateEnd.0');
      let scheduleNotes = _.get(item, 'ScheduleNote.0');

      j++;

      [
        ['@', place],
        [name],
        ['opening party:', openingParty],
        ['from', startDate, 'to', endDate, 'notes', scheduleNotes],
        ['     ']
      ].forEach(function(line) {
        console.log.apply(console, line);
      });
    }
  });
};

export default analyzer;
