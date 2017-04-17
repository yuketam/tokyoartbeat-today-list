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

      j++;

      console.log(chalk.bold('@', place));
      console.log(chalk.bold.underline(name));
      console.log(chalk.italic('from', startDate, 'to', endDate));
      console.log(chalk.dim('opening party:', openingParty));
      console.log(chalk.dim('notes', scheduleNotes));
      console.log(chalk.dim('     '));
    }
  });
};

export default analyzer;
