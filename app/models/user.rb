class User < ActiveRecord::Base
    has_many :trips
    has_many :itineraries, through: :trips
    validates :username, presence: true, uniqueness: true
    validates :password, presence: true

    has_secure_password
end
