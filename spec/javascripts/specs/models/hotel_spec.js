describe("Hotel", function() {

  beforeEach(function() {
    Ember.testing = true;
  });

  describe("price calculation", function() {
    it('calculates the total revenue', function() {
      hotel = EmberDay.Hotel.createRecord({ price: 200});
      expect(hotel.get('price')).toEqual(200);
    });
  });
});
