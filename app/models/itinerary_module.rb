class ItineraryModule < ApplicationRecord
  belongs_to :module_type
  belongs_to :itinerary
  validates :module_type_id, presence: true
  validates :itinerary_id, presence: true
  validates :name, presence: true
  validates :start_datetime, presence: true
  validates :end_datetime, presence: true
  validates :cost, presence: true
end
