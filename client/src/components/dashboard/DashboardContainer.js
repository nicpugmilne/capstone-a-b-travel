import Header from "../Header";
import React, { useState, useEffect, useContext } from "react";
import { PublicTripsContext } from "../../context/PublicTripsContext";
import TripCard from "../trip/TripCard";
import PublicTripCard from "./PublicTripCard";
import { SimpleGrid } from "@chakra-ui/react";

function DashboardContainer() {
  const { publicTrips, setPublicTrips } = useContext(PublicTripsContext);

  useEffect(() => {
    fetch(`/public/itineraries`, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((trips) => {
        setPublicTrips(trips);
      });
  }, []);

  const tripCards = publicTrips.map((trip) => {
    return <PublicTripCard key={trip.id} trip={trip}></PublicTripCard>;
  });

  //Don't actually use TripCards, should create a different version of the Itinerary card for public display. Using Trip Card as a placeholder right now to render things quickly
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacingX="20px">
      {tripCards}
    </SimpleGrid>
  );
}

export default DashboardContainer;
