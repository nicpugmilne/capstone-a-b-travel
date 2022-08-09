class Itinerary < ApplicationRecord
  belongs_to :trip
  has_many :itinerary_modules
  validates :name, presence: true
  validates :trip_id, presence: true
end
