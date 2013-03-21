class Trip < ActiveRecord::Base
  attr_accessible :description, :name
  has_many :bookings
  has_many :hotels, through: :bookings
end
