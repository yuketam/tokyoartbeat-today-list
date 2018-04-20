import _ from 'lodash';
import chalk from 'chalk';

const analyzer = (area, places, data) => {
  let j = 0;
  (_.get(data, 'Events.Event') || []).forEach((item, i) => {
    const name = item.Venue[0].Name[0];
    const hasTarget = places.filter(place => {
      return name.indexOf(place) > -1;
    }).length;

    if (hasTarget) {
      const place = _.get(item, 'Venue.0.Name.0');
      const name = _.get(item, 'Name.0');
      const openingParty = JSON.stringify(_.get(item, 'Party.0') || {});
      const startDate = _.get(item, 'DateStart.0');
      const endDate = _.get(item, 'DateEnd.0');
      const scheduleNotes = _.get(item, 'ScheduleNote.0') || 'undefined';
      const calendarUrl = (() => {
        const _name = encodeURIComponent(name);
        const _place = encodeURIComponent('@' + place);
        const _startDate = startDate.replace(/-/g, '');
        const _endDate = endDate.replace(/-/g, '');
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
