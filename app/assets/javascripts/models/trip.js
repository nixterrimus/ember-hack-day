EmberDay.Trip = DS.Model.extend({
  name:         DS.attr('string'),
  startDate:    DS.attr('date'),
  endDate:      DS.attr('date'),  
  description:  DS.attr('string'),
  hotels:       DS.hasMany('EmberDay.Hotel'),

  startMoment: function() {
    return moment(this.get('startDate'))
  }.property('startDate'),

  endMoment: function() {
    return moment(this.get('endDate'))
  }.property('endDate')
});
