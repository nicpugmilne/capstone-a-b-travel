class ItineraryModulesController < ApplicationController
    def create
        itinerary_module = ItineraryModule.create!(params.permit(:module_type_id, :itinerary_id, :name, :start_datetime, :end_datetime, :duration, :cost, :notes))
        render json: itinerary_module, status: :created
    end

    def destroy
        itinerary_module = ItineraryModule.find_by!(id: params[:id])
        itinerary_module.destroy
        head :no_content
    end
end
