Rails.application.routes.draw do
  resources :itinerary_modules
  resources :module_types
  resources :itineraries
  resources :trips
  resources :users
  # get '/hello', to: 'application#hello_world'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end