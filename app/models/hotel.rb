class Hotel < ActiveRecord::Base
  attr_accessible :description, :name, :price
  has_many :bookings
  has_many :trips, through: :bookings
end
