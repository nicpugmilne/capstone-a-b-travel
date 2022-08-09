class ModuleType < ApplicationRecord
    has_many :itinerary_modules
    validates :name, presence: true
end
