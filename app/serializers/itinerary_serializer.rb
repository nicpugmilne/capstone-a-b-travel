class ItinerarySerializer < ActiveModel::Serializer
  attributes :id, :name, :is_favorite, :is_published, :total_cost, :travel_time, :itinerary_start_date, :itinerary_end_date
  has_many :itinerary_modules, serializer: ItineraryModuleSerializer
  has_one :trip

  def itinerary_start_date
    if self.object.itinerary_modules.count > 0 
      self.object.itinerary_modules.order(:start_datetime).first.start_datetime.strftime("%b %d")
    else nil 
    end
  end

  def itinerary_end_date
    if self.object.itinerary_modules.count > 0 
      self.object.itinerary_modules.order(:end_datetime).last.end_datetime.strftime("%b %d")
    else nil
    end
  end

  def total_cost
    if self.object.itinerary_modules.count > 0 
      self.object.itinerary_modules.sum(:cost)
    else 0
    end
  end

  def travel_time
    if self.object.itinerary_modules.count > 0 
      self.object.itinerary_modules.sum(:duration)
    else 0
    end
  end
end

  # def itinerary_start_date
  #   self.object.itinerary_modules.order(:start_datetime).first.start_datetime.strftime("%b %d")
  # end

  # def itinerary_end_date
  #   self.object.itinerary_modules.order(:end_datetime).last.end_datetime.strftime("%b %d")
  # end

  # def total_cost
  #   self.object.itinerary_modules.sum(:cost)
  # end

  # def travel_time
  #   self.object.itinerary_modules.sum(:duration)
  # end