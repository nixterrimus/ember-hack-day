class Trip < ActiveRecord::Base
  attr_accessible :description, :name
  has_many :bookings
  has_many :hotels, through: :bookings
  has_many :extras

  def number_of_days
    (end_date - start_date).to_i
  end
end
