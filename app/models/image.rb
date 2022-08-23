require "open-uri"
require "net/http"

class Image < ApplicationRecord
  UNSPLASH_API_KEY = ENV["unsplash_key"]

  def self.get_image(city)
    url =
      "https://api.unsplash.com/photos/random?count=3&query=#{city}&orientation=landscape&client_id=#{UNSPLASH_API_KEY}"
    uri = URI.parse(url)
    response = Net::HTTP.get_response(uri)
    JSON.parse(response.body)
  end
end
