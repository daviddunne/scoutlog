import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | logs/view', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:logs/view');
    assert.ok(route);
  });
});
