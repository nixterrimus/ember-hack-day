class BookingSerializer < ActiveModel::Serializer
  attributes :hotel, :trip, :number_of_nights, :cost_per_night
end
