class Extra < ActiveRecord::Base
  attr_accessible :description, :name, :price, :trip_id
  belongs_to :trip
end
