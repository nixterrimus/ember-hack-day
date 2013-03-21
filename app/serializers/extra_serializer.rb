class ExtraSerializer < ActiveModel::Serializer  
  attributes :id, :name, :description, :price, :trip_id
end
