class TripsController < ApplicationController
    def index
        render json: Trip.all
    end

    def show
        trip = Trip.find(params[:id])
        render json: trip
    end

    def itineraries_index
        trip = find_trip
        itineraries = trip.itineraries
        render json: itineraries
    end

    def create
        trip = Trip.create!(params.permit(:name, :image_url, :user_id))
        render json: trip, status: :created
    end
    private

    def find_trip
        trip = Trip.find(params[:trip_id])
    end

end
