class TripSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :start_date, :end_date, :slug, :tagLine, :price, :location, :activity
end
