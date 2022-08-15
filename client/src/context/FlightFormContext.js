import { createContext, useState } from "react";

export const FlightFormContext = createContext();

export const FlightFormProvider = ({ children }) => {
  const [flightNameValue, setFlightNameValue] = useState("");
  const [flightStartDateValue, setFlightStartDateValue] = useState("");
  const [flightEndDateValue, setFlightEndDateValue] = useState("");
  const [flightDurationValue, setFlightDurationValue] = useState();
  const [flightCostValue, setFlightCostValue] = useState();
  const [flightNotesValue, setFlightNotesValue] = useState("");

  const value = {
    flightNameValue,
    setFlightNameValue,
    flightStartDateValue,
    setFlightStartDateValue,
    flightEndDateValue,
    setFlightEndDateValue,
    flightCostValue,
    setFlightCostValue,
    flightDurationValue,
    setFlightDurationValue,
    flightNotesValue,
    setFlightNotesValue,
  };

  return (
    <FlightFormContext.Provider value={value}>
      {children}
    </FlightFormContext.Provider>
  );
};
