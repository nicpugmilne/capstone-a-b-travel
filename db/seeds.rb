require "faker"

puts "Seeding initiated"

puts "Seeding users..."
2.times do
  User.create(
    username: Faker::Internet.username,
    password: "123",
  )
end

puts "Seeding trips"
8.times do
    Trip.create(
        user_id: rand(1..2),
        name: Faker::Address.country,
        image_url: 'https://cdn.vox-cdn.com/thumbor/9zHVj4OnM5pYeO8rCX-W4aL-lw0=/0x0:4428x1993/1200x800/filters:focal(1872x1198:2580x1906)/cdn.vox-cdn.com/uploads/chorus_image/image/63371518/shutterstock_785442694.0.jpg'
    )
end

puts "Seeding itineraries"
Itinerary.create(
  trip_id: 1, 
  name: Faker::Lorem.words(number: 2),
  is_favorite: false,
  is_published: false
  )

15.times do
    Itinerary.create(
        trip_id: rand(1..8),
        name: Faker::Lorem.words(number: 2),
        is_favorite: false,
        is_published: false
    )
end

puts "Seeding module_types"
ModuleType.create(name: 'Flights')
ModuleType.create(name: 'Hotel')
ModuleType.create(name: 'Ground Transportation')
ModuleType.create(name: 'Activities')

puts "Seeding itinerary modules"
5.times do
  ItineraryModule.create(
    module_type_id: rand(1..4),
    itinerary_id: 1,
    name: Faker::Lorem.words(number: 2),
    start_datetime: Faker::Date.between(from: Date.today, to: 20.days.from_now),
    end_datetime: Faker::Date.between(from: Date.today, to: 20.days.from_now),
    duration: (rand(1..50)*10),
    cost: (rand(1..50)*10),
    notes: Faker::Lorem.words(number: 20)
    )
end

50.times do
  ItineraryModule.create(
    module_type_id: rand(1..4),
    itinerary_id: rand(2..16),
    name: Faker::Lorem.words(number: 2),
    start_datetime: Faker::Date.between(from: Date.today, to: 20.days.from_now),
    end_datetime: Faker::Date.between(from: Date.today, to: 20.days.from_now),
    duration: (rand(1..50)*10),
    cost: (rand(1..50)*10),
    notes: Faker::Lorem.words(number: 20)
    )
end

puts "Seeding complete"