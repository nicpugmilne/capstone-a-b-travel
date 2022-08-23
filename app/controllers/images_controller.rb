require "figaro"
require "net/http"
require "open-uri"

class ImagesController < ApplicationController
  def get_city_image
    data_as_hash = Image.get_image(params[:city])
    render json: data_as_hash
  end
end
