import _ from 'lodash';
import chalk from 'chalk';

const analyzer = (area, places, data) => {
  let j = 0;
  (_.get(data, 'Events.Event') || []).forEach(function(item, i) {
    let name = item.Venue[0].Name[0];
    let hasTarget = places.filter((place) => {
      return name.indexOf(place) > -1;
    }).length;

    if (hasTarget) {
      let place = _.get(item, 'Venue.0.Name.0');
      let name = _.get(item, 'Name.0');
      let openingParty = JSON.stringify(_.get(item, 'Party.0') || {});
      let startDate = _.get(item, 'DateStart.0');
      let endDate = _.get(item, 'DateEnd.0');
      let scheduleNotes = _.get(item, 'ScheduleNote.0') || 'undefined';
      let calendarUrl = (function() {
        let _name = encodeURIComponent(name);
        let _place = encodeURIComponent('@' + place);
        let _startDate = startDate.replace(/-/g, '');
        let _endDate = endDate.replace(/-/g, '');
        return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${_name}${_place}&location=${_place}&dates=${_startDate}/${_endDate}&sf=true`;
      })();


      j++;

      console.log(chalk.bold('@', place));
      console.log(chalk.bold.underline(name));
      console.log(chalk.italic('from', startDate, 'to', endDate));
      console.log(chalk.dim('opening party:', openingParty));
      console.log(chalk.dim('notes', scheduleNotes));
      console.log(chalk.dim('cal url', calendarUrl));
      console.log(chalk.dim('     '));
    }
  });
};

export default analyzer;
