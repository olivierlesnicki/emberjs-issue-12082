import Ember from 'ember';
import layout from '../templates/components/bg-breadcrumb';

export default Ember.Component.extend({
  layout: layout,
  navigations: [],
  navs: function () {
    var navigations = this.get('navigations') || [],
      navs = navigations.map((nav) => {
        nav.isRoute = this.get('container').has(`route:${nav.link}`);
        nav.isUrl = !nav.isRoute;
        return nav;
      });
    return navs;
  }.property('navigations')

});
