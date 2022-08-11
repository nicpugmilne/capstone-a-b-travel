class Itinerary < ApplicationRecord
  belongs_to :trip
  has_many :itinerary_modules
  validates :name, presence: true
  validates :trip_id, presence: true

  def total_cost
    self.itinerary_modules.sum(:cost)
  end

end
