import React, { useEffect, useContext } from "react";
import { PublicTripsContext } from "../../context/PublicTripsContext";
import PublicTripCard from "./PublicTripCard";
import { Wrap } from "@chakra-ui/react";

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
  return (
    <Wrap spacing="25px" justify="center">
      {tripCards}
    </Wrap>
  );
}

export default DashboardContainer;
