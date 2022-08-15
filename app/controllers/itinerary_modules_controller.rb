class ItineraryModulesController < ApplicationController
    def create
        byebug
        itinerary_module = ItineraryModule.create!(params.permit(:module_type_id, :itinerary_id, :name, :start_datetime, :end_datetime, :duration, :cost, :notes))
        render json: itinerary_module, status: :created
    end
end
