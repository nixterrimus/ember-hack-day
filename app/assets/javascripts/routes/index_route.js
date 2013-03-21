EmberDay.IndexRoute = Ember.Route.extend({
  model: function() {
    return EmberDay.Trip.find();
  }
});
