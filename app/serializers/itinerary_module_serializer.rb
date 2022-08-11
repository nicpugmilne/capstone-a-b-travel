class ItineraryModuleSerializer < ActiveModel::Serializer
  attributes :id, :name, :start_date, :end_date, :duration, :cost, :notes, :module_type
  has_one :itinerary

  def start_date
    self.object.start_datetime.strftime("%b %d")
  end

  def end_date
    self.object.end_datetime.strftime("%b %d")
  end
end
