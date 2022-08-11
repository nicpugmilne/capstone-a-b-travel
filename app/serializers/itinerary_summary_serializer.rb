class ItinerarySummarySerializer < ActiveModel::Serializer
  attributes :id, :name, :is_favorite, :is_published
  has_many :itinerary_modules
end
