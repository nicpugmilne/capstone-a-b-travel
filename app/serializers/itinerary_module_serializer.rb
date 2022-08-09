class ItineraryModuleSerializer < ActiveModel::Serializer
  attributes :id, :name, :start_datetime, :end_datetime, :duration, :cost, :notes
  has_one :module_type
  has_one :itinerary
end
