// https://chakra-ui.com/docs/styled-system/responsive-styles

import { Box, SimpleGrid } from "@chakra-ui/react";
import TripCard from "./TripCard";
import TripContainerHeader from "./TripContainerHeader";
import CreateTripModal from "./CreateTripModal";
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { TripsContext } from "../../context/TripsContext";
import Header from "../Header";

function TripsContainer() {
  const { trips, setTrips } = useContext(TripsContext);
  const { user } = useContext(UserContext);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetch(`/users/${user.id}/trips`, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((trips) => {
        setTrips(trips);
      });
  }, []);

  const tripCards = trips.map((trip) => {
    return <TripCard key={trip.id} trip={trip}></TripCard>;
  });

  function handleAddTrip(newTrip) {
    setTrips([...trips, newTrip]);
  }

  return (
    <>
      <Header user={user}></Header>
      <Box>
        <TripContainerHeader setModalOpen={setModalOpen} />
        <SimpleGrid minChildWidth="280px" spacingX="40px" spacingY="10px">
          {isModalOpen ? (
            <CreateTripModal
              setModalOpen={setModalOpen}
              handleAddTrip={handleAddTrip}
            />
          ) : null}
          {tripCards}
        </SimpleGrid>
      </Box>
    </>
  );
}

export default TripsContainer;
