class TripsController < ApplicationController
    def index
        render json: Trip.all
    end

    def show
        trip = find_trip
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

    def update
        trip = find_trip
        trip.update!(params.permit(:name))
        render json: trip
    end

    def destroy
        trip = find_trip
        trip.destroy
        head :no_content
    end

    private
    def find_trip
        Trip.find_by!(id: params[:id])
    end

end
