import { createContext, useState } from "react";

export const GroundTransportationFormContext = createContext();

export const GroundTransportationFormProvider = ({ children }) => {
  const [groundTransportationNameValue, setGroundTransportationNameValue] =
    useState("");
  const [
    groundTransportationStartDateValue,
    setGroundTransportationStartDateValue,
  ] = useState("");
  const [
    groundTransportationEndDateValue,
    setGroundTransportationEndDateValue,
  ] = useState("");
  const [
    groundTransportationDurationValue,
    setGroundTransportationDurationValue,
  ] = useState();
  const [groundTransportationCostValue, setGroundTransportationCostValue] =
    useState();
  const [groundTransportationNotesValue, setGroundTransportationNotesValue] =
    useState("");

  const value = {
    groundTransportationNameValue,
    setGroundTransportationNameValue,
    groundTransportationStartDateValue,
    setGroundTransportationStartDateValue,
    groundTransportationEndDateValue,
    setGroundTransportationEndDateValue,
    groundTransportationCostValue,
    setGroundTransportationCostValue,
    groundTransportationDurationValue,
    setGroundTransportationDurationValue,
    groundTransportationNotesValue,
    setGroundTransportationNotesValue,
  };

  return (
    <GroundTransportationFormContext.Provider value={value}>
      {children}
    </GroundTransportationFormContext.Provider>
  );
};
