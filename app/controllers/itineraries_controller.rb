class ItinerariesController < ApplicationController
    skip_before_action :authorize, only: [:index]
    def index
        render json: Itinerary.all
    end

    def show
        itinerary = Itinerary.find(params[:id])
        render json: itinerary
    end

    def create
        itinerary = Itinerary.create!(params.permit(:trip_id, :name, :is_favorite, :is_published))
        render json: itinerary, status: :created
    end
end
