import { createContext, useState } from "react";

export const TripsContext = createContext();

export const TripsProvider = ({ children }) => {
  const [trips, setTrips] = useState([]);

  const value = {
    trips,
    setTrips,
  };

  return (
    <TripsContext.Provider value={value}>{children}</TripsContext.Provider>
  );
};
