require "faker"

puts "Seeding initiated"

puts "Seeding users..."
5.times do
  User.create(
    username: Faker::Internet.username,
    password: "123",
  )
end

puts "Seeding trips"
20.times do
    Trip.create(
        user_id: rand(1..5),
        name: Faker::Address.country,
    )
end

puts "Seeding itineraries"
40.times do
    Itinerary.create(
        trip_id: rand(1..20),
        name: Faker::Alphanumeric.alpha(number: 1),
        is_favorite: false,
        is_published: false
    )
end

puts "Seeding module_types"
ModuleType.create(name: 'Flights')
ModuleType.create(name: 'Hotel')
ModuleType.create(name: 'Ground Transportation')
ModuleType.create(name: 'Activities')

puts "Seeding complete"