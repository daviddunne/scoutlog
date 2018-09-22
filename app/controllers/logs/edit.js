import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    editLog: function(id){
      var self = this;

      var title = this.get('model.title');
      var date = this.get('model.date');
      var location = this.get('model.location');
      var patrols = this.get('model.patrols');
      var patrol_leaders = this.get('model.patrol_leaders');
      var attendees = this.get('model.attendees');
      var weather = this.get('model.weather');
      var notes = this.get('model.notes');

      // Update log
      this.store.findRecord('log', id).then(function(log){
        log.set('title', title);
        log.set('date', new Date(date));
        log.set('location', location);
        log.set('patrols', patrols);
        log.set('patrol_leaders', patrol_leaders);
        log.set('attendees', attendees);
        log.set('weather', weather);
        log.set('notes', notes);
        log.save()

        //Redirect to logs
        self.transitionToRoute('logs');
      });
    }
  }
});
