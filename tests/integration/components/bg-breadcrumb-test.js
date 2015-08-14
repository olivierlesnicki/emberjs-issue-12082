import {
  moduleForComponent,
  test
} from 'ember-qunit';
import Ember from 'ember';
var container, application,
  mock = [{
    title: 'Google',
    link: 'https:/google.com'
  }, {
    title: 'Error Message',
    link: 'error-message'
  }];

moduleForComponent('bg-breadcrumb', {
  beforeEach: function () {
    Ember.run(function () {
      application = Ember.Application.create({});
      container = application.__container__;
      container.register('route:error-message', Ember.Object.extend({}));
      application.deferReadiness();
    });
  }
});

test('it renders', function (assert) {
  assert.expect(2);

  // Creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('navs property', function (assert) {
  var component = this.subject();
  assert.ok(component.navs, 'navs prop should exist');
});

test('navs property', function (assert) {

  var component = this.subject({
    navigations: mock,
    container: container
  });

  assert.equal(
    component.get('navs.firstObject.isUrl'),
    true,
    'should be an URL'
  );
  assert.equal(
    component.get('navs.firstObject.isRoute'),
    false,
    'should NOT be a route'
  );
  assert.equal(
    component.get('navs.lastObject.isUrl'),
    false,
    'should NOT be an URL'
  );
  assert.equal(
    component.get('navs.lastObject.isRoute'),
    true,
    'should be a route'
  );
});
