import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('logs', function() {
    this.route('new');
    this.route('view', {path: '/view/:log_id'});
    this.route('edit', {path: '/edit/:log_id'});
  });
});

export default Router;
