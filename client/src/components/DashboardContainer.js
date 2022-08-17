import Header from "./Header";
import React, { useState, useEffect, useContext } from "react";
import { PublicTripsContext } from "../context/PublicTripsContext";
import TripCard from "./trip/TripCard";

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
    return <TripCard key={trip.id} trip={trip}></TripCard>;
  });

  //Don't actually use TripCards, should create a different version of the Itinerary card for public display. Using Trip Card as a placeholder right now to render things quickly
  return <>{tripCards}</>;
}

export default DashboardContainer;
