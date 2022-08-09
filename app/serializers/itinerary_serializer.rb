class ItinerarySerializer < ActiveModel::Serializer
  attributes :id, :name, :is_favorite, :is_published
  has_one :trip
end
