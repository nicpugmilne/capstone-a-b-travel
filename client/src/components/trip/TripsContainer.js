// https://chakra-ui.com/docs/styled-system/responsive-styles

import { Box, SimpleGrid } from "@chakra-ui/react";
import TripCard from "./TripCard";
import TripContainerHeader from "./TripContainerHeader";
import CreateTripModal from "./CreateTripModal";
import React, { useState, useEffect } from "react";

function TripsContainer() {
  const [trips, setTrips] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetch(`/trips`, {
      method: "GET",
      //   credentials: "include",
    })
      .then((res) => res.json())
      .then((trips) => {
        setTrips(trips);
      });
  }, []);

  const tripCards = trips.map((trip) => {
    return <TripCard key={trip.id} trip={trip}></TripCard>;
  });

  return (
    <Box>
      <TripContainerHeader setModalOpen={setModalOpen} />
      <SimpleGrid minChildWidth="280px" spacingX="40px" spacingY="10px">
        {isModalOpen ? <CreateTripModal setModalOpen={setModalOpen} /> : null}
        {tripCards}
      </SimpleGrid>
    </Box>
  );
}

export default TripsContainer;
