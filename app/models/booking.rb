class Booking < ActiveRecord::Base
  attr_accessible :hotel_id, :trip_id
  belongs_to :hotel
  belongs_to :trip

  def number_of_nights
    ( trip.number_of_days - 1 )
  end

  def cost_per_night
    hotel.price
  end
end
