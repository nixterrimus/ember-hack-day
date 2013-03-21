class TripSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :start_date, :end_date, :slug, :tagLine, :price, :location, :activity
  has_many :hotels
  has_many :extras
end
