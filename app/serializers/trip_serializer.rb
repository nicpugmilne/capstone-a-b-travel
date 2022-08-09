class TripSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url
  has_one :user
end
