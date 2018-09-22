import Route from '@ember/routing/route';
import $ from 'jquery';

export default Route.extend({
  activate() {
  //   Ember.$('body').addClass('custom-background');
  $('body').addClass('custom-background');
  },
  model: function(){
    return this.store.findAll('log');
  }
});
