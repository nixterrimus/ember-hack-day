class Booking < ActiveRecord::Base
  attr_accessible :hotel_id, :trip_id
  belongs_to :hotel
  belongs_to :trip
end
