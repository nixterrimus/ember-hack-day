EmberDay.IndexController = Ember.ArrayController.extend({
  itemController: "indexTrip",

  selectTrip: function(trip) {
    this.set('selectedTrip', trip);
  },
});
