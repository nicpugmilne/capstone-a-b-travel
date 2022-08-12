Rails.application.routes.draw do
  resources :itinerary_modules
  resources :module_types
  resources :itineraries
  resources :trips
  resources :users
  # get '/hello', to: 'application#hello_world'

  # namespace :api do
    get "/trips/:trip_id/itineraries",
    to: "trips#itineraries_index"
  # end

  # auth routes
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"


  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end