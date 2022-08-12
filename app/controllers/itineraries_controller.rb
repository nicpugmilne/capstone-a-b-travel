class ItinerariesController < ApplicationController
    skip_before_action :authorize, only: [:index]
    def index
        render json: Itinerary.all
    end

    def show
        itinerary = Itinerary.find(params[:id])
        render json: itinerary
    end
end
