Unsplash.configure do |config|
  config.application_access_key = ENV["unsplash_key"]
  config.application_secret = ENV["unsplash_secret"]
  config.application_redirect_uri = "https://ab-travel.herokuapp.com/trips"
  config.utm_source = "AB-travel"
end
