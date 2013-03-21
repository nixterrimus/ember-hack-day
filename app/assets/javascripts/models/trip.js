EmberDay.Trip = DS.Model.extend({
  name:         DS.attr('string'),
  startDate:    DS.attr('date'),
  endDate:      DS.attr('date'),  
  description:  DS.attr('string'),
});
