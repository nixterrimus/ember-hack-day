EmberDay.IndexTripController = Ember.ObjectController.extend({
  
  startDateDisplay: function() {
    return this.get('startMoment').format('MM D, YYYY');
  }.property('startMoment'),

  endDateDisplay: function() {
    return this.get('endMoment').format('MM D, YYYY');
  }.property('endMoment')
});
