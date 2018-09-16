import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  date: DS.attr('date'),
  location: DS.attr('string'),
  patrols: DS.attr('string'),
  patrol_leaders: DS.attr('string'),
  atendees: DS.attr('string'),
  weather: DS.attr('string'),
  notes: DS.attr('string'),
  created: DS.attr('string', {
    defaultValue: function(){
      return new Date();
    }
  })
});
