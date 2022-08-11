import { Box, SimpleGrid } from "@chakra-ui/react";
import ItineraryCard from "./ItineraryCard";
import ItineraryContainerHeader from "./ItineraryContainerHeader";
import CreateModuleModal from "./CreateModuleModal";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ItinerariesContainer() {
  const { trip_id } = useParams();
  const [isModalOpen, setModalOpen] = useState(false);
  const [itineraries, setItineraries] = useState([]);

  useEffect(() => {
    fetch(`/trips/${trip_id}/itineraries`, {
      method: "get",
      // credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setItineraries(data));
  }, []);

  const itineraryCards = itineraries.map((itinerary) => {
    return (
      <ItineraryCard
        key={itinerary.id}
        itinerary={itinerary}
        setModalOpen={setModalOpen}
      ></ItineraryCard>
    );
  });

  return (
    <Box>
      <ItineraryContainerHeader></ItineraryContainerHeader>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacingX="20px">
        {isModalOpen ? <CreateModuleModal setModalOpen={setModalOpen} /> : null}
        {itineraryCards}
      </SimpleGrid>
    </Box>
  );
}

export default ItinerariesContainer;
