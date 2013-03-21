EmberDay.Booking = DS.Model.extend({
  hotel:    DS.belongsTo('EmberDay.Hotel'),
  trip:     DS.belongsTo('EmberDay.Trip'),
  costPerNight:   DS.attr('number'),
  numberOfNights:   DS.attr('number'),

  totalCost: function() {
    return this.get('numberOfNights') * this.get('costPerNight');
  }.property('numberOfNights', 'costPerNight'),
});
