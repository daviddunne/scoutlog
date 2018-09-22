// import { module, test } from 'qunit';
// import { setupRenderingTest } from 'ember-qunit';
// import { fillIn, render, visit } from '@ember/test-helpers';
// import hbs from 'htmlbars-inline-precompile';
//
// module('Integration | Component | new', function(hooks) {
//   setupRenderingTest(hooks);
//
//   test('should trigger createLog action on form submit', async function(assert){
//     assert.expect(1);
//
//     // test double for the external action
//     this.set('externalAction', (actual) => {
//       let expected = { title: 'Test Title!',  date: '30/09/81', location: 'test location', patrols: 'test patrol', patrol_leaders: 'patrol_leader', attendees: 'test attendees', weather: 'test weather', notes: 'test_notes'};
//       assert.deepEqual(actual, expected, 'submitted value is passed to external action');
//     });
//
//     // await visit('/logs/new');
//     // await render(hbs `{{new}}`);
//     await visit('logs/new');
//     // fill out the form and force an onchange
//     await fillIn('#title', 'Test Title!');
//     await fillIn('#date', '30/09/81');
//     await fillIn('#location', 'test location' );
//     await fillIn('#patrols', 'test patrol');
//     await fillIn('#patrol_leaders', 'patrol_leader');
//     await fillIn('#attendees', 'test attendees');
//     await fillIn('#weather', 'test weather');
//     await fillIn('#notes', 'test_notes');
//
//     // click the button to submit the form
//     await click('#new_log_button');
//   });
//
//   // });
// });
