class Trip < ApplicationRecord
  belongs_to :user
  has_many :itineraries
  has_many :itinerary_modules, through: :itineraries
  validates :user_id, presence: true
  validates :name, presence: true
end
