class TripsController < ApplicationController
    def index
        render json: Trip.all
    end

    def show
        trip = Trip.find(params[:id])
        render json: trip
    end

    def user_trips_index
        user = User.find(params[:user_id])
        trips = Trip.where(user_id: user.id)
        render json: trips
    end

    def itineraries_index
        trip = Trip.find(params[:trip_id])
        itineraries = trip.itineraries
        render json: itineraries
    end

    def create
        trip = Trip.create!(params.permit(:name, :image_url, :user_id))
        render json: trip, status: :created
    end

end
