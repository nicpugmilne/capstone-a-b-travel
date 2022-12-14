import { ActivityFormProvider } from "../../context/ActivityFormContext";
import { HotelFormProvider } from "../../context/HotelFormContext";
import { FlightFormProvider } from "../../context/FlightFormContext";
import { GroundTransportationFormProvider } from "../../context/GroundTransportationFormContext";
import { Wrap } from "@chakra-ui/react";
import ItineraryCard from "./ItineraryCard";
import ItineraryContainerHeader from "./ItineraryContainerHeader";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ItinerariesContainer() {
  const { trip_id } = useParams();
  const [itineraries, setItineraries] = useState([]);
  const [itineraryCount, setItineraryCount] = useState(null);
  const [tripName, setTripName] = useState("");
  const [tripImage, setTripImage] = useState("");

  useEffect(() => {
    fetch(`/trips/${trip_id}/itineraries`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => establishTripData(data));
  }, []);

  function establishTripData(data) {
    setItineraries(data);
    setTripName(data[0].trip.name);
    setTripImage(data[0].trip.image_url);
    setItineraryCount(data.length);
  }

  function handleDeleteItinerary(deletedItineraryId) {
    const updatedItineraryList = itineraries.filter(
      (itinerary) => itinerary.id !== deletedItineraryId
    );
    setItineraries(updatedItineraryList);
  }

  function handleCreateItinerary() {
    const newItinerary = {
      trip_id: trip_id,
      name: `Itinerary ${itineraryCount + 1}`,
      is_favorite: false,
      is_published: false,
    };
    fetch("/itineraries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(newItinerary),
    })
      .then((r) => r.json())
      .then((newItinerary) => setItineraries([newItinerary, ...itineraries]));
    setItineraryCount(itineraryCount + 1);
  }

  function updateTripName(newName) {
    setTripName(newName);
  }

  function updateItineraryCard(updatedItinerary) {
    const updatedItinerariesList = itineraries.map((itinerary) => {
      if (itinerary.id === updatedItinerary.id) {
        return updatedItinerary;
      } else {
        return itinerary;
      }
    });
    setItineraries(updatedItinerariesList);
  }

  const itineraryCards = itineraries.map((itinerary) => {
    return (
      <ItineraryCard
        key={itinerary.id}
        itinerary={itinerary}
        handleDeleteItinerary={handleDeleteItinerary}
        updateItineraryCard={updateItineraryCard}
      ></ItineraryCard>
    );
  });

  return (
    <>
      <ItineraryContainerHeader
        tripName={tripName}
        tripId={trip_id}
        itineraryCount={itineraryCount}
        setItineraryCount={setItineraryCount}
        handleCreateItinerary={handleCreateItinerary}
        updateTripName={updateTripName}
        imageUrl={tripImage}
      ></ItineraryContainerHeader>
      <Wrap spacing="18px" justify="center" p={5}>
        <ActivityFormProvider>
          <HotelFormProvider>
            <FlightFormProvider>
              <GroundTransportationFormProvider>
                {itineraryCards}
              </GroundTransportationFormProvider>
            </FlightFormProvider>
          </HotelFormProvider>
        </ActivityFormProvider>
      </Wrap>
    </>
  );
}

export default ItinerariesContainer;
