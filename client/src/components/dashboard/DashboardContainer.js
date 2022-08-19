import Header from "../Header";
import React, { useState, useEffect, useContext } from "react";
import { PublicTripsContext } from "../../context/PublicTripsContext";
import TripCard from "../trip/TripCard";
import PublicTripCard from "./PublicTripCard";
import {
  GridItem,
  SimpleGrid,
  Box,
  Text,
  Flex,
  Image,
  Table,
  Th,
  Tr,
  Td,
  Button,
  Tbody,
  Thead,
  Center,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

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
