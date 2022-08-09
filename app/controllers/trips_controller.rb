class TripsController < ApplicationController
    def index
        render json: Trip.all
    end
end
