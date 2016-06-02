import Ember from 'ember';
import InputtableMixin from 'ember-datetime/mixins/inputtable';
import { module, test } from 'qunit';

module('Unit | Mixin | inputtable');

// Replace this with your real tests.
test('it works', function(assert) {
  let InputtableObject = Ember.Object.extend(InputtableMixin);
  let subject = InputtableObject.create();
  assert.ok(subject);
});
