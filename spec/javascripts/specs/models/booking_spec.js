describe("Booking", function() {
  beforeEach(function() {
    Ember.testing = true;
  });

  describe("Total Cost", function() {
    it('calculates the total cost', function() {
      Ember.run(function() {
        booking = EmberDay.Booking.createRecord({ numberOfNights: 3, costPerNight: 200 });
        expect(booking.get('totalCost')).toEqual(600);
      });
    });
  });
});
