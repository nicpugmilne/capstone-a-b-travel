import { Box, SimpleGrid } from "@chakra-ui/react";
import ItineraryCard from "./ItineraryCard";
import ItineraryContainerHeader from "./ItineraryContainerHeader";
import CreateModuleModal from "./CreateModuleModal";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ActivityFormProvider } from "../../context/ActivityFormContext";

function ItinerariesContainer() {
  const { trip_id } = useParams();
  const [isModalOpen, setModalOpen] = useState(false);
  const [itineraries, setItineraries] = useState([]);
  const [itineraryCount, setItineraryCount] = useState(null);
  const [tripName, setTripName] = useState("");

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
      .then((newItinerary) => setItineraries([...itineraries, newItinerary]));
    setItineraryCount(itineraryCount + 1);
  }

  const itineraryCards = itineraries.map((itinerary) => {
    return (
      <ItineraryCard
        key={itinerary.id}
        itinerary={itinerary}
        setModalOpen={setModalOpen}
        handleDeleteItinerary={handleDeleteItinerary}
      ></ItineraryCard>
    );
  });

  return (
    <Box>
      <ItineraryContainerHeader
        tripName={tripName}
        tripId={trip_id}
        itineraryCount={itineraryCount}
        setItineraryCount={setItineraryCount}
        handleCreateItinerary={handleCreateItinerary}
      ></ItineraryContainerHeader>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        spacingX="20px"
        alignItems="center"
      >
        {isModalOpen ? (
          <ActivityFormProvider>
            <CreateModuleModal setModalOpen={setModalOpen} />
          </ActivityFormProvider>
        ) : null}
        {itineraryCards}
      </SimpleGrid>
    </Box>
  );
}

export default ItinerariesContainer;
