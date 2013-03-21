EmberDay.Booking = DS.Model.extend({
  hotel:    DS.belongsTo('EmberDay.Hotel'),
  trip:     DS.belongsTo('EmberDay.Trip'),
});
