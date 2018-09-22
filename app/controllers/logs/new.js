import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        addLog: createLog
    }
});

function createLog(){
  var title = this.get('title');
  var date = this.get('date');
  var location = this.get('location');
  var patrols = this.get('patrols');
  var patrol_leaders = this.get('patrol_leaders');
  var attendees = this.get('attendees');
  var weather = this.get('weather');
  var notes = this.get('notes');

  // create new log
  var newLog = this.store.createRecord('log', {
    title: title,
    date: new Date(date),
    location: location,
    patrols: patrols,
    patrol_leaders: patrol_leaders,
    attendees: attendees,
    weather: weather,
    notes: notes
  });

  // save to db
  newLog.save();

  // clear form
  this.setProperties({
    title: '',
    date: '',
    location: '',
    patrols: '',
    patrol_leaders: '',
    attendees: '',
    weather: '',
    notes: ''
  });
}
