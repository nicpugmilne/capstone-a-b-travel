class ItinerariesController < ApplicationController
    skip_before_action :authorize, only: [:index, :public_itineraries_index]
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

    def update
        itinerary = Itinerary.find_by!(id: params[:id])
        itinerary.update!(params.permit(:name, :is_published))
        render json: itinerary
    end

    def destroy
        itinerary = Itinerary.find(params[:id])
        itinerary.destroy
        head :no_content
    end

    def public_itineraries_index
        itineraries = Itinerary.where(is_published: true)
        render json: itineraries
    end
end
