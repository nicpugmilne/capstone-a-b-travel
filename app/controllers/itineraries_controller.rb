class ItinerariesController < ApplicationController
    def index
        render json: Itinerary.all
    end
end
