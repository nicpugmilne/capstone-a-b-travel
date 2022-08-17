import { createContext, useState } from "react";

export const PublicTripsContext = createContext();

export const PublicTripsProvider = ({ children }) => {
  const [publicTrips, setPublicTrips] = useState([]);

  const value = {
    publicTrips,
    setPublicTrips,
  };

  return (
    <PublicTripsContext.Provider value={value}>
      {children}
    </PublicTripsContext.Provider>
  );
};
