require "faker"

puts "Seeding initiated"

puts "Seeding users..."
User.create(username: "nicpugmilne", password: "123")

puts "Seeding trips"

Trip.create(
  user_id: 1,
  name: "Tokyo",
  image_url:
    "https://images.unsplash.com/photo-1542051841857-5f90071e7989?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTc3ODl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjEzODEzOTA&ixlib=rb-1.2.1&q=80&w=400"
)
Trip.create(
  user_id: 1,
  name: "Paris",
  image_url:
    "https://images.unsplash.com/photo-1541264161754-445bbdd7de52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTc3ODl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjEzODE0OTA&ixlib=rb-1.2.1&q=80&w=400"
)

puts "Seeding itineraries"
Itinerary.create(
  trip_id: 1,
  name: "Tokyo baby",
  is_favorite: false,
  is_published: true
)

Itinerary.create(
  trip_id: 1,
  name: "Via Dubai",
  is_favorite: false,
  is_published: false
)

Itinerary.create(
  trip_id: 2,
  name: "Just Paris",
  is_favorite: false,
  is_published: true
)

Itinerary.create(
  trip_id: 2,
  name: "Including Versaille",
  is_favorite: false,
  is_published: false
)

puts "Seeding module_types"
ModuleType.create(name: "Flights")
ModuleType.create(name: "Hotel")
ModuleType.create(name: "Ground Transportation")
ModuleType.create(name: "Activities")

puts "Seeding itinerary modules"

ItineraryModule.create(
  module_type_id: 1,
  itinerary_id: 1,
  name: "JL44 + JL7121",
  start_datetime: "2022-11-07",
  end_datetime: "2022-11-12",
  duration: 720,
  cost: 1504,
  notes:
    "Japan Airlines flight 44 outbound, British Airways flight 6 on return (ticketed on Japan Airlines (JL)"
)
ItineraryModule.create(
  module_type_id: 2,
  itinerary_id: 1,
  name: "HOSHINOYA Tokyo",
  start_datetime: "2022-11-07",
  end_datetime: "2022-11-09",
  cost: 1226,
  notes:
    "Recommended by Natalie. Address: 1 Chome-9-1 Ōtemachi, Chiyoda City, Tokyo 100-0004, Japan•+81 3-6214-5151"
)
ItineraryModule.create(
  module_type_id: 3,
  itinerary_id: 1,
  name: "Tokyo to Kyoto on bullet train",
  start_datetime: "2022-11-09",
  end_datetime: "2022-11-09",
  duration: 132,
  cost: 80,
  notes: "Operated by Japan Railways Shinkansen"
)
ItineraryModule.create(
  module_type_id: 4,
  itinerary_id: 1,
  name: "Nishiki Market",
  start_datetime: "2022-11-10",
  end_datetime: "2022-11-10",
  cost: 0,
  notes: "Recommended by neverendingvoyage blog"
)

ItineraryModule.create(
  module_type_id: 1,
  itinerary_id: 2,
  name: "EK 68, EK 318, EK 319, EK 65",
  start_datetime: "2022-11-10",
  end_datetime: "2022-11-18",
  duration: 1185,
  cost: 1174,
  notes:
    "Outbound flight includes overnight layover in Dubai! Return layover is 2hr 50mins"
)
ItineraryModule.create(
  module_type_id: 2,
  itinerary_id: 2,
  name: "W Dubai- The Palm",
  start_datetime: "2022-11-10",
  end_datetime: "2022-11-11",
  cost: 273,
  notes: "Hotel suggestion for layover"
)
ItineraryModule.create(
  module_type_id: 2,
  itinerary_id: 2,
  name: "Park Hyatt Tokyo",
  start_datetime: "2022-11-11",
  end_datetime: "2022-11-15",
  cost: 1540,
  notes: "Recommended by Jason"
)
ItineraryModule.create(
  module_type_id: 4,
  itinerary_id: 2,
  name: "Dinner at Ishikawa",
  start_datetime: "2022-11-12",
  end_datetime: "2022-11-12",
  cost: 740,
  notes:
    "Three Michelin starred restaurant. Suggestion to do the 10 course tasting menu"
)

ItineraryModule.create(
  module_type_id: 1,
  itinerary_id: 3,
  name: "U2 (EasyJet) 2435",
  start_datetime: "2022-11-14",
  end_datetime: "2022-11-18",
  duration: 80,
  cost: 68,
  notes: "EasyJet from Luton to CDG return"
)
ItineraryModule.create(
  module_type_id: 2,
  itinerary_id: 3,
  name: "Kimpton St Honoré Paris",
  start_datetime: "2022-11-14",
  end_datetime: "2022-11-18",
  cost: 1782,
  notes: "Close to the 1st arrondissement and the Jardin des Tuileries"
)

ItineraryModule.create(
  module_type_id: 4,
  itinerary_id: 3,
  name: "Moulin Rouge cabaret",
  start_datetime: "2022-11-15",
  end_datetime: "2022-11-15",
  cost: 200,
  notes: "Price for dinner and a show"
)

ItineraryModule.create(
  module_type_id: 3,
  itinerary_id: 4,
  name: "Eurostar",
  start_datetime: "2022-11-09",
  end_datetime: "2022-11-12",
  duration: 136,
  cost: 105,
  notes:
    "Price round trip. Departing London at 6:01am, returning anytime with incremental cost increase (early morning returns are cheapest)"
)

ItineraryModule.create(
  module_type_id: 2,
  itinerary_id: 4,
  name: "Hôtel Louvre Saint-Honoré",
  start_datetime: "2022-11-09",
  end_datetime: "2022-11-12",
  cost: 1226,
  notes: "Close to the Louvre and Notre Dame"
)
ItineraryModule.create(
  module_type_id: 3,
  itinerary_id: 4,
  name: "Train + walk to Versailles",
  start_datetime: "2022-11-11",
  end_datetime: "2022-11-11",
  duration: 26,
  cost: 14,
  notes:
    "SNCF train from Gare Montparnasse to Versailles. Max time is 26 mins but there are also some faster options at the same price. 3.4km walk from station to the palace."
)
ItineraryModule.create(
  module_type_id: 4,
  itinerary_id: 4,
  name: "Day at Versailles",
  start_datetime: "2022-11-10",
  end_datetime: "2022-11-10",
  cost: 21,
  notes: "Tickets must be purchased in advance but can be booked online."
)

puts "Seeding complete"
